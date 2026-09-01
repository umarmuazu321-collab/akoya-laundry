import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  const logoUrl = "https://akoyaluxureylaundry.com/companylogo.png"

  const services = [
    "Premium Laundry",
    "Dry Cleaning",
    "Steam Pressing",
    "Fragrance Infusion",
    "Couture Care",
    "VIP Club",
  ]

  const contactInfo = [
    { label: "Area", value: "Al Wakrah" },
    { label: "Zone", value: "90" },
    { label: "Street No.", value: "693" },
    { label: "Building No.", value: "35" },
    { label: "Phone", value: "+974 3368 9955" },
    { label: "Phone", value: "+974 3368 9996" },
    { label: "Email", value: "info@akoyaluxurylaundry.com" },
  ]

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className={`grid gap-10 md:grid-cols-4 ${isRTL ? 'flex flex-col-reverse' : ''}`}>
          <div className={`md:col-span-2 animate-fadeInLeft ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <img
                src={logoUrl}
                alt="AKOYA Luxury Laundry Logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <Link
                to="/"
                className="text-2xl font-bold hover:opacity-75 transition-opacity duration-200"
              >
                AKOYA
                <span className={`ml-1 font-light text-gray-400 ${isRTL ? 'ml-0 mr-1' : ''}`}>
                  Luxury Laundry
                </span>
              </Link>
            </div>

            <p className="mt-5 max-w-md leading-7 text-gray-400 hover:text-gray-300 transition-colors duration-200">
              {t.footer.luxuryGarmentCare}
            </p>
          </div>

          <div className={`animate-fadeInUp ${isRTL ? 'text-right' : ''}`} style={{ animationDelay: "100ms" }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.ourServices}
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">
              {services.map((service) => (
                <p
                  key={service}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div className={`animate-fadeInUp ${isRTL ? 'text-right' : ''}`} style={{ animationDelay: "200ms" }}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contactUs}
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-400">
              {contactInfo.map((info, index) => (
                <p
                  key={index}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {info.value}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-7">
          <div className={`mb-8 max-w-md animate-fadeInUp ${isRTL ? 'text-right' : ''}`}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.newsletter}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {t.footer.newsletterDesc}
            </p>

            <div className={`mt-4 flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <input
                type="email"
                placeholder={t.footer.enterEmail}
                className={`flex-1 rounded-full border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white placeholder-gray-500 transition hover:border-gray-600 focus:border-yellow-400 focus:outline-none ${isRTL ? 'text-right' : ''}`}
              />
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 duration-200">
                {t.footer.subscribe}
              </button>
            </div>
          </div>

          <div className={`flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between ${isRTL ? 'flex-col-reverse text-right md:flex-row-reverse' : ''}`}>
            <p>
              © {currentYear} AKOYA Luxury Laundry. {t.footer.allRightsReserved}
            </p>

            <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
                {t.footer.privacyPolicy}
              </Link>
              <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
                {t.footer.termsOfService}
              </Link>
              <Link to="/" className="hover:text-gray-400 transition-colors duration-200">
                {t.footer.sitemap}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
