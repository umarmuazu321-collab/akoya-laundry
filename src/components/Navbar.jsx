import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../context/translations"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { language, isRTL, toggleLanguage } = useLanguage()
  const t = translations[language]
  const logoUrl = "https://akoyaluxureylaundry.com/companylogo.png"
  const cartCount = useSelector((state) => state.order.items.reduce((sum, item) => sum + item.quantity, 0))

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const navLinks = [
    { to: "/", label: t.navbar.home },
    { to: "/services", label: t.navbar.services },
    { to: "/about", label: t.navbar.collections },
    { to: "/services", label: t.navbar.fragrances },
    { to: "/about", label: t.navbar.howItWorks },
    { to: "/contact", label: t.navbar.club },
  ]

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className={`pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
          <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
            AKOYA
          </span>
        </Link>

        <div className={`hidden items-center gap-8 lg:flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-white/85 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={`hidden items-center gap-3 md:flex ${isRTL ? 'flex-row-reverse' : ''}`}>
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {language === 'en' ? 'العربية' : 'English'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {t.navbar.clientLogin}
          </button>

          <button
            type="button"
            onClick={() => navigate('/contact')}
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
          className="rounded-lg p-2 text-xl text-white transition-colors hover:bg-white/10 md:hidden"
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
                navigate('/contact')
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

