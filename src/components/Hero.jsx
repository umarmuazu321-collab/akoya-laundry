import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../context/translations"

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  const navigate = useNavigate()

  const slides = [
    {
      label: "Premium Garment Care",
      title: "Expert cleaning for your most delicate fabrics",
      image: "/hero-platinum-care.jpg",
    },
    {
      label: "Eco-Conscious Cleaning",
      title: "Sustainable methods without compromising quality",
      image: "/hero-eco.jpg",
    },
    {
      label: "Precision Pressing",
      title: "Impeccable finishes for business and formalwear",
      image: "/hero-pressing.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  return (
    <section
      id="home"
      className="relative h-screen min-h-[760px] overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide.label}
            src={slide.image}
            alt={slide.label}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
              index === activeSlide
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/20" />

      <div className="relative z-10 flex h-full w-full items-center px-6 pt-24 md:px-10 lg:px-12">
        <div className="max-w-3xl animate-fadeInUp">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400 animate-fadeIn">
            {slides[activeSlide].label}
          </p>

          <h1 className="text-5xl font-light leading-tight tracking-tight text-white md:text-7xl">
            {slides[activeSlide].title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            {t.hero.experience}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <Link
              to="/contact"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              {t.navbar.schedulePickup}
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-white/60 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900 hover:shadow-lg hover:-translate-y-1 duration-300"
            >
              {t.navbar.exploreServices}
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={previousSlide}
        className={`absolute top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/50 hover:shadow-lg duration-200 ${
          isRTL ? "right-5" : "left-5"
        }`}
        aria-label="Previous slide"
      >
        {isRTL ? "→" : "←"}
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className={`absolute top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/50 hover:shadow-lg duration-200 ${
          isRTL ? "left-5" : "right-5"
        }`}
        aria-label="Next slide"
      >
        {isRTL ? "←" : "→"}
      </button>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-8 bg-yellow-400"
                : "w-3 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="AKOYA home"
        onClick={() => navigate("/")}
        className={`absolute bottom-6 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm transition hover:scale-105 hover:bg-white/15 ${
          isRTL ? "left-6" : "right-6"
        }`}
      >
        <img
          src="https://akoyaluxureylaundry.com/companylogo.png"
          alt="AKOYA"
          className="h-11 w-11 rounded-full object-cover"
        />
      </button>
    </section>
  )
}