import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

const mediaBaseUrl = 'https://akoyaluxureylaundry.com/home/'

export default function HowItWorks() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const steps = [
    { number: '1', title: t.howItWorks.scheduleYourPickup, text: t.howItWorks.scheduleYourPickupDesc, media: `${mediaBaseUrl}Pickup.mp4`, points: [t.howItWorks.booking24_7, t.howItWorks.recurringPickup] },
    { number: '2', title: t.howItWorks.professionalCollection, text: t.howItWorks.professionalCollectionDesc, media: `${mediaBaseUrl}professional_collection.mp4`, points: [t.howItWorks.contactlessPickup, t.howItWorks.digitalReceipt] },
    { number: '3', title: t.howItWorks.expertProcessing, text: t.howItWorks.expertProcessingDesc, media: `${mediaBaseUrl}ExpertProcessing.mp4`, points: [t.howItWorks.garmentTracking, t.howItWorks.qualityControl] },
    { number: '4', title: t.howItWorks.luxuryDelivery, text: t.howItWorks.luxuryDeliveryDesc, media: '/luxury-delivery.jpg', points: [t.howItWorks.sameDay, t.howItWorks.hangerReady] },
  ]

  return (
    <section id="how-it-works" dir={isRTL ? 'rtl' : 'ltr'} className="relative overflow-hidden bg-[#f8f5f2] px-6 py-12 text-left md:px-16 lg:px-24">
      <div className="pointer-events-none absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-[#1C1C1C] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center animate-fadeIn">
          <h2 className="mb-3 text-3xl font-light text-[#1C1C1C] md:text-4xl">{t.howItWorks.howItWorks}</h2>
          <div className="flex items-center justify-center">
            <div className="mx-4 h-px w-12 bg-[#D4AF37]" />
            <p className="text-lg font-medium tracking-widest text-[#D4AF37]">{t.howItWorks.seamlessPickupProcess}</p>
            <div className="mx-4 h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-[#D4AF37] md:block" />
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => {
              const isMediaFirst = index % 2 === 0
              const rowDirection = isMediaFirst === !isRTL ? 'md:flex-row' : 'md:flex-row-reverse'

              return (
                <div key={step.number} className={`relative flex flex-col items-center gap-8 animate-fadeInUp md:gap-16 ${rowDirection}`} style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="w-full overflow-hidden rounded-xl shadow-xl md:w-1/2">
                    {step.media.endsWith('.mp4') ? (
                      <video className="h-64 w-full object-cover md:h-80" autoPlay loop muted playsInline preload="metadata">
                        <source src={step.media} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={step.media} alt={step.title} className="h-64 w-full object-cover md:h-80" loading="lazy" />
                    )}
                  </div>

                  <div className={`relative w-full md:w-1/2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <div className={`absolute top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#D4AF37] text-xl font-bold text-white shadow-lg md:flex ${rowDirection === 'md:flex-row' ? '-left-24' : '-right-24'}`}>
                      {step.number}
                    </div>
                    <div className="relative z-10 rounded-xl bg-white p-8 shadow-lg">
                      <div className="absolute -top-5 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white shadow-md md:hidden">{step.number}</div>
                      <h3 className="mb-4 text-2xl font-light text-[#1C1C1C]">{step.title}</h3>
                      <p className="mb-5 leading-7 text-gray-600">{step.text}</p>
                      <div className="grid gap-3 text-sm text-gray-500 sm:grid-cols-2">
                        {step.points.map((point) => (
                          <div key={point} className="flex items-start gap-2"><span className="mt-1 text-[#D4AF37]">◆</span><span>{point}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 text-center animate-fadeInUp">
          <a href="/book-now" className="inline-flex rounded-full bg-[#1C1C1C] px-8 py-3 text-lg font-medium text-[#D4AF37] transition-colors duration-300 hover:bg-[#D4AF37] hover:text-[#1C1C1C]">{t.howItWorks.schedulePickup}</a>
        </div>
      </div>
    </section>
  )
}
