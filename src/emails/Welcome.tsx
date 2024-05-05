import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  firstName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Welcome = () => (
  <Html>
    <Head />
    <Preview>Best place to book holiday destination at your ease.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/koala-logo.png`}
          width="170"
          height="50"
          alt="Stayvana"
          style={logo}
        />
        <Text style={paragraph}>Hi Shubham,</Text>
        <Text style={paragraph}>
          Welcome to Stayvana, your go-to online platform for booking
          exceptional accommodations worldwide. Whether youre seeking a cozy
          hotel room, a luxurious villa, or a homely flat, Stayvana offers an
          extensive collection of properties to suit every taste and preference.
          And also we are here at your service 24/7 , 365 days .
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://fusionstayz.in">
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best Regards,
          <br />
          The Stayvana team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Gurgaon, India</Text>
      </Container>
    </Body>
  </Html>
);

export default Welcome;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
