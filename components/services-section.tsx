import { Globe, ShieldCheck, Truck } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Worldwide Selection",
    description: "Curated wines & spirits from the finest vineyards around the world",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your transactions are protected with trusted payment gateways",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "We deliver directly to your door with care and speed",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0a0a] py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f60700]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f60700]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 border border-[#f60700]/30 flex items-center justify-center group-hover:border-[#f60700] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#f60700]" strokeWidth={1} />
                </div>
              </div>
              <h3 className="text-white font-light text-lg tracking-wide mb-3">{service.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
