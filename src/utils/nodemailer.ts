import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: import.meta.env.EMAIL,
    pass: import.meta.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: import.meta.env.EMAIL,
  to: import.meta.env.EMAIL,
};

function escapeHtml(input: string) {
  return input.replace(/[&<"']/g, function (match) {
    const replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return replacements[match];
  });
}

export async function sendEmail(data) {
  const fullName = escapeHtml(data.fullName);
  const email = escapeHtml(data.email);
  const message = escapeHtml(data.message);
  await transporter.sendMail({
    ...mailOptions,
    subject: `Poruka sa codewilderness.me`,
    text: `
      > Ime: ${fullName}
      > Email: ${email}
      > Message: ${message}
    `,
  });
}
