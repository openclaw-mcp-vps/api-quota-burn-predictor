import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Quota Burn Predictor — Predict API Limits Before They Hit",
  description: "Monitor API usage patterns and predict quota exhaustion with alerts and optimization suggestions. Never get surprised by rate limits again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a313affa-1b42-4a56-9157-d3dd9e479afd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
