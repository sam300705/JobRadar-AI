import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JobRadar AI",
    template: "%s | JobRadar AI",
  },
  description:
    "Verified, evidence-backed career intelligence for discovering and understanding relevant job opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
