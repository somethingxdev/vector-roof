import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const { name, message, content, filename } = await request.json();
  const send = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'hevnxv19@gmail.com',
    subject: `${name} прислал вам сообщение!`,
    text: message,
    attachments: [
      {
        content,
        filename,
      },
    ],
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: 'OK',
      },
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: 'Internal Server Error',
      },
    );
  }
};
