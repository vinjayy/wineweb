import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import DealsCarousel from "@/components/deals-carousel"
import ProductGrid from "@/components/product-grid"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"

import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Header />
      <HeroSlider />
      
      <ProductGrid />
      <ServicesSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
