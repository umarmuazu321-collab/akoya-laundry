import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(true)
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const guests = [
    { name: 'Grandma Dana', emoji: '✨' },
    { name: 'Jassim', emoji: '✨' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className={`relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl md:p-10 ${isRTL ? 'text-right' : ''}`}>
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t.welcome?.title || 'Welcome dear guests'}
          </h2>
          <p className="text-gray-600 leading-7">
            {t.welcome?.message || "We're delighted to have you visit AKOYA Premium Laundry. Experience our exceptional laundry and garment care services"}
          </p>
        </div>

        {/* Guest Names */}
        <div className="mb-8 space-y-3">
          {guests.map((guest, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-gray-50 p-4"
            >
              <span className="text-2xl">{guest.emoji}</span>
              <span className="font-semibold text-gray-900">{guest.name}</span>
            </div>
          ))}
        </div>

        {/* Auto-close Message */}
        <div className="rounded-lg bg-yellow-50 px-4 py-3 border border-yellow-200">
          <p className="text-sm text-gray-600">
            {t.welcome?.autoCloseMessage || 'This message will close automatically in 10 seconds'}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="mt-6 w-full rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 duration-200"
        >
          {t.welcome?.closeButton || 'Got it!'}
        </button>
      </div>
    </div>
  )
}
