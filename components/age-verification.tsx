"use client"

import { useState, useEffect } from "react"
import { Wine } from "lucide-react"

export default function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified")
    if (!verified) {
      setIsOpen(true)
    }
  }, [])

  const handleVerify = (isOfAge: boolean) => {
    if (isOfAge) {
      localStorage.setItem("ageVerified", "true")
      setIsOpen(false)
    } else {
      window.location.href = "https://www.google.com"
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="bg-[#111] border border-[#1f1f1f] max-w-md w-full overflow-hidden">
        <div className="py-12 flex flex-col items-center justify-center border-b border-[#1f1f1f]">
          <div className="w-20 h-20 border border-[#c9a962] flex items-center justify-center mb-4">
            <Wine className="w-10 h-10 text-[#c9a962]" strokeWidth={1} />
          </div>
          <span className="text-xs tracking-[0.3em] text-[#c9a962]/60 uppercase">Wine & Spirits</span>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <h2 className="text-2xl font-light text-white tracking-wide mb-3">Age Verification</h2>
          <p className="text-white/50 mb-8 font-light">You must be 21 years or older to enter this site</p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => handleVerify(false)}
              className="px-10 py-3 border border-white/20 text-white/60 text-sm tracking-wide hover:border-white/40 hover:text-white transition-all duration-300"
            >
              NO
            </button>
            <button
              onClick={() => handleVerify(true)}
              className="px-10 py-3 border border-[#c9a962] text-[#c9a962] text-sm tracking-wide hover:bg-[#c9a962] hover:text-black transition-all duration-300"
            >
              YES, I AM 21+
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
