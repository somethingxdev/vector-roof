import { Resend } from 'resend';

const resend = new Resend("re_Pcnayivb_12nFxv6Z6dyNCLFWJqK66L5b");
const POST = async ({ params, request }) => {
  const { name, email } = await request.json();
  const send = await resend.emails.send({
    from: "onboarding@vektor-roof.ru",
    to: "a.s.yarmoluk@gmail.com",
    subject: `${name} прислал вам сообщение!`,
    text: `${email}, ${name}`
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

export { POST };
