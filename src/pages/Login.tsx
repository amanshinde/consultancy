import { Link } from 'react-router-dom'
import { useState } from 'react'

function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<'password' | 'otp'>('password')

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
          <div className="ml-auto text-sm text-slate-500">
            New here?{' '}
            <Link to="/signup" className="font-semibold text-brand hover:text-indigo-500">
              Create account
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-b border-slate-100 p-8 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Login</p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900">Welcome back</h1>
              <p className="mt-2 text-sm text-slate-500">
                Choose your preferred login method to access your account.
              </p>
              
              {/* Login method toggle */}
              <div className="mt-6 flex gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setLoginMethod('password')}
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    loginMethod === 'password'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Password
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('otp')}
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    loginMethod === 'otp'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  OTP
                </button>
              </div>

              <form className="mt-6 space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Phone or email</span>
                  <input
                    type="text"
                    placeholder="you@example.com / +91 90000 00000"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>

                {loginMethod === 'password' ? (
                  <label className="block">
                    <span className="text-sm font-medium text-slate-600">Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </label>
                ) : (
                  <label className="block">
                    <span className="text-sm font-medium text-slate-600">OTP</span>
                    <div className="mt-2 flex gap-3">
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <input
                          key={idx}
                          type="text"
                          maxLength={1}
                          className="w-14 rounded-2xl border border-slate-200 px-4 py-3 text-center text-lg font-semibold text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-slate-500">We will send a fresh OTP when you tap "Send OTP".</p>
                  </label>
                )}

                {loginMethod === 'password' && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-slate-600">
                      <input type="checkbox" className="rounded border-slate-300 accent-brand" />
                      <span>Remember me</span>
                    </label>
                    <a href="#" className="font-semibold text-brand hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {loginMethod === 'otp' && (
                    <button
                      type="button"
                      className="flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
                    >
                      Send OTP
                    </button>
                  )}
                  <button
                    type="button"
                    className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    {loginMethod === 'password' ? 'Login' : 'Verify & Login'}
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Quick access</p>
              <h2 className="mt-4 text-2xl font-semibold">One login for every role</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Users land on dashboards with consultant search, credits, and support.',
                  'Consultants jump into availability, bookings, and payouts.',
                  'Admins see platform health, tickets, and escalations.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-slate-100">
                Need help?{' '}
                <a href="mailto:support@example.com" className="font-semibold text-white underline">
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage


