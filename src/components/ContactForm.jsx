import { useState } from "react"
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../context/translations'

export default function ContactForm({ services }) {
  const { language, isRTL } = useLanguage()
  const t = translations[language]
  const location = useLocation()
  const bookingDetails = location.state?.bookingDetails

  const [formData, setFormData] = useState({
    name: bookingDetails?.name || "",
    phone: bookingDetails?.phone || "",
    service: bookingDetails?.service || "",
    date: bookingDetails?.date || "",
    address: bookingDetails?.address || "",
    message: "",
  })
  const [formError, setFormError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    if (formError) {
      setFormError("")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.phone.trim() || !formData.service || !formData.date || !formData.address.trim()) {
      setFormError("Please fill in all required fields.")
      return
    }

    const normalizedPhone = formData.phone.replace(/[\s()+-]/g, "")

    if (!/^\d{7,15}$/.test(normalizedPhone)) {
      setFormError("Please enter a valid phone number.")
      return
    }

    setFormError("")
    setIsSubmitting(true)

    // Simulate form processing
    setTimeout(() => {
      const whatsappNumber = "97433689955"

      const whatsappMessage = `
Hello AKOYA Luxury Laundry,

I would like to book a laundry pickup.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date}
Pickup Address: ${formData.address}
Additional Message: ${formData.message || "None"}

Thank you.
      `.trim()

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`

      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
        // Reset form
        setFormData({
          name: "",
          phone: "",
          service: "",
          date: "",
          address: "",
          message: "",
        })
      }, 2000)

      window.location.href = whatsappUrl
    }, 1000)
  }

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-3xl text-center animate-fadeIn ${isRTL ? 'text-right' : ''}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
            {t.contact.bookNow}
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            {t.contact.letAkoyaCareOfTheRest}
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            {t.contact.scheduleYourCollection}
          </p>
        </div>

        <div className={`mt-16 grid gap-12 lg:grid-cols-3 ${isRTL ? 'flex flex-row-reverse' : ''}`}>
          {/* CONTACT INFO */}
          <div className="animate-fadeInLeft">
            <div className={`rounded-3xl bg-gray-900 p-8 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${isRTL ? 'text-right' : ''}`}>
              <h3 className="text-2xl font-semibold">
                {t.contact.contactAkoya}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {t.contact.luxuryGarmentCareService}
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm text-gray-500">
                    {t.contact.location}
                  </p>

                  <p className="mt-1 font-medium">
                    {t.contact.areaAlWakrah}
                  </p>

                  <p className="text-gray-300">
                    {t.contact.zone90}
                  </p>

                  <p className="text-gray-300">
                    {t.contact.streetNo693}
                  </p>

                  <p className="text-gray-300">
                    {t.contact.buildingNo35}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {t.contact.phone}
                  </p>

                  <p className="mt-1 font-medium">
                    +974 3368 9955
                  </p>

                  <p className="text-gray-300">
                    +974 3368 9996
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    {t.contact.email}
                  </p>

                  <p className="mt-1 font-medium">
                    info@akoyaluxurylaundry.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className={`lg:col-span-2 animate-fadeInRight`}>
            <form
              onSubmit={handleSubmit}
              className={`rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10 transition-all duration-300 hover:shadow-xl ${isRTL ? 'text-right' : ''}`}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold"
                  >
                    {t.contact.fullNameRequired}
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.enterYourName}
                    className={`mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition duration-200 ${isRTL ? 'text-right' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold"
                  >
                    {t.contact.phoneRequired}
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+974 0000 0000"
                    className={`mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition duration-200 ${isRTL ? 'text-right' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold"
                  >
                    {t.contact.serviceRequired}
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition duration-200 ${isRTL ? 'text-right' : ''}`}
                    disabled={isSubmitting}
                  >
                    <option value="">
                      {t.contact.selectService}
                    </option>

                    {formData.service &&
                      !services.some((service) => service.name === formData.service) && (
                        <option value={formData.service}>
                          {formData.service}
                        </option>
                      )}

                    {services.map((service) => (
                      <option
                        key={service.name}
                        value={service.name}
                      >
                        {service.name} — {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="text-sm font-semibold"
                  >
                    {t.contact.dateRequired}
                  </label>

                  <input
                    id="date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition duration-200 ${isRTL ? 'text-right' : ''}`}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="address"
                  className="text-sm font-semibold"
                >
                  {t.contact.addressRequired}
                </label>

                <input
                  id="address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={t.contact.enterAddress}
                  className={`mt-2 w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition duration-200 ${isRTL ? 'text-right' : ''}`}
                  disabled={isSubmitting}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold"
                >
                  {t.contact.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder={t.contact.additionalNotes}
                  className={`mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3.5 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200 transition duration-200 ${isRTL ? 'text-right' : ''}`}
                  disabled={isSubmitting}
                />
              </div>

              {formError && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 animate-shake">
                  ⚠️ {formError}
                </div>
              )}

              {submitSuccess && (
                <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600 animate-fadeIn">
                  ✓ {t.contact.successTitle}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-7 w-full rounded-full px-7 py-4 text-sm font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-gray-900 text-white hover:bg-gray-700 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block animate-spin">⏳</span>
                    {t.contact.loading}
                  </span>
                ) : (
                  t.contact.sendBookingRequest
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
