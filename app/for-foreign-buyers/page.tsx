import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export const metadata: Metadata = {
  title: "For Foreign Buyers | Green Seed Financial LLC",
  description:
    "Discover how Green Seed Financial can assist foreign buyers with importing U.S. agricultural products and securing letters of credit.",
}

export default function ForForeignBuyersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="relative pt-32 pb-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">For Foreign Buyers</h1>
              <p className="text-lg text-gray-600 mb-6">
                Green Seed Financial provides comprehensive solutions for foreign buyers looking to import high-quality
                U.S. agricultural products. Our expertise in international trade finance ensures smooth transactions and
                reliable partnerships.
              </p>
              <Link href="/#contact">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Foreign buyers importing U.S. agricultural products"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Services for Foreign Buyers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Letters of Credit",
              "Import Financing",
              "Risk Management",
              "Customs Assistance",
              "Supplier Verification",
              "Logistics Support",
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service}</h3>
                <p className="text-gray-600">
                  We provide comprehensive support to ensure smooth and secure transactions for foreign buyers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Import U.S. Agricultural Products?</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Let Green Seed Financial be your trusted partner in accessing high-quality U.S. agricultural products.
            Contact us today to learn more about our services for foreign buyers.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}

