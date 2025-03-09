import type React from "react"
import type { Metadata } from "next/types"
import { Montserrat } from "next/font/google"
import "./globals.css"
import SchemaOrg from "@/components/schema-org"
import { Analytics } from "@vercel/analytics/next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://greenseedfinancial.com"),
  title: {
    template: "%s | Green Seed Financial LLC",
    default: "Green Seed Financial LLC | Agricultural Export/Import Financial Solutions",
  },
  description:
    "Empowering global agriculture through financial solutions. We facilitate export/import of U.S. agricultural products and help foreign buyers obtain letters of credit.",
  keywords: ["agricultural finance", "export finance", "import finance", "letters of credit", "agricultural trade"],
  authors: [{ name: "Green Seed Financial LLC" }],
  creator: "Green Seed Financial LLC",
  publisher: "Green Seed Financial LLC",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical images */}
        <link
          rel="preload"
          href="/exports.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/field.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/foreign-field.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/letter-of-credit-2.webp"
          as="image"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/us-farmer.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <SchemaOrg />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

