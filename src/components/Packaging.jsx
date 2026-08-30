import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function Packaging() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const packagingOptions = [
    {
      title: t.packaging.plasticWrap,
      price: t.packaging.included,
      image: "https://akoyaluxureylaundry.com/suit-plastic-new.jpeg",
      text: t.packaging.plasticWrapDesc,
      features: [
        "Medical-grade transparency",
        "Anti-static interior",
        "Recyclable material",
        "Tamper-evident closure",
      ],
    },
    {
      title: t.packaging.luxuryFabricWrap,
      price: "+10 QAR",
      image: "https://akoyaluxureylaundry.com/home/package.jpg",
      text: t.packaging.luxuryFabricWrapDesc,
      features: [
        "Italian wool exterior",
        "Silk-lined interior",
        "Magnetic seal",
        "Reusable design",
      ],
    },
    {
      title: t.packaging.premiumWrappingBox,
      price: "+4 QAR",
      image: "https://akoyaluxureylaundry.com/home/BOX.jpeg",
      text: t.packaging.premiumWrappingBoxDesc,
      features: [
        "Sandalwood construction",
        "French velvet lining",
        "Integrated scent capsule",
        "Heirloom quality",
      ],
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center animate-fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            {t.packaging.theFinalTouch}
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            {t.packaging.packagingOptions}
          </h2>
        </div>

        <div className={`mt-16 grid gap-8 md:grid-cols-3 ${isRTL ? 'flex flex-wrap flex-row-reverse' : ''}`}>
          {packagingOptions.map((packaging, index) => (
            <div
              key={packaging.title}
              className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp group bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={packaging.image}
                  alt={packaging.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className={`p-8 ${isRTL ? 'text-right' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">
                    {packaging.title}
                  </h3>

                  <span className="whitespace-nowrap text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {packaging.price}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {packaging.text}
                </p>

                <ul className="mt-6 space-y-3">
                  {packaging.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-gray-600 transition-colors hover:text-gray-900 duration-200"
                    >
                      <span className="font-bold text-green-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/book-now"
                  className="mt-7 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1 duration-200"
                >
                  {t.packaging.bookYourOrder}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
