import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f0f0f] text-white/50 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-light tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-[#c9a962] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#c9a962] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#deals" className="hover:text-[#c9a962] transition-colors">
                  Promotions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#c9a962] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#c9a962] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-light tracking-wide mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a962]" strokeWidth={1.5} />
                <span>123 Wine Street, City, Country 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a962]" strokeWidth={1.5} />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a962]" strokeWidth={1.5} />
                <span>info@wineandspirits.com</span>
              </li>
            </ul>
          </div>

          {/* Payment Options */}
          <div>
            <h4 className="text-white font-light tracking-wide mb-6">Payment Options</h4>
            <div className="grid grid-cols-5 gap-2">
              {/* Visa */}
              <div className="bg-white rounded-lg px-2 py-2 flex items-center justify-center h-12">
                <svg viewBox="0 0 48 16" className="h-4 w-auto">
                  <path
                    fill="#1A1F71"
                    d="M19.5 1.2l-2.8 13.6h-3.4l2.8-13.6h3.4zm14.3 8.8l1.8-4.9.9 4.9h-2.7zm3.8 4.8h3.2l-2.8-13.6h-2.9c-.7 0-1.2.4-1.5 1l-5.2 12.6h3.6l.7-2h4.4l.5 2zm-9.1-4.4c0-3.6-5-3.8-5-5.4 0-.5.5-1 1.5-1.1.5 0 1.9-.1 3.5.7l.6-2.9c-.9-.3-2-.6-3.4-.6-3.6 0-6.1 1.9-6.1 4.6 0 2 1.8 3.1 3.2 3.8 1.4.7 1.9 1.1 1.9 1.7 0 .9-1.1 1.3-2.2 1.4-1.8 0-2.9-.5-3.7-.9l-.7 3c.8.4 2.4.7 4 .8 3.8 0 6.3-1.9 6.4-4.8zM13.1 1.2L7.4 14.8H3.7L.9 4c-.2-.7-.3-1-.9-1.3C-1 2.1.1 1.8 1.6 1.3l.4 2 3.4 10.2 3.6-12.3h4.1z"
                  />
                </svg>
              </div>
              {/* Mastercard */}
              <div className="bg-white rounded-lg px-2 py-1 flex flex-col items-center justify-center h-12">
                <svg viewBox="0 0 48 30" className="h-4 w-auto">
                  <circle cx="16" cy="15" r="14" fill="#EB001B" />
                  <circle cx="32" cy="15" r="14" fill="#F79E1B" />
                  <path
                    d="M24 4.5c3.5 2.5 5.8 6.5 5.8 11s-2.3 8.5-5.8 11c-3.5-2.5-5.8-6.5-5.8-11s2.3-8.5 5.8-11z"
                    fill="#FF5F00"
                  />
                </svg>
                <span className="text-[6px] font-bold text-black tracking-wider mt-0.5">mastercard</span>
              </div>
              {/* JCB */}
              <div className="bg-white rounded-lg px-2 py-2 flex items-center justify-center h-12">
                <svg viewBox="0 0 48 36" className="h-5 w-auto">
                  <rect x="0" y="0" width="16" height="36" rx="4" fill="#0E4C96" />
                  <rect x="16" y="0" width="16" height="36" rx="4" fill="#E30138" />
                  <rect x="32" y="0" width="16" height="36" rx="4" fill="#009440" />
                  <text x="8" y="24" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">
                    J
                  </text>
                  <text x="24" y="24" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">
                    C
                  </text>
                  <text x="40" y="24" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle">
                    B
                  </text>
                </svg>
              </div>
              {/* Amex */}
              <div className="bg-white rounded-lg px-2 py-2 flex items-center justify-center h-12">
                <svg viewBox="0 0 48 16" className="h-4 w-auto">
                  <rect width="48" height="16" rx="2" fill="#006FCF" />
                  <text
                    x="24"
                    y="11.5"
                    fill="white"
                    fontSize="7"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="Arial"
                  >
                    AMEX
                  </text>
                </svg>
              </div>
              {/* UnionPay */}
              <div className="bg-white rounded-lg px-2 py-2 flex items-center justify-center h-12">
                <svg viewBox="0 0 48 30" className="h-5 w-auto">
                  <path d="M8 0h10l-4 30H4L8 0z" fill="#E21836" />
                  <path d="M16 0h12l-4 30H12l4-30z" fill="#00447C" />
                  <path d="M26 0h12l-4 30H22l4-30z" fill="#007B84" />
                  <text
                    x="24"
                    y="19"
                    fill="white"
                    fontSize="6"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="Arial"
                  >
                    UnionPay
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] mt-12 pt-8 flex flex-col items-center gap-6">
          <Link href="/">
            <Image
              src="/images/logo-20grand-20asia-20hotel-202.png"
              alt="Grand Asia Hotel"
              width={200}
              height={70}
              className="h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-sm font-light">&copy; 2025 Grand Asia Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
