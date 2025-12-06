"use client"

import ProductCard from "./product-card"
import { Wine } from "lucide-react"

const products = [
  {
    name: "AULTMORE OF THE FOGGIEMOSS 18 YEARS OLD",
    price: 3469000,
    image: "/1.png",
  },
  {
    name: "CLASE AZUL ANEJO TEQUILA",
    price: 14983000,
    image: "/2.png",
  },
  {
    name: "CLASE AZUL GOLD TEQUILA",
    price: 12127800,
    image: "/3.png",
  },
  {
    name: "CLASE AZUL MEZCAL GUERRERO TEQUILA",
    price: 12739800,
    image: "/4.png",
  },
  {
    name: "CLASE AZUL REPOSADO TEQUILA",
    price: 5150000,
    image: "/5.png",
  },
  {
    name: "DOM PERIGNON ROSE CHAMPAGNE",
    price: 5770000,
    image: "/6.png",
  },
  {
    name: "DOM PERIGNON VINTAGE CHAMPAGNE",
    price: 3750000,
    image: "/7.png",
  },
  {
    name: "GLENFIDDICH 21 YEARS SINGLE MALT SCOTH WHISKY",
    price: 3804000,
    image: "/8.png",
  },
  {
    name: "GLENFIDDICH 30 YEAR SINGLE MALT SCOTCH WHISKY",
    price: 25959800,
    image: "/9.png",
  },
  {
    name: "GLENMORANGIE SIGNET SINGLE MALT WHISKY",
    price: 5191800,
    image: "/10.png",
  },
  {
    name: "GRAHAM'S TAWNY 30 YEARS PORT WINE",
    price: 2945000,
    image: "/11.png",
  },
  {
    name: "GRAHAM'S TAWNY 40 YEARS PORT WINE",
    price: 3880200,
    image: "/12.png",
  },
  {
    name: "GREMILET CUVEE EVIDENCE BRUT CHAMPAGNE",
    price: 2490000,
    image: "/13.png",
  },
  {
    name: "HENNESSY PARADISE IMPERIAL FRENCH RARE COGNAC",
    price: 45850000,
    image: "/14.png",
  },
  {
    name: "JOHNNIE WALKER BLUE LABEL BLANDED SCOTCH WHISKY",
    price: 2915000,
    image: "/15.png",
  },
  {
    name: "JW BLUE LABEL ZODIAC YEAR OF THE DRAGON",
    price: 5500000,
    image: "/16.png",
  },
    {
    name: "JW BLUE LABEL ZODIAC YEAR OF THE GOAT",
    price: 5500000,
    image: "/17.png",
  },
  {
    name: "JW BLUE LABEL ZODIAC YEAR OF THE HORSE",
    price: 5500000,
    image: "/18.png",
  },
  {
    name: "JW BLUE LABEL ZODIAC YEAR OF THE MONKEY",
    price: 5500000,
    image: "/19.png",
  },
  {
    name: "JW BLUE LABEL ZODIAC YEAR OF THE OX",
    price: 5191800,
    image: "/20.png",
  },
    {
    name: "JOHNNIE WALKER KING GEORGE V",
    price: 6090000,
    image: "/21.png",
  },
  {
    name: "JURA 18 YEARS OLD SINGLE MALT WHISKY",
    price: 3365000,
    image: "/22.png",
  },
  {
    name: "MACALLAN 25 YEARS OLD SHERRY OAK",
    price: 47230000,
    image: "/23.png",
  },
  {
    name: "MACALLAN 25 YEARS OLD SINGLE MALT SCOTCH WHISKY",
    price: 46820000,
    image: "/24.png",
  },
    {
    name: "MACALLAN 30 YEARS OLD DOUBLE CASK",
    price: 90980000,
    image: "/25.png",
  },
  {
    name: "MACALLAN 30 YEARS OLD SHERRY OAK",
    price: 99350000,
    image: "/26.png",
  },
  {
    name: "MACALLAN ENIGMА SINGLE MALT SCOTCH WHISKY",
    price: 3885000,
    image: "/27.png",
  },
  {
    name: "MACALLAN HARMONY AMBER MEADOW",
    price: 4200000,
    image: "/28.png",
  },
    {
    name: "MACALLAN LITHA SINGLE MALT SCOTCH WHISKY",
    price: 4450000,
    image: "/29.png",
  },
    {
    name: "MACALLAN M DECANTER BLACK SINGLE MALT SCOTCH WHISKY",
    price: 91800000,
    image: "/30.png",
  },
  {
    name: "MACALLAN OSCURO SINGLE MALT SCOTCH WHISKY",
    price: 16170000,
    image: "/31.png",
  },
  {
    name: "MACALLAN RARE CASK RED 2020",
    price: 5700000,
    image: "/32.png",
  },
  {
    name: "MACALLAN SIR PETER BLAKE SINGLE MALT SCOTCH WHISKY",
    price: 47230000,
    image: "/33.png",
  },
    {
    name: "MARTEL XO EXTRA OLD COGNAC",
    price: 3417000,
    image: "/34.png",
  },
  {
    name: "MARTELL CORDON BLUE COGNAC",
    price: 2825000,
    image: "/35.png",
  },
]

export default function ProductGrid() {
  return (
    <section id="products" className="bg-[#0f0f0f] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide mb-4">Our Products</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#c9a962]/50" />
            <Wine className="w-4 h-4 md:w-5 md:h-5 text-[#c9a962]" strokeWidth={1.5} />
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#c9a962]/50" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
