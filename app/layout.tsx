import type { Metadata } from "next";
import {
  Inter,
  Comfortaa,
  Poppins,
  Raleway,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";

const inter = Roboto_Condensed({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CRL Systems",
  description: "Generated by create crlssanz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
