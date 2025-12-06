"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Truck, ShieldCheck, Award, CreditCard, Camera } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Dragon Phoenix KTV & Lounge",
    subtitle: "Jakarta Utara’s #1 No Minimum Charge Entertainment Destination",
    //cta: "Shop Now",
  },
  {
    id: 2,
    title: "Lounge • KTV • Bar",
    subtitle: "Nikmati pengalaman lounge & KTV terbaik dengan suasana mewah, musik yang memikat, dan layanan kelas atas—tanpa minimum charge.",
    //cta: "View Deals",
  },
  {
    id: 3,
    title: "Premium Wine Collection",
    subtitle: "Discover Our Finest Selection",
    cta: "Shop Now",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative h-[450px] md:h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('h2.webp')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-3 md:mb-4 tracking-wide">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 md:mb-8 font-light">
                  {slide.subtitle}
                </p>
<div className="flex flex-col sm:flex-row gap-4">
  <Link href="/gallery">
    <button className="bg-[#f60700] text-white px-8 md:px-10 py-3 text-sm tracking-widest hover:bg-[#b89952] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
      <Camera className="w-4 h-4" strokeWidth={1.5} />
      View Gallery
    </button>
  </Link>
</div>

              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-white/30 flex items-center justify-center text-white/70 hover:border-[#f60700] hover:text-[#f60700] transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-white/30 flex items-center justify-center text-white/70 hover:border-[#f60700] hover:text-[#f60700] transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#f60700] w-6 md:w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#0f0f0f]/90 backdrop-blur-sm py-3 md:py-4 border-t border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-16 text-xs md:text-sm">
          <div className="flex items-center gap-2 md:gap-3 text-white/60">
            <Truck className="w-4 h-4 md:w-5 md:h-5 text-[#f60700]" strokeWidth={1.5} />
            <span className="tracking-wide">Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-white/60">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-[#f60700]" strokeWidth={1.5} />
            <span className="tracking-wide">100% Original</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-white/60">
            <Award className="w-4 h-4 md:w-5 md:h-5 text-[#f60700]" strokeWidth={1.5} />
            <span className="tracking-wide">Best Quality</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-white/60">
            <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-[#f60700]" strokeWidth={1.5} />
            <span className="tracking-wide">Secure Payment</span>
          </div>
        </div>
      </div>
    </section>
  )
}
