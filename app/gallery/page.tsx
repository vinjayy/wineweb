"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/g1.webp",
    title: "Karaoke Room",
    category: "Karaoke",
  },
  {
    id: 2,
    src: "/g2.webp",
    title: "Main Lounge",
    category: "Lounge",
  },
  {
    id: 3,
    src: "/g3.webp",
    title: "Karaoke Room",
    category: "Karaoke",
  },
  {
    id: 4,
    src: "/g4.webp",
    title: "Karaoke Room",
    category: "Karaoke",
  },
  {
    id: 5,
    src: "/g5.webp",
    title: "Karaoke Room",
    category: "Karaoke",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState<"All" | "Karaoke" | "Lounge">("All")

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <div className="bg-[#0f0f0f] border-b border-[#1f1f1f]">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#f60700] transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-4">Our Gallery</h1>
          <p className="text-white/50 text-sm tracking-wide max-w-md mx-auto mb-6">
            Explore our premium karaoke rooms and luxurious lounge spaces
          </p>
          <div className="w-24 h-[1px] bg-[#f60700] mx-auto" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-12">
          {(["All", "Karaoke", "Lounge"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 text-sm tracking-wide transition-all duration-300 border ${
                filter === tab
                  ? "bg-[#f60700] text-[#0a0a0a] border-[#f60700]"
                  : "bg-transparent text-white/70 border-white/20 hover:border-[#f60700] hover:text-[#f60700]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#1a1a1a]"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#f60700] text-xs tracking-widest uppercase">{image.category}</span>
                <h3 className="text-white text-lg font-light tracking-wide mt-1">{image.title}</h3>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" strokeWidth={1} />
          </button>
          <div className="relative max-w-5xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-[#f60700] text-xs tracking-widest uppercase">{selectedImage.category}</span>
              <h3 className="text-white text-2xl font-light tracking-wide mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
