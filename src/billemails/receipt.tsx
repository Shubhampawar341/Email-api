import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const BookingReceiptEmail = () => (
  <Html>
    <Head />
    <Preview>Booking Receipt</Preview>

    <Body className="bg-white font-sans">
      <Container className="mx-auto py-4 max-w-2xl">
        <Section>
          <Row>
            <Column align="center" className="text-center">
              <Text className="text-3xl font-light text-gray-600">
                Booking Receipt
              </Text>
            </Column>
          </Row>
        </Section>
        <Section className="border-collapse border-spacing-0 text-gray-700 bg-gray-200 rounded-md text-sm">
          <Row className="h-12">
            <Column align="center" className="border-r border-white px-5 h-11">
              <Text className="text-xs text-gray-500">Invoice Date</Text>
              <Text>18 Jan 2023</Text>
            </Column>
            <Column align="center" className="border-r border-white px-5 h-11">
              <Text className="text-xs font-semibold">Confirmation Id</Text>
              <Text className="underline text-blue-600">ML4F5L8522</Text>
            </Column>
          </Row>
        </Section>
        <Hr className="my-6" />
        <Section>
          <Row>
            <Column className="pl-6">
              <Text className="text-xs font-semibold">Villa 408 4 beds</Text>
              <Text className="text-xs text-gray-500">Gurgaon, Haryana</Text>
              <Text className="text-xs text-gray-500">2 adults, 1 pet</Text>
              <Text className="text-xs font-semibold text-gray-500">
                Check In- 12th March 2024, Tuesday, 1:00 pm
              </Text>
              <Text className="text-xs font-semibold text-gray-500">
                Check Out- 14th March 2024, Thursday, 11:00 am
              </Text>
              <Text className="text-xs font-semibold">Host Name - Rakesh</Text>
              <Text className="text-xs text-gray-500">
                Host email id - rakesh@gmail.com
              </Text>
            </Column>
          </Row>
        </Section>
        <Hr className="my-6" />
        <Section className="border-collapse border-spacing-0 text-gray-700 bg-gray-200 rounded-md text-sm">
          <Row className="h-12">
            <Column colSpan={2}></Column>
            <Column
              align="left"
              className="border-r border-white px-5 h-11"
              colSpan={2}
            >
              <Text className="text-xs text-gray-500"></Text>
              <Text className="text-xs text-gray-500">BILLED TO</Text>
              <Text>Visa .... 7461 (Debit Card)</Text>
              <Text className="text-xs font-semibold">Monik Malik</Text>
              <Text>MonikM@gmail.com</Text>
              <Text>8998451656</Text>
            </Column>
          </Row>
        </Section>
        <Hr className="my-6" />
        <Section align="right">
          <Row>
            <Column className="text-right">
              <Text className="text-xs font-semibold text-gray-500 pr-8">
                Amount Paid
              </Text>
            </Column>
            <Column className="h-12 border-l border-gray-300"></Column>
            <Column className="w-24 text-right pl-10">
              <Text className="text-base font-bold">$25,500</Text>
            </Column>
          </Row>
        </Section>
        <Hr className="my-16" />
      </Container>
    </Body>
  </Html>
);

export default BookingReceiptEmail;
