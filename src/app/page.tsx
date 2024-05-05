import { Resend } from "resend";
import { Welcome } from "../emails/Welcome";
import BookingReceiptEmail from "../billemails/receipt";

export default async function Page() {
  // async function send() {
  //   "use server";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   const { data } = await resend.emails.send({
  //     from: "onboarding@resend.dev",
  //     to: "shubhampawar341@gmail.com",
  //     subject: "Welcome to Stayvana",
  //     react: Welcome(),
  //   });
  //   console.log(data);
  // }
  async function sendR() {
    "use server";
    const resend = new Resend(process.env.Booking_api_key);
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "shubhampawar341@gmail.com",
      subject: "Booking Confirmed",
      react: BookingReceiptEmail(),
    });
    console.log(data);
  }

  return (
    <form action={sendR}>
      <button type="submit">Sign up</button>
    </form>
  );
}
