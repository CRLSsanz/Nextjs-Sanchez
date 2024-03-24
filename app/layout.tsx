import type { Metadata } from "next";
import {
  Roboto_Condensed,
  Roboto,
  Poppins,
  Raleway,
  Orbitron,
  Inter,
  Comfortaa,
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
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          async
        />
      </body>
    </html>
  );
}
