const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const { Resend } = require('resend'); // 👈 Upgraded from Nodemailer to Resend API
const path = require('path'); // Node's native utility for cross-platform file paths
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Initialize Resend with your API Key variable
const resend = new Resend(process.env.RESEND_API_KEY);

// PRODUCTION FIX: Falls back to standard recipient if variable isn't injected yet
const RECIPIENT_EMAIL = process.env.RECEIVER_EMAIL || 'shouryadhondwad1113@gmail.com';
 

// Catalog Mapping - Brand names matched to file names
const catalogMapping = {
  "Saar-Hartmetall": "saar-catalog.pdf",
  "Kanefusa": "kanefusa-catalog.pdf",
  "MAQ": "maq-catalog.pdf",
  "La-Co Markal": "markal-catalog.pdf"
};

// Cross-platform asset distribution path
const CATALOG_BASE_PATH = path.join(__dirname, 'catalogs', path.sep);

// Route 1: Main Website Quote
app.post('/api/quote', async (req, res) => {
  const { name, email, company, phone, service_type, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO main_quotes (name, email, company, phone, service_type, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, email, company, phone, service_type, message]
    );

    // Send through Resend HTTP API Client (Bypasses all cloud port blocks)
    await resend.emails.send({
      from:'onboarding@resend.dev',
      to: RECIPIENT_EMAIL,
      subject: `🛠️ New Quote Request: ${name} | ${company || 'Individual'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Engineering Inquiry</h2>
          <p><strong>Customer:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service Type:</strong> ${service_type}</p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <strong>Requirement Details:</strong><br/>
            ${message}
          </div>
        </div>
      `
    });

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Server processing error" });
  }
});

// Route 2: Trade Portal Inquiry + Catalog Auto-Response
app.post('/api/trade-inquiry', async (req, res) => {
  const { name, email, brand, product_name, message } = req.body;
  try {
    // 1. Save to PostgreSQL
    const result = await pool.query(
      'INSERT INTO trade_inquiries (name, email, brand, product_name, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, brand, product_name, message]
    );

    // 2. Notify Owner (Ganesh/Recipient) via Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: RECIPIENT_EMAIL,
      subject: `📦 Trade Inquiry: [${brand}] ${product_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">Brand Catalog Inquiry</h2>
          <p><strong>Customer:</strong> ${name}</p>
          <p><strong>Brand:</strong> <span style="color: #ef4444; font-weight: bold;">${brand}</span></p>
          <p><strong>Product:</strong> ${product_name}</p>
          <p><strong>Contact Email:</strong> ${email}</p>
          <div style="background: #fef2f2; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
        </div>
      `
    });

    // 3. Auto-Reply to Customer with Catalog Attachment via Resend
    const catalogFile = catalogMapping[brand];
    
    if (catalogFile) {
      await resend.emails.send({
        from: 'Aviruddha Productivity <onboarding@resend.dev>',
        to: email, // Free tier allows sending to your own verified login/sandbox targets
        subject: `Requested Catalog: ${brand} Portfolio`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px;">
            <p>Dear ${name},</p>
            <p>Thank you for your interest in <strong>${brand}</strong> industrial solutions. Please find the requested catalog attached to this email.</p>
            <p>Our technical team is reviewing your inquiry regarding <strong>${product_name}</strong> and will reach out to you shortly for further discussion.</p>
            <br />
            <p>Best Regards,</p>
            <p><strong>Sales Team</strong><br />Aviruddha Productivity Pvt. Ltd.</p>
          </div>
        `,
        attachments: [
          {
            filename: catalogFile,
            path: `${CATALOG_BASE_PATH}${catalogFile}`
          }
        ]
      });
      console.log(`Catalog auto-sent to customer via Resend API: ${email}`);
    }

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Server processing error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} with Catalog Automation`));