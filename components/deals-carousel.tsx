"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles, MessageCircle } from "lucide-react"

const deals = [
  {
    id: 1,
    name: "Red Wine Premium",
    originalPrice: 465000,
    salePrice: 394000,
    discount: 20,
    image: "/premium-red-wine.png",
  },
  {
    id: 2,
    name: "White Wine Collection",
    originalPrice: 655000,
    salePrice: 600000,
    discount: 20,
    image: "/elegant-white-wine.png",
  },
  {
    id: 3,
    name: "Champagne Special",
    originalPrice: 585000,
    salePrice: 504000,
    discount: 20,
    image: "/champagne-bottle-luxury.jpg",
  },
  {
    id: 4,
    name: "Rose Wine Bundle",
    originalPrice: 499000,
    salePrice: 390000,
    discount: 20,
    image: "/rose-wine-bottle-pink.jpg",
  },
  {
    id: 5,
    name: "Sparkling Wine Set",
    originalPrice: 520000,
    salePrice: 450000,
    discount: 20,
    image: "/sparkling-wine-bottle.png",
  },
]

const handleWhatsAppClick = (deal: (typeof deals)[0]) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in purchasing:\n\n*${deal.name}*\nOriginal Price: IDR ${deal.originalPrice.toLocaleString()}\nSale Price: IDR ${deal.salePrice.toLocaleString()}\n\nPlease provide more details.`,
  )
  const phoneNumber = "6281234567890"
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
}

export default function DealsCarousel() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsToShow = 4

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % deals.length)
  }

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + deals.length) % deals.length)
  }

  const visibleDeals = []
  for (let i = 0; i < itemsToShow; i++) {
    visibleDeals.push(deals[(startIndex + i) % deals.length])
  }

  const DealCard = ({ deal, index }: { deal: (typeof deals)[0]; index: number }) => (
    <div
      key={`${deal.id}-${index}`}
      className="group bg-[#111] border border-[#1f1f1f] hover:border-[#c9a962]/40 transition-all duration-500"
    >
      {/* Image with discount badge */}
      <div className="relative h-64 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center p-6">
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-[#c9a962] text-black text-xs font-medium px-3 py-1 tracking-wider">-{deal.discount}%</div>
        </div>
        <img
          src={deal.image || "/placeholder.svg"}
          alt={deal.name}
          className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content - matching product card style */}
      <div className="p-6 border-t border-[#1f1f1f] text-center">
        <h3 className="text-white font-light text-base mb-2 tracking-wide">{deal.name}</h3>
        <p className="text-white/40 line-through text-sm mb-1">IDR {deal.originalPrice.toLocaleString()}</p>
        <p className="text-[#c9a962] font-light text-lg mb-5 tracking-wide">IDR {deal.salePrice.toLocaleString()}</p>

        <button
          onClick={() => handleWhatsAppClick(deal)}
          className="w-full border border-[#25D366] text-[#25D366] py-3 px-4 flex items-center justify-center gap-3 hover:bg-[#25D366] hover:text-white transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
          <span className="text-sm tracking-wide">Order via WhatsApp</span>
        </button>
      </div>
    </div>
  )

  return (
    <section id="deals" className="bg-[#0a0a0a] py-16 md:py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-[#c9a962]/30 px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#c9a962]" strokeWidth={1.5} />
            <span className="text-[#c9a962] text-xs tracking-[0.2em] uppercase">Limited Time</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide mb-3">Surprise Deals</h2>
          <p className="text-white/40 font-light">Exclusive bundles at unbeatable prices</p>
        </div>

        {/* Desktop view with arrows */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300 shrink-0"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <div className="grid grid-cols-4 gap-6 flex-1">
            {visibleDeals.map((deal, index) => (
              <DealCard key={`${deal.id}-${index}`} deal={deal} index={index} />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#c9a962] hover:text-[#c9a962] transition-all duration-300 shrink-0"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile view */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleDeals.slice(0, 2).map((deal, index) => (
              <DealCard key={`${deal.id}-${index}`} deal={deal} index={index} />
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 mt-10">
          {deals.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-1 transition-all duration-300 ${
                index === startIndex ? "bg-[#c9a962] w-8" : "bg-white/20 w-4 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
