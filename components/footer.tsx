import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="text-white mb-4" />
            <p className="text-green-100 mb-4">Empowering global agriculture through innovative financial solutions.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  U.S. Export Assistance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Letters of Credit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  International Import
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Financial Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-green-100 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-green-100">
              <p>123 Financial District</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">info@greenseedfinancial.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-100 text-sm">
            &copy; {new Date().getFullYear()} Green Seed Financial LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-green-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-green-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-green-100 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

