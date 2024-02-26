import type { Metadata, Viewport } from "next";

import "./globals.scss";
import { kodchasan } from "./font";
import Nav from "@/components/custom/common/navbar/Navbar";
import Footer from "@/components/custom/common/footer/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalstatefarm.vercel.app/"),
  title: {
    default: "Capital state farm",
    template: "%s | capital state farm",
  },
  description: "welcome to The world of organic farming",
  keywords: [
    "organic",
    "organic farm",
    "organic farming",
    "meat farm",
    "meat",
    "dairies",
    "poultry",
    "farm",
    "farming",
  ],
  authors: [{ name: "Adegoroye Sayo" }],
  openGraph: {
    title: "Capital state farm",
    description: "welcome to The world of organic farming",
    type: "website",
    // @ts-ignore
    local: "en_US",
    siteName: "capitalstatefarm",
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>
        <div>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
