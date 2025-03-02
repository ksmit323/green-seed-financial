import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedSection from "@/components/animated-section"

// Define the service data
const services = {
  "export-assistance": {
    title: "U.S. Export Assistance",
    description:
      "We help U.S. agricultural producers expand their markets globally through tailored financial solutions.",
    longDescription:
      "Our export assistance program provides comprehensive financial solutions for U.S. agricultural producers looking to expand into international markets. We offer specialized financing options, risk management strategies, and expert guidance to navigate the complexities of global trade.",
    image: "/us-farmer.jpg?height=800&width=1200",
    features: [
      "Export financing solutions",
      "Risk management strategies",
      "International market analysis",
      "Regulatory compliance assistance",
      "Trade documentation support",
    ],
  },
  "letters-of-credit": {
    title: "Letters of Credit",
    description:
      "Secure international transactions with our specialized letter of credit services for agricultural trade.",
    longDescription:
      "Our letter of credit services provide a secure payment method for international agricultural transactions. We facilitate the entire process, from application to fulfillment, ensuring that both buyers and sellers are protected throughout the transaction.",
    image: "/letter-of-credit-2.jpg?height=800&width=1200",
    features: [
      "Letter of credit issuance and confirmation",
      "Document verification and processing",
      "Payment guarantee mechanisms",
      "Risk mitigation strategies",
      "Compliance with international standards",
    ],
  },
  "international-import": {
    title: "International Import",
    description:
      "Facilitating smooth import of U.S. agricultural products for foreign buyers with comprehensive financial support.",
    longDescription:
      "Our international import services help foreign buyers access high-quality U.S. agricultural products with comprehensive financial support. We provide financing options, payment solutions, and logistical assistance to ensure smooth transactions.",
    image: "/foreign-field.jpg?height=800&width=1200",
    features: [
      "Import financing solutions",
      "Payment processing services",
      "Supplier verification",
      "Logistics coordination",
      "Customs clearance assistance",
    ],
  },
}

// Define the types for our params and service data
type ServiceParams = {
  slug: keyof typeof services
}

type ServiceData = {
  title: string
  description: string
  longDescription: string
  image: string
  features: string[]
}

// Generate static params for all service pages
export function generateStaticParams(): ServiceParams[] {
  return (Object.keys(services) as (keyof typeof services)[]).map((slug) => ({ slug }));
}

// Generate metadata for each service page
export function generateMetadata({ params }: { params: ServiceParams }): Metadata {
  const service = services[params.slug]

  if (!service) {
    return {
      title: "Service Not Found | Green Seed Financial LLC",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} | Green Seed Financial LLC`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Green Seed Financial LLC`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  }
}

export default function ServicePage({ params }: { params: ServiceParams }) {
  const serviceData = services[params.slug] as ServiceData

  if (!serviceData) {
    return (
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="mb-6">The requested service could not be found.</p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-green-50">
        <div className="container px-4 md:px-6">
          <Link href="/#services" className="inline-flex items-center text-green-700 mb-6 hover:text-green-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{serviceData.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{serviceData.longDescription}</p>
              <Link href="/#contact">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Contact Us About This Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image
                src={serviceData.image || "/placeholder.svg"}
                alt={serviceData.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-bold text-green-700">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature}</h3>
                <p className="text-gray-600">
                  Our specialized approach ensures that you receive the best possible support for your agricultural
                  financial needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-green-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Contact our team today to learn more about our {serviceData.title.toLowerCase()} and how we can help you
            achieve your agricultural financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}

