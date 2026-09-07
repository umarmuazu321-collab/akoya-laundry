import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../context/translations"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { language, isRTL, toggleLanguage } = useLanguage()
  const t = translations[language]
  const logoUrl = "https://akoyaluxureylaundry.com/companylogo.png"
  const cartCount = useSelector((state) => state.order.items.reduce((sum, item) => sum + item.quantity, 0))
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { to: "/", label: t.navbar.home },
    { to: "/services#services", label: t.navbar.services },
    { to: "/about#collections", label: t.navbar.collections },
    { to: "/services#fragrances", label: t.navbar.fragrances },
    { to: "/about#how-it-works", label: t.navbar.howItWorks },
    { to: "/about#club", label: t.navbar.club },
  ]

  const lightNavbar = !isHomePage || isScrolled
  const textColor = lightNavbar ? "text-gray-900" : "text-white"
  const mutedTextColor = lightNavbar ? "text-gray-600" : "text-white/85"
  const navBackground = lightNavbar
    ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md"
    : "bg-transparent"

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className={`pointer-events-auto flex w-full items-center justify-between px-4 py-5 transition-colors duration-300 sm:px-6 lg:px-10 ${navBackground} ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src={logoUrl}
            alt="AKOYA Logo"
            className="h-10 w-10 rounded-full border border-white/30 bg-white/10 object-cover shadow-lg shadow-black/20"
          />
          <span className={`text-xl font-bold tracking-tight md:text-2xl ${textColor}`}>
            AKOYA
          </span>
        </Link>

        <div className={`hidden items-center gap-8 lg:flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${mutedTextColor} ${lightNavbar ? "hover:text-gray-900" : "hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={`hidden items-center gap-3 md:flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            type="button"
            onClick={toggleLanguage}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm transition ${lightNavbar ? "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200" : "border-white/40 bg-white/10 text-white hover:bg-white/20"}`}
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-sm transition ${lightNavbar ? "border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200" : "border-white/40 bg-white/10 text-white hover:bg-white/20"}`}
          >
            {t.navbar.clientLogin}
          </button>

          <button
            type="button"
            onClick={() => navigate('/book-now')}
            className="relative rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg duration-200"
          >
            {t.navbar.bookNow}
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-bold text-gray-900">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`rounded-lg p-2 text-xl transition-colors md:hidden ${textColor} ${lightNavbar ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className={`border-t border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md md:hidden animate-slideDown ${isRTL ? 'text-right' : ''}`}>
          <div className={`flex flex-col gap-5 ${isRTL ? 'flex-col-reverse' : ''}`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                type="button"
                onClick={() => {
                  toggleLanguage()
                  closeMenu()
                }}
                className="flex-1 rounded-full border border-white/40 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate('/login')
                  closeMenu()
                }}
                className="flex-1 rounded-full border border-white/40 bg-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
              >
                {t.navbar.clientLogin}
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                navigate('/book-now')
                closeMenu()
              }}
              className="relative rounded-full bg-white px-5 py-3 text-center font-semibold text-gray-900 hover:bg-yellow-400 transition-colors"
            >
              {t.navbar.bookNow}
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-bold text-gray-900">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

