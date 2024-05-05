import { Resend } from "resend";
import Welcome from "../../../emails/Welcome";


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {firstName , email} = await request.json();
  await resend.emails.send({
    from: 'email@fusionstayz.in',
    to: "shubhampawar341@gmail.com",
    subject: 'Welcome to Stayvana',
    react: Welcome(
      {firstName}
    ),
  });
}