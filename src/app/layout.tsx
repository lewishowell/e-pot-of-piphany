import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "e pot of piphany",
  description: "A trippy game for elevated minds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
