import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Green Seed Financial LLC",
  description: "Explore our comprehensive financial solutions for agricultural export and import needs.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

