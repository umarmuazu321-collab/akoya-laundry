import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function WashExperience() {
  const { language, isRTL } = useLanguage()
  const t = translations[language]

  const experiences = [
    {
      icon: "🧼",
      title: t.washExperience.standardWash,
      description: t.washExperience.standardWashDesc,
      price: t.washExperience.standardWashPrice,
      isDark: false,
    },
    {
      icon: "⚡",
      title: t.washExperience.expressWash,
      description: t.washExperience.expressWashDesc,
      price: t.washExperience.expressWashPrice,
      isDark: true,
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            {t.washExperience.chooseYourExperience}
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            {t.washExperience.howWouldYouLikeItWashed}
          </h2>
        </div>

        <div className={`mt-14 grid gap-8 md:grid-cols-2 ${isRTL ? 'flex flex-row-reverse' : ''}`}>
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`rounded-3xl border p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp ${
                exp.isDark
                  ? "bg-gray-950 border-gray-800 text-white"
                  : "bg-gray-50 border-gray-200"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform hover:scale-110 duration-200 ${
                  exp.isDark ? "bg-white" : "bg-gray-900"
                }`}
              >
                {exp.isDark ? (
                  <span className="text-gray-900">{exp.icon}</span>
                ) : (
                  exp.icon
                )}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {exp.title}
              </h3>

              <p className={`mt-3 leading-7 ${exp.isDark ? "text-gray-300" : "text-gray-600"}`}>
                {exp.description}
              </p>

              <p className={`mt-6 font-semibold ${exp.isDark ? "text-yellow-400" : "text-gray-900"}`}>
                {exp.price}
              </p>

              <a
                href="#services"
                className={`mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition hover:shadow-lg hover:-translate-y-1 duration-200 ${
                  exp.isDark
                    ? "bg-white text-gray-900 hover:bg-yellow-400"
                    : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
              >
                {t.washExperience.continueToGarmentSelection}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
