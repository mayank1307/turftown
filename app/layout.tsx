import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turf Town",
  description: "Turf Town | India's #1 Sports community",
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
