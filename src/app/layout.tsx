import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Data Extractor",
  description: "Extract data from websites to the structured tables and JSON",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Web Data Extractor</div>
      <div>Sign In</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable}`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
