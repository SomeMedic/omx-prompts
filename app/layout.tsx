import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omx-prompts.vercel.app"),
  title: "OMX Prompts",
  description:
    "Autonomous product-delivery prompts for OpenAI Codex and oh-my-codex.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "OMX Prompts",
    description:
      "Terminal-style autonomous delivery prompts for Codex + oh-my-codex.",
    images: ["/social-preview.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "OMX Prompts",
    description:
      "Terminal-style autonomous delivery prompts for Codex + oh-my-codex.",
    images: ["/social-preview.png"]
  }
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
