import { Link } from 'react-router-dom'
import { useState } from 'react'

const roles = [
  { label: 'User / Client', value: 'user', description: 'Book sessions, manage credits, track tickets.' },
  { label: 'Consultant', value: 'consultant', description: 'Publish expertise, manage availability, get paid.' },
]

const consultantTypes = [
  { label: 'Individual', description: 'Solo consultant or freelancer.' },
  { label: 'Enterprise', description: 'Consulting firm or organization.' },
]

function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<string>('')
  const [consultantType, setConsultantType] = useState<string>('')
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
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand hover:text-indigo-500">
              Login
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-b border-slate-100 p-8 md:border-b-0 md:border-r">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Signup</p>
              <h1 className="mt-4 text-3xl font-semibold text-slate-900">Create your account</h1>
              <p className="mt-2 text-sm text-slate-500">
                Choose your role, create a password, and start using the platform.
              </p>
              <form className="mt-8 space-y-5">
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Full name</span>
                  <input
                    type="text"
                    placeholder="Alex Morgan"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
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
                  <span className="text-sm font-medium text-slate-600">Password</span>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-600">Confirm password</span>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <div>
                  <span className="text-sm font-medium text-slate-600">You are signing up as</span>
                  <div className="mt-3 grid gap-3">
                    {roles.map((role) => (
                      <label
                        key={role.value}
                        className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:border-brand"
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role.value}
                          checked={selectedRole === role.value}
                          onChange={(e) => {
                            setSelectedRole(e.target.value)
                            if (e.target.value !== 'consultant') {
                              setConsultantType('')
                            }
                          }}
                          className="mt-1 accent-brand"
                        />
                        <span>
                          <span className="font-semibold text-slate-900">{role.label}</span>
                          <br />
                          {role.description}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {selectedRole === 'consultant' && (
                  <div>
                    <span className="text-sm font-medium text-slate-600">Consultant type</span>
                    <div className="mt-3 grid gap-3">
                      {consultantTypes.map((type) => (
                        <label
                          key={type.label}
                          className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:border-brand"
                        >
                          <input
                            type="radio"
                            name="consultantType"
                            value={type.label.toLowerCase()}
                            checked={consultantType === type.label.toLowerCase()}
                            onChange={(e) => setConsultantType(e.target.value)}
                            className="mt-1 accent-brand"
                          />
                          <span>
                            <span className="font-semibold text-slate-900">{type.label}</span>
                            <br />
                            {type.description}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Signup
                </button>
              </form>
            </div>
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Why signup</p>
              <h2 className="mt-4 text-2xl font-semibold">Start in less than 2 minutes</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-200">
                {[
                  'Role-aware onboarding journeys keep forms simple for users and consultants.',
                  'Secure password-based authentication keeps your account protected.',
                  'Built-in support, credits, and subscription flows mean no extra tools to integrate.',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm text-white">
                Need a custom onboarding?{' '}
                <a href="mailto:sales@example.com" className="font-semibold underline">
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignupPage


