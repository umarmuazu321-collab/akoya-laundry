import { useState } from "react"
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function Services() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  const [serviceFilter, setServiceFilter] = useState("All")

  const services = [
    {
      name: "Dry Cleaning",
      category: "Dry Cleaning",
      price: "From 6 QAR",
      icon: "🧥",
      description: "Expert care for suits and delicate fabrics using eco-friendly solvents",
    },
    {
      name: "Executive Pressing",
      category: "Pressing",
      price: "From 3 QAR",
      icon: "👔",
      description: "Crisp finishes for business attire with precision steam technology",
    },
    {
      name: "Couture Care",
      category: "Specialty",
      price: "From 7 QAR",
      icon: "👗",
      description: "Hand-cleaning for designer garments and delicate fabrics",
    },
    {
      name: "Express Service",
      category: "Express",
      price: "+30% Premium",
      icon: "⚡",
      description: "3-hour turnaround for urgent garment needs",
    },
    {
      name: "Fragrance Infusion",
      category: "Add-on",
      price: "5 QAR",
      icon: "🌸",
      description: "Luxury scent options for your garments",
    },
    {
      name: "Dishdasha",
      category: "Traditional",
      price: "From 4 QAR",
      icon: "👳‍♂️",
      description: "Professional care for men's traditional Qatari garment",
    },
    {
      name: "Child Dishdasha",
      category: "Traditional",
      price: "From 3 QAR",
      icon: "👦",
      description: "Specialized care for children's traditional garments",
    },
    {
      name: "Bisht",
      category: "Traditional",
      price: "From 25 QAR",
      icon: "🧥",
      description: "Premium care for ceremonial cloak with gold detailing",
    },
    {
      name: "Ghutra",
      category: "Traditional",
      price: "From 3 QAR",
      icon: "🧕",
      description: "Gentle cleaning for traditional headwear",
    },
    {
      name: "Kurta",
      category: "Traditional",
      price: "From 4 QAR",
      icon: "👘",
      description: "Care for traditional South Asian tunic",
    },
    {
      name: "Kurta Pyjama (Set)",
      category: "Traditional",
      price: "From 6 QAR",
      icon: "👖",
      description: "Complete set cleaning for traditional attire",
    },
    {
      name: "Kameez",
      category: "Traditional",
      price: "From 4 QAR",
      icon: "👕",
      description: "Professional care for traditional long shirts",
    },
    {
      name: "Jalabiya",
      category: "Traditional",
      price: "From 6 QAR",
      icon: "👚",
      description: "Specialized care for flowing traditional gowns",
    },
    {
      name: "Abaya",
      category: "Traditional",
      price: "From 10 QAR",
      icon: "🖤",
      description: "Professional cleaning for everyday abayas",
    },
    {
      name: "Abaya Special",
      category: "Specialty",
      price: "From 12 QAR",
      icon: "✨",
      description: "Premium care for embellished abayas",
    },
    {
      name: "Hijab",
      category: "Traditional",
      price: "From 3 QAR",
      icon: "🧣",
      description: "Delicate cleaning for headscarves",
    },
    {
      name: "Gent Suit (3pcs)",
      category: "Dry Cleaning",
      price: "From 12 QAR",
      icon: "👔",
      description: "Complete care for 3-piece suits",
    },
    {
      name: "Dress (Short)",
      category: "Dry Cleaning",
      price: "From 10 QAR",
      icon: "👗",
      description: "Care for cocktail and summer dresses",
    },
    {
      name: "Dress (Long)",
      category: "Dry Cleaning",
      price: "From 15 QAR",
      icon: "👰",
      description: "Specialized care for evening gowns",
    },
    {
      name: "Overcoat",
      category: "Dry Cleaning",
      price: "From 11 QAR",
      icon: "🧥",
      description: "Winter coat cleaning and preservation",
    },
    {
      name: "Military Uniform",
      category: "Specialty",
      price: "From 9 QAR",
      icon: "🎖️",
      description: "Regimental standard cleaning and pressing",
    },
    {
      name: "Blouse (Special)",
      category: "Specialty",
      price: "From 4 QAR",
      icon: "👚",
      description: "Delicate care for embellished tops",
    },
    {
      name: "Bath Robe",
      category: "Specialty",
      price: "From 4 QAR",
      icon: "🛁",
      description: "Deep cleaning for plush bathrobes",
    },
  ]

  const filteredServices =
    serviceFilter === "All"
      ? services
      : services.filter((service) => service.category === serviceFilter)

  const filterOptions = [
    "All",
    "Dry Cleaning",
    "Pressing",
    "Specialty",
    "Traditional",
    "Express",
    "Add-on",
  ]

  return (
    <section id="services" className="bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-3xl text-center animate-fadeIn ${isRTL ? 'text-right' : ''}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            {t.services.premiumGarmentCare}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            {t.services.ourServices}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            {t.services.experienceAkoya}
          </p>
        </div>

        <div className={`mt-12 flex flex-wrap justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setServiceFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                serviceFilter === filter
                  ? "bg-white text-gray-900 shadow-lg scale-105"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white hover:-translate-y-1"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={`mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${isRTL ? 'flex flex-col' : ''}`}>
          {filteredServices.map((service, index) => (
            <div
              key={service.name}
              className={`rounded-3xl border border-gray-800 bg-gray-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-800 hover:shadow-xl hover:border-yellow-400/30 animate-fadeInUp ${isRTL ? 'text-right' : ''}`}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl transition-transform hover:scale-110 duration-200 ${isRTL ? 'ml-auto' : ''}`}>
                {service.icon}
              </div>

              <div className={`mt-6 flex items-start justify-between gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <h3 className="text-xl font-semibold text-white">
                  {service.name}
                </h3>

                <span className="whitespace-nowrap text-sm font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  {service.price}
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {service.description}
              </p>

              <a
                href="/book-now"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 duration-200"
              >
                {t.services.order}
              </a>
            </div>
          ))}
        </div>

        <div className={`mt-14 rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-yellow-400/30 hover:-translate-y-1 animate-fadeInUp ${isRTL ? 'text-right' : ''}`}>
          <h3 className="text-2xl font-semibold text-white">
            {t.services.needPersonalizedService}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
            {t.services.conciergeDesc}
          </p>

          <a
            href="/book-now"
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 duration-200"
          >
            {t.services.contactConcierge}
          </a>
        </div>
      </div>
    </section>
  )
}
