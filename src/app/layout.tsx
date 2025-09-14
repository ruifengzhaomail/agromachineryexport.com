import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agricultural Machinery Export from China | Tractors, Seeders & Farm Equipment",
  description: "Professional exporter of tractors, seed drills, planters and farm equipment from China. Factory price, OEM customization, fast delivery to Africa, Latin America and Southeast Asia.",
  keywords: "agricultural machinery, tractor export, seeder, planter, farm equipment, China export, OEM customization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
