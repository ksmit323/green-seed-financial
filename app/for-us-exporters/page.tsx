import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export const metadata: Metadata = {
  title: "For U.S. Exporters | Green Seed Financial LLC",
  description:
    "Discover how Green Seed Financial can help U.S. agricultural producers expand their markets globally through tailored financial solutions.",
}

export default function ForUSExportersPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="relative pt-32 pb-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">For U.S. Exporters</h1>
              <p className="text-lg text-gray-600 mb-6">
                Green Seed Financial empowers U.S. agricultural producers to expand their reach in global markets. Our
                tailored financial solutions and expertise in international trade make exporting simple and profitable.
              </p>
              <Link href="/#contact">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Expand Your Markets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="U.S. agricultural exports"
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
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Services for U.S. Exporters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Export Financing",
              "Risk Management",
              "Market Analysis",
              "Regulatory Compliance",
              "Trade Documentation",
              "Buyer Verification",
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service}</h3>
                <p className="text-gray-600">
                  We provide comprehensive support to help U.S. exporters succeed in the global agricultural market.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Take Your Products Global?</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Let Green Seed Financial be your partner in expanding your agricultural business internationally. Contact us
            today to learn how we can help you reach new markets.
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

