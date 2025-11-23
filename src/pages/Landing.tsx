import { Link } from 'react-router-dom'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-hero-sheen blur-3xl opacity-60" />
      <div className="relative">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
          <div className="flex w-full flex-wrap items-center gap-4 px-6 py-4">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="rounded-xl bg-brand text-white px-4 py-2 text-sm font-semibold">
                CW
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Consultation</p>
                <p className="text-base font-semibold text-slate-700">Web Application</p>
              </div>
            </Link>
            <nav className="ml-auto hidden items-center gap-6 text-sm font-semibold text-slate-500 md:flex">
              {[
                { label: 'About', href: '#about' },
                { label: 'Why choose us', href: '#why' },
                { label: 'How it works', href: '#how' },
                { label: 'Contact', href: '/contact', isLink: true },
              ].map((link) =>
                link.isLink ? (
                  <Link key={link.label} to={link.href} className="transition hover:text-slate-900">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} className="transition hover:text-slate-900">
                    {link.label}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center gap-3 text-sm">
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

        <main className="w-full px-6 pb-24 pt-16">
          <section className="relative w-full overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-200/40 px-8 py-16 shadow-lg shadow-slate-200/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,_rgba(20,184,166,0.2),_transparent_50%)]" />
            <div className="relative">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 text-center lg:text-left">
                  <p className="text-xs uppercase tracking-[0.4em] text-brand">Consultation Web Application</p>
                  <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                    Connect clients and consultants with a single, confident hero experience.
                  </h1>
                  <p className="text-lg text-slate-600">
                    Clarify the value in seconds, share how consultants support growth, and guide visitors to the
                    two primary actions they expect.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                    <button className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
                      Find Consultants
                      <ArrowLongRightIcon className="h-5 w-5" />
                    </button>
                    <button className="rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-300">
                      Become a Consultant
                    </button>
                  </div>
                </div>
                <div className="relative hidden lg:block">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/hero-image.png"
                      alt="Business professionals collaborating"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="mt-16 w-full rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">About us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Built for modern advisory</h2>
              <p className="mt-3 text-base text-slate-600">
                A simple story: we match clients with the right consultants, give both sides the tools to collaborate,
                and make the flow from discovery to booking effortless.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Who we are',
                  body: 'A remote team of product strategists and engineers focused on matching users with vetted expertise.',
                },
                {
                  title: 'How consultants help',
                  body: 'Experts publish availability, pricing, bios, and reviews so clients can make decisions quickly.',
                },
                {
                  title: 'Why it matters',
                  body: 'Transparent booking, OTP-secured logins, and in-app sessions keep every engagement on track.',
                },
              ].map((card) => (
                <div key={card.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm">
                  <p className="text-sm font-semibold text-brand">{card.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="why" className="mt-16 w-full rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Why choose us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">All the essentials, already integrated</h2>
              <p className="mt-3 text-base text-slate-600">
                Search, OTP authentication, booking, payments, sessions, and support—presented clearly on day one.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Discovery & matching',
                  body: 'Advanced filters for domain, price range, language, rating, and availability.',
                },
                {
                  title: 'Secure sessions',
                  body: 'WebRTC video/voice with in-app chat plus reminders for every booking.',
                },
                {
                  title: 'Monetization ready',
                  body: 'Credits, subscriptions, and direct pay options like Razorpay or Stripe.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{item.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how" className="mt-16 w-full rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Simple three-step path</h2>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Browse consultants',
                  description:
                    'Explore bios, credentials, pricing, and live availability calendars tailored to your needs.',
                },
                {
                  title: 'Book & pay',
                  description:
                    'Pick a slot, select session type, and confirm with credits or direct payments—OTP keeps it secure.',
                },
                {
                  title: 'Meet & review',
                  description:
                    'Join video sessions, chat in-app, and leave reviews that drive better future matches.',
                },
              ].map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="w-full border-t border-slate-200 bg-white">
          <div className="w-full px-6 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-brand text-white px-4 py-2 text-sm font-semibold">
                    CW
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Consultation</p>
                    <p className="text-sm font-semibold text-slate-700">Web Application</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Connecting clients and consultants with seamless booking and collaboration tools.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Platform</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <a href="#about" className="transition hover:text-slate-900">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#why" className="transition hover:text-slate-900">
                      Why choose us
                    </a>
                  </li>
                  <li>
                    <a href="#how" className="transition hover:text-slate-900">
                      How it works
                    </a>
                  </li>
                  <li>
                    <Link to="/signup" className="transition hover:text-slate-900">
                      Become a Consultant
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Account</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <Link to="/login" className="transition hover:text-slate-900">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="transition hover:text-slate-900">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-slate-900">
                      Forgot password
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-slate-900">
                      Help & Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  <li>
                    <Link to="/contact" className="transition hover:text-slate-900">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:support@example.com" className="transition hover:text-slate-900">
                      support@example.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:sales@example.com" className="transition hover:text-slate-900">
                      sales@example.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-slate-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-slate-900">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8">
              <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
                <p>© {new Date().getFullYear()} Consultation Web Application. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="#" className="transition hover:text-slate-900">
                    Twitter
                  </a>
                  <a href="#" className="transition hover:text-slate-900">
                    LinkedIn
                  </a>
                  <a href="#" className="transition hover:text-slate-900">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage


