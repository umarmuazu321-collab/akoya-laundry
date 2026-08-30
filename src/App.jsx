import "./App.css"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LanguageProvider } from "./context/LanguageContext"
import { useLanguage } from "./context/LanguageContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Collections from "./components/Collections"
import WashExperience from "./components/WashExperience"
import Fragrances from "./components/Fragrances"
import Packaging from "./components/Packaging"
import Services from "./components/Services"
import HowItWorks from "./components/HowItWorks"
import Club from "./components/Club"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Login from "./components/Login"
import WelcomePopup from "./components/WelcomePopup"
import BookNow from "./components/BookNow"

function HomePage({ scrollToServices }) {
  const { language } = useLanguage()
  
  useEffect(() => {
    if (scrollToServices) {
      const servicesElement = document.getElementById('services')
      if (servicesElement) {
        setTimeout(() => {
          servicesElement.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [scrollToServices, language])
  const services = [
    {
      name: "Dry Cleaning",
      category: "Dry Cleaning",
      price: "From 6 QAR",
      icon: "🧥",
      description:
        "Expert care for suits and delicate fabrics using eco-friendly solvents",
    },
    {
      name: "Executive Pressing",
      category: "Pressing",
      price: "From 3 QAR",
      icon: "👔",
      description:
        "Crisp finishes for business attire with precision steam technology",
    },
    {
      name: "Couture Care",
      category: "Specialty",
      price: "From 7 QAR",
      icon: "👗",
      description:
        "Hand-cleaning for designer garments and delicate fabrics",
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
      description:
        "Specialized care for children's traditional garments",
    },
    {
      name: "Bisht",
      category: "Traditional",
      price: "From 25 QAR",
      icon: "🧥",
      description:
        "Premium care for ceremonial cloak with gold detailing",
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
      description:
        "Complete set cleaning for traditional attire",
    },
    {
      name: "Kameez",
      category: "Traditional",
      price: "From 4 QAR",
      icon: "👕",
      description:
        "Professional care for traditional long shirts",
    },
    {
      name: "Jalabiya",
      category: "Traditional",
      price: "From 6 QAR",
      icon: "👚",
      description:
        "Specialized care for flowing traditional gowns",
    },
    {
      name: "Abaya",
      category: "Traditional",
      price: "From 10 QAR",
      icon: "🖤",
      description:
        "Professional cleaning for everyday abayas",
    },
    {
      name: "Abaya Special",
      category: "Specialty",
      price: "From 12 QAR",
      icon: "✨",
      description:
        "Premium care for embellished abayas",
    },
    {
      name: "Hijab",
      category: "Traditional",
      price: "From 3 QAR",
      icon: "🧣",
      description:
        "Delicate cleaning for headscarves",
    },
    {
      name: "Gent Suit (3pcs)",
      category: "Dry Cleaning",
      price: "From 12 QAR",
      icon: "👔",
      description:
        "Complete care for 3-piece suits",
    },
    {
      name: "Dress (Short)",
      category: "Dry Cleaning",
      price: "From 10 QAR",
      icon: "👗",
      description:
        "Care for cocktail and summer dresses",
    },
    {
      name: "Dress (Long)",
      category: "Dry Cleaning",
      price: "From 15 QAR",
      icon: "👰",
      description:
        "Specialized care for evening gowns",
    },
    {
      name: "Overcoat",
      category: "Dry Cleaning",
      price: "From 11 QAR",
      icon: "🧥",
      description:
        "Winter coat cleaning and preservation",
    },
    {
      name: "Military Uniform",
      category: "Specialty",
      price: "From 9 QAR",
      icon: "🎖️",
      description:
        "Regimental standard cleaning and pressing",
    },
    {
      name: "Blouse (Special)",
      category: "Specialty",
      price: "From 4 QAR",
      icon: "👚",
      description:
        "Delicate care for embellished tops",
    },
    {
      name: "Bath Robe",
      category: "Specialty",
      price: "From 4 QAR",
      icon: "🛁",
      description:
        "Deep cleaning for plush bathrobes",
    },
  ]

  const fragrances = [
    {
      name: "Maknoun",
      price: "4–8 QAR",
      description:
        "A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber.",
    },
    {
      name: "Mad",
      price: "4–8 QAR",
      description:
        "A powerful masculine fragrance that radiates prestige and luxury, blending saffron, jasmine, incense, and a leathery amber base.",
    },
    {
      name: "Lulwa",
      price: "4–8 QAR",
      description:
        "Radiant femininity combining modern freshness with timeless elegance through bergamot, ginger, patchouli, and soft musk.",
    },
    {
      name: "Sadf",
      price: "4–8 QAR",
      description:
        "A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris.",
    },
    {
      name: "Marjan",
      price: "4–8 QAR",
      description:
        "A sophisticated fragrance with bergamot, black pepper, lavender, geranium, patchouli, cedarwood, vetiver, ambroxan, and vanilla.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <WelcomePopup />
      <Navbar />
      <Hero />
      <Collections />
      <WashExperience />
      <Fragrances />
      <Packaging />
      <Services />
      <HowItWorks />
      <Club />
      <ContactForm services={services} />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/services" element={<HomePage scrollToServices />} />
          <Route path="/Services" element={<HomePage scrollToServices />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App