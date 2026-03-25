import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FedXaaS | Federal Execution for Software Companies and Investors",
  description:
    "FedXaaS helps executives and investors build scalable federal businesses with the right strategy, sequencing, and long-term alignment — avoiding costly mistakes and lost opportunity.",
  openGraph: {
    title: "FedXaaS | Federal Execution for Software Companies and Investors",
    description:
      "Strategic advisory for executives and investors entering the U.S. federal market. Avoid costly mistakes. Build a federal business that scales.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FedXaaS | Federal Execution for Software Companies and Investors",
    description:
      "Strategic advisory for executives and investors entering the U.S. federal market.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
