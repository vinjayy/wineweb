import { MapPin, Phone, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0f0f0f] text-white/50 border-t border-[#1f1f1f]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        {/* GRID 3 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LOGO + DESC */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/DRAGON PHOENIX.png"
                  width={64}
                  height={64}
                  alt="Dragon Phoenix Logo"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-light tracking-widest text-white">
                  DRAGON PHOENIX
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#f60700]/60 uppercase">
                  LOUNGE & KTV
                </span>
              </div>
            </Link>

            <p className="text-sm font-light leading-relaxed mb-6">
              Dragon Phoenix KTV & Lounge menghadirkan hiburan tanpa batas,
              live music, KTV room, dan bar dengan nuansa Asia yang sensasional.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-light tracking-wide mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link href="/" className="hover:text-[#f60700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-[#f60700] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#f60700] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#f60700] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-light tracking-wide mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#f60700]" strokeWidth={1.5} />
                <span>
                  Jl. Bandengan Sel. No.88, RT.1/RW.2, Penjaringan, Kecamatan
                  Penjaringan, Jkt Utara
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f60700]" strokeWidth={1.5} />
                <span>+62 81770865888</span>
              </li>

              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#f60700]" strokeWidth={1.5} />
                <span>dragonphoenixlounge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-[#1f1f1f] mt-12 pt-8 text-center text-sm font-light">
          <p>&copy; 2025 Dragon Phoenix Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
