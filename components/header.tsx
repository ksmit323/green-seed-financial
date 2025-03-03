"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClass = isHomePage
    ? isScrolled
      ? "bg-white shadow-md py-3"
      : "bg-transparent py-5"
    : "bg-white shadow-md py-3"

  const linkClass = isHomePage && !isScrolled ? "text-white" : "text-gray-700"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo isHome={isHomePage} isScrolled={isScrolled} />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className={`font-medium hover:text-green-500 transition-colors ${linkClass}`}>
            Services
          </Link>
          <Link href="/#values" className={`font-medium hover:text-green-500 transition-colors ${linkClass}`}>
            Our Mission
          </Link>
          <Link href="/#about" className={`font-medium hover:text-green-500 transition-colors ${linkClass}`}>
            About
          </Link>
          <Link href="/#contact" className={`font-medium hover:text-green-500 transition-colors ${linkClass}`}>
            Contact
          </Link>
          <Link href="/#services">
            <Button
              className={
                isHomePage && !isScrolled
                  ? "bg-white hover:bg-white/90 text-green-700"
                  : "bg-green-700 hover:bg-green-800 text-white"
              }
            >
              Get Started
            </Button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
          <Menu className={linkClass} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="container px-4 py-5 flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <Logo className="text-green-700" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X className="text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              <Link
                href="/#services"
                className="text-xl font-medium text-gray-700 hover:text-green-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#values"
                className="text-xl font-medium text-gray-700 hover:text-green-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Mission
              </Link>
              <Link
                href="/#about"
                className="text-xl font-medium text-gray-700 hover:text-green-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#contact"
                className="text-xl font-medium text-gray-700 hover:text-green-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-green-700 hover:bg-green-800 text-white mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

