import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { fullName, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'Michael Allen <noreply@themichael.co.uk>',
      to: 'michael@uplord.co.uk',
      reply_to: email,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
