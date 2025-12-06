"use client"

import { MessageCircle } from "lucide-react"

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in purchasing:\n\n*${name}*\nPrice: IDR ${price.toLocaleString()}\n\nPlease provide more details.`,
    )
    const phoneNumber = "6281770865888"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="group bg-[#111] border border-[#1f1f1f] hover:border-[#c9a962]/40 transition-all duration-500">
      {/* Image */}
      <div className="h-64 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center p-6">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 border-t border-[#1f1f1f] text-center">
        <h3 className="text-white font-light text-base mb-2 tracking-wide">{name}</h3>
        <p className="text-[#c9a962] font-light text-lg mb-5 tracking-wide">IDR {price.toLocaleString()}</p>

        <button
          onClick={handleWhatsAppClick}
          className="w-full border border-[#25D366] text-[#25D366] py-3 px-4 flex items-center justify-center gap-3 hover:bg-[#25D366] hover:text-white transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-sm tracking-wide">Order via WhatsApp</span>
        </button>
      </div>
    </div>
  )
}
