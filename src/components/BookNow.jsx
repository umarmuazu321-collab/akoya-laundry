import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'
import Navbar from './Navbar'
import Footer from './Footer'

export default function BookNow() {
  const navigate = useNavigate()
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  const [step, setStep] = useState(1)

  const services = [
    { id: 1, name: 'Premium Laundry', price: 'From 6 QAR', icon: '🧼' },
    { id: 2, name: 'Dry Cleaning', price: 'From 6 QAR', icon: '🧥' },
    { id: 3, name: 'Steam Pressing', price: 'From 3 QAR', icon: '👔' },
    { id: 4, name: 'Fragrance Infusion', price: '5 QAR', icon: '🌸' },
    { id: 5, name: 'Couture Care', price: 'From 7 QAR', icon: '👗' },
    { id: 6, name: 'VIP Club', price: 'Special', icon: '✨' },
  ]

  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Header */}
          <div className={`mb-12 text-center ${isRTL ? 'text-right' : ''}`}>
            <button
              onClick={() => navigate('/')}
              className="mb-6 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <span>{isRTL ? '→' : '←'}</span>
              {t.welcome?.closeButton || 'Back'}
            </button>

            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              {t.contact?.bookNow || 'Book Now'}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {t.contact?.letAkoyaCareOfTheRest || 'Let AKOYA take care of the rest.'}
            </p>
          </div>

          {/* Step Indicator */}
          <div className="mb-12 flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition ${
                    s <= step
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`mx-4 h-1 flex-1 transition ${
                      s < step ? 'bg-gray-900' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className={`space-y-6 ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t.contact?.serviceRequired || 'Select Your Service'}
              </h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service)
                      setStep(2)
                    }}
                    className={`rounded-2xl border-2 p-6 transition ${
                      selectedService?.id === service.id
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {service.price}
                    </p>
                  </button>
                ))}
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => navigate('/')}
                  className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  {t.welcome?.closeButton || 'Cancel'}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Schedule */}
          {step === 2 && (
            <div className={`space-y-6 ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t.washExperience?.howWouldYouLikeItWashed || 'Choose Your Timeline'}
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <button
                  onClick={() => setStep(3)}
                  className="rounded-2xl border-2 border-gray-200 p-6 text-left transition hover:border-gray-400"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t.washExperience?.standardWash || 'Standard Wash'}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {t.washExperience?.standardWashDesc || '48-hour turnaround'}
                  </p>
                  <p className="mt-4 font-semibold text-gray-900">
                    {t.washExperience?.standardWashPrice || 'From 50 QAR'}
                  </p>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="rounded-2xl border-2 border-gray-900 bg-gray-50 p-6 text-left transition"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t.washExperience?.expressWash || 'Express Wash'}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {t.washExperience?.expressWashDesc || '24-hour turnaround'}
                  </p>
                  <p className="mt-4 font-semibold text-gray-900">
                    {t.washExperience?.expressWashPrice || 'From 80 QAR'}
                  </p>
                </button>
              </div>

              <div className="flex justify-between pt-6">
                <button
                  onClick={() => setStep(1)}
                  className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  {t.footer?.privacyPolicy || 'Back'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Booking Details */}
          {step === 3 && (
            <div className={`space-y-6 ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t.contact?.contactAkoya || 'Complete Your Booking'}
              </h2>

              <form className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      {t.contact?.fullNameRequired || 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact?.enterYourName || 'Enter your name'}
                      className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      {t.contact?.phoneRequired || 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+974 0000 0000"
                      className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 ${isRTL ? 'text-right' : ''}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    {t.contact?.addressRequired || 'Pickup Address *'}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact?.enterAddress || 'Enter your pickup address'}
                    className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    {t.contact?.dateRequired || 'Preferred Date *'}
                  </label>
                  <input
                    type="date"
                    className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 ${isRTL ? 'text-right' : ''}`}
                  />
                </div>

                <div className="flex justify-between gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
                  >
                    {t.footer?.privacyPolicy || 'Back'}
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-gray-900 px-8 py-3 font-semibold text-white transition hover:bg-gray-700"
                  >
                    {t.contact?.sendBookingRequest || 'Complete Booking'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
