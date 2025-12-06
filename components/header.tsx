"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Wine } from "lucide-react"
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (


<header className="bg-[#0f0f0f] border-b border-[#1f1f1f] sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
    <div className="flex items-center justify-between h-20">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-38 h-38 flex items-center justify-center">
          <div className="w-38 h-38 relative">
            <Image
              src="/DRAGON PHOENIX.png"   // must be in /public folder
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-light tracking-widest text-white">
            DRAGON PHOENIX
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#f60700]/70 uppercase">
            LOUNGE & KTV
          </span>
        </div>
      </Link>
    


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide">
              Home
            </Link>
            <Link
              href="#products"
              className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
            >
              Products
            </Link>
            
            <Link
              href="/gallery"
              className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
            >
              Gallery
            </Link>
            <Link
              href="#services"
              className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-white/70 hover:text-[#f60700] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-[#1f1f1f]">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide">
                Home
              </Link>
              <Link
                href="#products"
                className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
              >
                Products
              </Link>
              <Link
                href="#deals"
                className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
              >
                Promotions
              </Link>
              <Link
                href="/gallery"
                className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
              >
                Gallery
              </Link>
              <Link
                href="#services"
                className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
              >
                Services
              </Link>
              <Link
                href="#contact"
                className="text-white/70 hover:text-[#f60700] transition-colors text-sm tracking-wide"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
