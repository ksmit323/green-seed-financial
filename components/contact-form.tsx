"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react" 

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false) 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true) // Start loading
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed")
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false) 
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-full flex flex-col items-center justify-center text-center p-6"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-700" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will get back to you shortly.</p>
        <Button variant="outline" className="border-green-700 text-green-700" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" name="company" placeholder="Your Company" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">I&apos;m interested in</Label>
        <Select name="interest">
          <SelectTrigger id="interest">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="export">U.S. Export Assistance</SelectItem>
            <SelectItem value="import">International Import</SelectItem>
            <SelectItem value="loc">Letters of Credit</SelectItem>
            <SelectItem value="consulting">Financial Consulting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us about your needs..." className="min-h-[120px]" required />
      </div>

      <Button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center justify-center"
        disabled={isLoading} 
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}