// pages/api/subscribe.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body; // only email for the subscription form

    const transporter = nodemailer.createTransport({
      host: 'smtp.elasticemail.com',
      port: 2525,
      auth: {
        user: 'iminfo@integramagna.com',
        pass: 'F63AAC721194CFB801A7F3163DBC96920A2B'
      }
    });

    const mailOptions = {
      from: 'hi@integramagna.com',
      to: 'hi@integramagna.com',
      subject: 'New Subscription',
      html: `<b>New Subscriber Email:</b> ${email}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}