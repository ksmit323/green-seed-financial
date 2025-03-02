import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

export const metadata: Metadata = {
  title: "About Us | Green Seed Financial LLC",
  description:
    "Learn about Green Seed Financial's mission, values, and commitment to empowering global agriculture through innovative financial solutions.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section className="relative pt-32 pb-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <Link href="/#about" className="inline-flex items-center text-green-700 mb-6 hover:text-green-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home Page
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                About Green Seed Financial
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between U.S. agricultural producers and international markets,
                Green Seed Financial LLC has established itself as a trusted partner in agricultural finance. Our team
                combines expertise in both agriculture and finance, providing specialized solutions that address the
                unique challenges of international agricultural trade.
              </p>
              <Link href="/#contact">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="Green Seed Financial team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Mission</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Empower Agriculture</h3>
              <p className="text-gray-600">
                We aim to empower agricultural businesses by providing innovative financial solutions that foster growth
                and sustainability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Bridge Global Markets</h3>
              <p className="text-gray-600">
                Our goal is to connect U.S. agricultural producers with international markets, facilitating trade and
                economic growth.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Ensure Financial Security</h3>
              <p className="text-gray-600">
                We strive to provide secure and reliable financial services, safeguarding the interests of both
                exporters and importers.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Join Us in Shaping the Future of Agricultural Finance
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Whether you&apos;re a U.S. exporter looking to expand your reach or a foreign buyer seeking quality agricultural
            products, Green Seed Financial is here to support your goals.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}

