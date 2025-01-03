import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Web Data Extractor",
  description: "Extract data from websites to the structured tables and JSON",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${GeistSans.variable}`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
