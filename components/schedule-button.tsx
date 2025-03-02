"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function ScheduleButton() {
  return (
    <Button
      className="w-full bg-green-700 hover:bg-green-800 text-white"
      onClick={() => window.open("https://calendly.com/greenseedfinancial", "_blank")}
    >
      Schedule Now
      <Calendar className="ml-2 h-4 w-4" />
    </Button>
  )
}

