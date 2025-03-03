import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ChevronDown, Globe, Leaf, ShieldCheck, TrendingUp } from "lucide-react"
import { Phone, Mail, MapPin } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimatedSection from "@/components/animated-section"
import ScheduleButton from "@/components/schedule-button"

export const metadata: Metadata = {
  title: "Green Seed Financial LLC | Agricultural Export/Import Solutions",
  description:
    "Empowering global agriculture through financial solutions. We facilitate export/import of U.S. agricultural products and help foreign buyers obtain letters of credit.",
  openGraph: {
    title: "Green Seed Financial LLC | Agricultural Export/Import Solutions",
    description:
      "Empowering global agriculture through financial solutions for export/import of U.S. agricultural products.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Seed Financial LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Seed Financial LLC | Agricultural Export/Import Solutions",
    description:
      "Empowering global agriculture through financial solutions for export/import of U.S. agricultural products.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://greenseedfinancial.com",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/field.webp"
            alt="Agricultural landscape with modern financial overlay"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 to-green-900/50" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Global Agriculture Through Financial Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Facilitating the export/import of U.S. agricultural products and helping foreign buyers obtain letters of
              credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Link href="/services/export-assistance">
                <Button size="lg" className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 font-semibold rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-md ml-4">
                  For U.S. Exporters
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services/international-import">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                  For Foreign Buyers
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <Link href="#services" className="flex flex-col items-center">
            <span className="text-sm mb-2">Discover Our Services</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection id="services" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Comprehensive financial solutions tailored for agricultural export and import needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">U.S. Export Assistance</h3>
              <p className="text-gray-600 mb-4">
                We help U.S. agricultural producers expand their markets globally through tailored financial solutions.
              </p>
              <Link
                href="/services/export-assistance"
                className="text-green-700 font-medium inline-flex items-center hover:text-green-800"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Letters of Credit</h3>
              <p className="text-gray-600 mb-4">
                Secure international transactions with our specialized letter of credit services for agricultural trade.
              </p>
              <Link
                href="/services/letters-of-credit"
                className="text-green-700 font-medium inline-flex items-center hover:text-green-800"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">International Import</h3>
              <p className="text-gray-600 mb-4">
                Facilitating smooth import of U.S. agricultural products for foreign buyers with comprehensive financial
                support.
              </p>
              <Link
                href="/services/international-import"
                className="text-green-700 font-medium inline-flex items-center hover:text-green-800"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection id="values" className="py-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Bridging the gap between agricultural producers and global markets through innovative financial solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/exports.webp"
                alt="Agricultural exports being loaded for shipping"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sustainable Growth</h3>
                  <p className="text-gray-600">
                    We believe in promoting sustainable agricultural practices while facilitating global trade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Trust & Reliability</h3>
                  <p className="text-gray-600">
                    Building long-term relationships based on trust and delivering reliable financial solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Global Perspective</h3>
                  <p className="text-gray-600">
                    Understanding diverse markets and providing tailored solutions for international agricultural trade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Green Seed Financial</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to bridge the gap between U.S. agricultural producers and international markets,
                Green Seed Financial LLC has established itself as a trusted partner in agricultural finance.
              </p>
              <p className="text-gray-600 mb-6">
                Our team combines expertise in both agriculture and finance, providing specialized solutions that
                address the unique challenges of international agricultural trade.
              </p>
              <Link href="/about">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/logo.png"
                alt="Green Seed Financial team members"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Have questions about our services? Reach out to our team for personalized assistance or schedule a
              consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <ContactForm />
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-2 text-green-700" />
                    +1 (954) 439-6108
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-2 text-green-700" />
                    robert@greenseedfinancial.com
                  </p>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-green-700" />
                    123 Big Shrimpin Street, BubbaGump, Vietnam 
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Schedule a Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Book a time that works for you to discuss your agricultural financial needs.
                </p>
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}

