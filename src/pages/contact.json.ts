import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jolyfish23@gmail.com',
    pass: 'Tiwka_22',
  },
});
export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const data = await request.formData();
    const email = data.get('email')?.toString();
    const message = data.get('message')?.toString();
    if (!email || !message) return new Response(null, { status: 400 });

    await transporter.sendMail({
      from: email,
      to: 'jolyfish23@gmail.com',
      text: message,
      subject: `${email} ${message.slice(0, 25)}`,
    });

    return redirect('/', 300);
  } catch (error) {
    return new Response(null, { status: 400 });
  }
};
