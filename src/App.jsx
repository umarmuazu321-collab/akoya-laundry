import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Provider } from "react-redux"
import { LanguageProvider } from "./context/LanguageContext"
import { store } from "./store/store"
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

function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

function HomePage() {
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

function AboutPage() {
  return (
    <AppShell>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              AKOYA heritage
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Luxury laundry, redefined.
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Elevated garment care for discerning clients who expect precision,
              discretion, and a premium experience from pickup to delivery.
            </p>
          </div>
        </div>
      </section>
      <Collections />
      <WashExperience />
      <HowItWorks />
      <Club />
    </AppShell>
  )
}

function ServicesPage() {
  return (
    <AppShell>
      <Services />
      <Packaging />
      <Fragrances />
      <Club />
    </AppShell>
  )
}

function ContactPage() {
  return (
    <AppShell>
      <ContactForm services={services} />
      <Club />
    </AppShell>
  )
}

function NotFoundPage() {
  return (
    <AppShell>
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-24 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">404</p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Page not found</h1>
          <p className="mt-4 text-gray-600">The page you requested does not exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Return home
          </Link>
        </div>
      </main>
    </AppShell>
  )
}

function InfoPage({ title }) {
  return (
    <AppShell>
      <main className="flex min-h-[70vh] items-center justify-center px-6 pt-24 text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 text-gray-600">AKOYA Luxury Laundry information page.</p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Return home
          </Link>
        </div>
      </main>
    </AppShell>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/Services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/privacy" element={<InfoPage title="Privacy Policy" />} />
            <Route path="/terms" element={<InfoPage title="Terms of Service" />} />
            <Route path="/sitemap" element={<InfoPage title="Sitemap" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App