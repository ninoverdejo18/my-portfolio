import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

function Contact() {

  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      "service_js1an7v",
      "template_sym6wks",
      form.current,
      "Um40NagmPxC9YUZAO"
    )
    .then(() => {
      setSuccess(true)
      setLoading(false)
      form.current.reset()
    })
    .catch(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black text-black dark:text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Send me a message and I’ll get back to you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-4">

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-100 dark:bg-gray-900"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-100 dark:bg-gray-900"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-gray-100 dark:bg-gray-900"
            required
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-500">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>
    </section>
  )
}

export default Contact