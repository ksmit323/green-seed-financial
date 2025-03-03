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
      "Our U.S. Export Assistance service empowers American agricultural companies to break into international markets. We guide you in finding reliable buyers, executing sales seamlessly, and ensuring you receive full payment as soon as your goods reach the foreign buyer. With global markets rapidly evolving, we help your business adapt and capitalize on new opportunities.",
    image: "/us-farmer.webp",
    features: [
      {
        title: "Find a Buyer",
        description: "Connect with trusted international buyers ready to engage with your products.",
      },
      {
        title: "Execute the Sale",
        description: "Streamline transactions with expert guidance for a smooth sales process.",
      },
      {
        title: "Ensure Full Payment",
        description: "Secure prompt, full payment as soon as your goods reach the buyer.",
      },
    ],
  },
  "letters-of-credit": {
    title: "Letters of Credit",
    description:
      "Secure international transactions with our specialized letter of credit services for agricultural trade.",
    longDescription:
      "Our Letters of Credit service assists foreign businesses in obtaining the necessary credit to purchase American agricultural products and materials. We simplify the process and continuously explore innovative options to ensure you receive the best financing solutions for your procurement needs.",
    image: "/letter-of-credit-2.webp",
    features: [
      {
        title: "Streamlined Process",
        description: "Facilitate obtaining a letter of credit quickly and securely.",
      },
      {
        title: "Wide Range of Options",
        description: "Access a variety of agricultural products and materials through flexible solutions.",
      },
      {
        title: "Innovative Financing",
        description: "Leverage cutting-edge financial options tailored to your business needs.",
      },
    ],
  },
  "international-import": {
    title: "International Import",
    description:
      "Facilitating smooth import of U.S. agricultural products for foreign buyers with comprehensive financial support.",
      longDescription: (
        <>
          <p>We provide access to a wide selection of high-quality American agricultural products, helping farmers, processors, distributors, and storage facilities secure the goods they need. Our offerings include:</p>
            <li>  <strong>Shrimp Broodstock</strong></li>
            <li><strong>Feed</strong></li>
            <li><strong>Facility Improvements</strong></li>
            <li><strong>Alcohol</strong></li>
            <li><strong>Fresh Produce</strong></li>
          <br/>
          <p>In addition to sourcing these products, we assist in securing Letters of Credit to streamline transactions, making your import process smooth and secure.</p>
        </>
      ),
    image: "/foreign-field.webp",
    features: [
      {
        title: "Diverse Product Selection",
        description: "Access high-quality U.S. agricultural products, from fresh produce to facility improvements.",
      },
      {
        title: "Streamlined Import Process",
        description: "Simplify procurement with expert logistical and regulatory support.",
      },
      {
        title: "Secure Financing Solutions",
        description: "Obtain Letters of Credit to facilitate smooth and secure transactions.",
      },
    ],
  },
};



// Define the types for our params and service data
type ServiceParams = {
  slug: keyof typeof services
}

type Feature = {
  title: string,
  description: string,
}

type ServiceData = {
  title: string
  description: string
  longDescription: string
  image: string
  features: Feature[]
}

// Generate static params for all service pages
export function generateStaticParams(): ServiceParams[] {
  return (Object.keys(services) as (keyof typeof services)[]).map((slug) => ({ slug }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: ServiceParams }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const service = services[slug];

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

export default async function ServicePage({ params }: { params: ServiceParams }) {
  const { slug } = await Promise.resolve(params);
  const serviceData = services[slug] as ServiceData;

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
              <div className="text-lg text-gray-600 mb-6">{serviceData.longDescription}</div>
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
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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

