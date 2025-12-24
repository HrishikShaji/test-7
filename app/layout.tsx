import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "test-7",
  description: "test-7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
