import { Resend } from "resend";
import BookingReceiptEmail from "../../../billemails/receipt";


const resend = new Resend(process.env.Booking_API_KEY);

export async function POST(request: Request) {
  const {firstName , email} = await request.json();
  await resend.emails.send({
    from: 'email@fusionstayz.in',
    to: "shubhampawar341@gmail.com",
    subject: 'Booking Confirmed',
    react: BookingReceiptEmail(
      {firstName}
    ),
  });
}