import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function Club() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const clubImage = "https://akoyaluxureylaundry.com/home/aquaClub.jpg"
  
  const benefits = [
    t.club.priorityScheduling,
    t.club.dedicatedConcierge,
    t.club.complimentaryFragrance,
    t.club.luxuryPackaging,
    t.club.biAnnualCouture,
    t.club.exclusiveOffers,
  ]

  return (
    <section id="club" className="bg-gray-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-gray-800 bg-gray-900 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/30 hover:-translate-y-2 animate-fadeIn">
          <div className={`grid md:grid-cols-2 gap-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="relative h-80 md:h-auto overflow-hidden bg-gray-800 md:order-last">
              <img
                src={clubImage}
                alt="AKOYA Club VIP Experience"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className={`p-8 md:p-14 flex flex-col justify-center ${isRTL ? 'text-right md:text-right' : 'md:text-left'}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
                {t.club.exclusive}
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                {t.club.akoyaClub}
              </h2>
              
              <p className="mt-3 text-sm font-light uppercase tracking-[0.2em] text-gray-500">
                {t.club.forTheFewWhoKnow}
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-400">
                {t.club.clubDesc}
              </p>

              <div className={`mt-10 grid gap-4 md:grid-cols-2 ${isRTL ? 'flex flex-col' : ''}`}>
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className={`flex gap-3 rounded-2xl border border-gray-800 p-4 transition-all duration-200 hover:border-yellow-400/50 hover:bg-gray-800 hover:-translate-y-1 animate-fadeInUp ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="text-yellow-400 text-lg flex-shrink-0">✓</span>
                    <span className="text-sm text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-10 inline-flex rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg hover:-translate-y-1 duration-200"
              >
                {t.club.requestInvitation}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
