import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Plagiarism Checker API",
  description: "REST API for detecting content plagiarism against web sources and academic databases."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="557f35bf-a55b-40f1-acf6-f84472dddaad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
