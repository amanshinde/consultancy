import { Link } from 'react-router-dom'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="flex w-full items-center gap-3 px-6 py-4">
          <Link to="/" className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white">
            CW
          </Link>
          <div>
            <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Consultation</p>
            <p className="text-base font-semibold text-slate-700">Web Application</p>
          </div>
          <div className="ml-auto flex items-center gap-3 text-sm">
            <Link
              to="/login"
              className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex items-center gap-1 rounded-full bg-slate-900 px-5 py-2 font-semibold text-white transition hover:bg-slate-800"
            >
              Signup
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Get in touch</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Contact us</h1>
            <p className="mt-3 text-base text-slate-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
              <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-600">First name</span>
                    <input
                      type="text"
                      placeholder="John"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-slate-600">Last name</span>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Phone</span>
                  <input
                    type="tel"
                    placeholder="+91 90000 00000"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Subject</span>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Message</span>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <button
                  type="button"
                  className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-semibold text-slate-900">Contact information</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Reach out to us through any of these channels.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10">
                      <EnvelopeIcon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:support@example.com"
                        className="mt-1 text-sm text-slate-600 transition hover:text-brand"
                      >
                        support@example.com
                      </a>
                      <br />
                      <a
                        href="mailto:sales@example.com"
                        className="text-sm text-slate-600 transition hover:text-brand"
                      >
                        sales@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10">
                      <PhoneIcon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Phone</p>
                      <a
                        href="tel:+911234567890"
                        className="mt-1 text-sm text-slate-600 transition hover:text-brand"
                      >
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10">
                      <MapPinIcon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Address</p>
                      <p className="mt-1 text-sm text-slate-600">
                        123 Business Street
                        <br />
                        Suite 100
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Business hours</p>
                <h3 className="mt-4 text-xl font-semibold">We're here to help</h3>
                <div className="mt-6 space-y-3 text-sm text-slate-200">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage

