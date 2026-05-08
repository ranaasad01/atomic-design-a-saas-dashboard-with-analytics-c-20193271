import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {  title: "Analytix — SaaS Analytics Dashboard",
  description: "Monitor your business performance with real-time analytics, revenue tracking, and user insights.",

};



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">

      <body>{children}</body>

    </html>

  );

}

