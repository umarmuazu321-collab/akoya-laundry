import { useDispatch } from "react-redux"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../context/translations"
import { addItem } from "../store/orderSlice"

export default function Fragrances() {
  const { language, isRTL } = useLanguage()
  const dispatch = useDispatch()
  const t = translations[language]

  const fragrances = [
    {
      name: t.fragrances.maknoun,
      price: "4–8 QAR",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85",
      description: t.fragrances.maknnounDesc,
    },
    {
      name: t.fragrances.mad,
      price: "4–8 QAR",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=85",
      description: t.fragrances.madDesc,
    },
    {
      name: t.fragrances.lulwa,
      price: "4–8 QAR",
      image:
        "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=85",
      description: t.fragrances.lulwaDesc,
    },
    {
      name: t.fragrances.sadf,
      price: "4–8 QAR",
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=85",
      description: t.fragrances.sadfDesc,
    },
    {
      name: t.fragrances.marjan,
      price: "4–8 QAR",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b9b298c7e9?auto=format&fit=crop&w=800&q=85",
      description: t.fragrances.marjanDesc,
    },
  ]

  const franchisePrice = (price) =>
    price.replace(/[^\d]/g, "").trim()
      ? Number.parseInt(price.replace(/[^\d]/g, ""), 10)
      : 0

  return (
    <section
      id="fragrances"
      className="bg-gray-50 py-24"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center animate-fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            {t.fragrances.akoyaSignatureFragrances}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {t.fragrances.premiumScents}
          </h2>
        </div>

        {/* Fragrance Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fragrances.map((fragrance, index) => (
            <div
              key={fragrance.name}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fadeInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <div className="relative mb-5 h-52 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=85"
                  }}
                />

                {/* Subtle image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
              </div>

              {/* Name + Price */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {fragrance.name}
                </h3>

                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-600">
                  {fragrance.price}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-600">
                {fragrance.description}
              </p>

              {/* Add Button */}
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    addItem({
                      id: `${fragrance.name}-fragrance`,
                      name: fragrance.name,
                      price: franchisePrice(fragrance.price),
                      quantity: 1,
                    })
                  )
                }
                className="mt-6 inline-flex rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-lg"
              >
                {t.fragrances.add}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}