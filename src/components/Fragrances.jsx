import { useDispatch } from "react-redux"
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'
import { addItem } from '../store/orderSlice'

export default function Fragrances() {
  const { language, isRTL } = useLanguage()
  const dispatch = useDispatch()
  const t = translations[language]

  const fragrances = [
    {
      name: t.fragrances.maknoun,
      price: "4–8 QAR",
      image: "https://akoyaluxureylaundry.com/home/maknoun.jpg",
      description: t.fragrances.maknnounDesc,
    },
    {
      name: t.fragrances.mad,
      price: "4–8 QAR",
      image: "https://akoyaluxureylaundry.com/home/mad.jpg",
      description: t.fragrances.madDesc,
    },
    {
      name: t.fragrances.lulwa,
      price: "4–8 QAR",
      image: "https://akoyaluxureylaundry.com/home/lulwa.jpg",
      description: t.fragrances.lulwaDesc,
    },
    {
      name: t.fragrances.sadf,
      price: "4–8 QAR",
      image: "https://akoyaluxureylaundry.com/home/sadf.jpg",
      description: t.fragrances.sadfDesc,
    },
    {
      name: t.fragrances.marjan,
      price: "4–8 QAR",
      image: "https://akoyaluxureylaundry.com/home/marjan.jpeg",
      description: t.fragrances.marjanDesc,
    },
  ]

  const franchisePrice = (price) => price.replace(/[^\d]/g, '').trim() ? Number.parseInt(price.replace(/[^\d]/g, ''), 10) : 0

  return (
    <section id="fragrances" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center animate-fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            {t.fragrances.akoyaSignatureFragrances}
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            {t.fragrances.premiumScents}
          </h2>
        </div>

        <div className={`mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${isRTL ? 'flex flex-wrap flex-row-reverse' : ''}`}>
          {fragrances.map((fragrance, index) => (
            <div
              key={fragrance.name}
              className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-48 mb-4 rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">
                  {fragrance.name}
                </h3>

                <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {fragrance.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {fragrance.description}
              </p>

              <button
                type="button"
                onClick={() => dispatch(addItem({ id: `${fragrance.name}-fragrance`, name: fragrance.name, price: franchisePrice(fragrance.price), quantity: 1 }))}
                className="mt-6 inline-flex rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 duration-200"
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
