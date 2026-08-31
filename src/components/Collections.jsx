import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

const collectionImages = {
  platinum: "https://akoyaluxureylaundry.com/home/platinumCare.jpg",
  executive: "https://akoyaluxureylaundry.com/home/exectiveCollection.jpg",
  couture: "https://akoyaluxureylaundry.com/home/professionalCollection.jpg",
}

export default function Collections() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const collections = [
    {
      title: t.collections.platinumCare,
      icon: "✨",
      text: t.collections.platinumCareDesc,
    },
    {
      title: t.collections.executiveCollection,
      icon: "👔",
      text: t.collections.executiveCollectionDesc,
    },
    {
      title: t.collections.couturePreservation,
      icon: "🧵",
      text: t.collections.couturePreservationDesc,
    },
  ]

  return (
    <section id="collections" className="bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center animate-fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
            {t.collections.signatureLines}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            {t.collections.theAkoyaCollection}
          </h2>
        </div>

        <div className={`mt-16 grid gap-8 md:grid-cols-3 ${isRTL ? 'flex flex-row-reverse flex-wrap' : ''}`}>
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collectionImages[index === 0 ? "platinum" : index === 1 ? "executive" : "couture"]}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className={`absolute bottom-0 left-0 right-0 p-6 ${isRTL ? 'text-right' : ''}`}>
                  <h3 className="text-2xl font-bold text-white">
                    {collection.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-200">
                    {collection.text}
                  </p>

                  <a
                    
                    className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg duration-200"
                  >
                    {t.collections.discover} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
