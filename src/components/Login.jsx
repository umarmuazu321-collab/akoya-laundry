import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function Login() {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!formData.email) {
      newErrors.email = t.contact.errorMsg
    }

    if (!formData.password) {
      newErrors.password = t.contact.errorMsg
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Login form submitted:', formData)

    alert('Frontend login form ready for backend integration')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">

            <a
              href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
            className="inline-flex items-center gap-2 hover:opacity-75 transition-opacity mb-8"
          >
            <img
              src="https://akoyaluxureylaundry.com/companylogo.png"
              alt="AKOYA Logo"
              className="h-10 w-10 rounded-lg object-cover"
            />

            <span className="text-2xl font-bold text-white">
              AKOYA
            </span>
          </a>

          <h1 className="text-4xl font-light text-white mb-2">
            {t.login.signIntoYourAccount}
          </h1>

          <p className="text-gray-400">
            {t.login.welcomeBack}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              {t.login.emailOrPhone}
            </label>

            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@akoya.com"
              className={`w-full rounded-lg border px-4 py-3 text-white placeholder-gray-500 transition ${
                errors.email
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-gray-700 bg-gray-900 focus:border-yellow-400'
              } focus:outline-none`}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              {t.login.password}
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full rounded-lg border px-4 py-3 text-white placeholder-gray-500 transition ${
                errors.password
                  ? 'border-red-500 bg-red-500/10'
                  : 'border-gray-700 bg-gray-900 focus:border-yellow-400'
              } focus:outline-none`}
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-gray-300 transition">
              <input
                type="checkbox"
                className="rounded border-gray-700"
              />

              Remember me
            </label>

            <a
              href="mailto:info@akoyaluxurylaundry.com?subject=Password%20reset%20request"
              className="text-yellow-400 hover:text-yellow-300 transition font-medium"
            >
              {t.login.forgotPassword}
            </a>

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-gray-900 transition hover:bg-yellow-400 hover:shadow-lg duration-200"
          >
            {t.login.signIn}
          </button>

        </form>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center">

          <p className="text-gray-400 text-sm mb-4">
            {t.login.dontHaveAccount}
          </p>

          <button
            onClick={() => navigate('/')}
            className="text-yellow-400 hover:text-yellow-300 transition font-semibold text-sm"
          >
            {t.login.createAccount}
          </button>

        </div>

        <div className="mt-8 text-center">

          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition text-sm font-medium"
          >
            ← {t.login.goBack}
          </button>

        </div>

      </div>
    </div>
  )
}