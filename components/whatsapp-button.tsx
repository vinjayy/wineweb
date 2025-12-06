"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleClick = () => {
    const phoneNumber = "6281770865888" // Replace with your WhatsApp number
    const message = encodeURIComponent("Hi! I'm interested in your wine collection. Please assist me.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 z-50 group"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
      <span className="absolute right-full mr-3 px-4 py-2 bg-[#111] text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </button>
  )
}
