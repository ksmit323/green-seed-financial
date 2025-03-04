import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AnimatedSection from "@/components/animated-section";
import { servicesContent, metadataContent } from "@/lib/content";

type ServiceParams = {
  slug: keyof typeof servicesContent;
};

type Feature = {
  title: string;
  description: string;
};

type ServiceData = {
  title: string;
  description: string;
  longDescription: string | JSX.Element;
  image: string;
  features: Feature[];
};

// Generate static params for all service pages
export function generateStaticParams() {
  return Object.keys(servicesContent).map((slug) => ({ slug }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<ServiceParams> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent[slug];

  if (!service) {
    return metadataContent.services.notFound;
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
  };
}

// Page component
export default async function ServicePage({ params }: { params: Promise<ServiceParams> }) {
  const { slug } = await params;
  const serviceData = servicesContent[slug] as ServiceData;

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
    );
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
  );
}