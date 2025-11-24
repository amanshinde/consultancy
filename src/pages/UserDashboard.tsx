import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

type Tab = 'overview' | 'search' | 'upcoming' | 'past' | 'credits' | 'support'

function UserDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  const upcomingSessions = [
    {
      id: 1,
      consultant: 'Dr. Priya Nair',
      domain: 'Product Strategy & GTM',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '60 min',
      type: 'Strategy Session',
      status: 'confirmed',
    },
    {
      id: 2,
      consultant: 'Rajesh Kumar',
      domain: 'Digital Marketing',
      date: '2024-01-18',
      time: '2:00 PM',
      duration: '45 min',
      type: 'Quick Audit',
      status: 'confirmed',
    },
    {
      id: 3,
      consultant: 'Sarah Johnson',
      domain: 'Financial Planning',
      date: '2024-01-20',
      time: '11:30 AM',
      duration: '90 min',
      type: 'Deep Dive',
      status: 'pending',
    },
  ]

  const pastSessions = [
    {
      id: 1,
      consultant: 'Dr. Priya Nair',
      domain: 'Product Strategy',
      date: '2024-01-10',
      rating: 5,
      review: 'Excellent session! Very insightful.',
    },
    {
      id: 2,
      consultant: 'Rajesh Kumar',
      domain: 'Digital Marketing',
      date: '2024-01-05',
      rating: 4,
      review: 'Helpful advice on campaign optimization.',
    },
  ]

  const stats = [
    { label: 'Upcoming Sessions', value: '3', icon: ClockIcon },
    { label: 'Total Sessions', value: '12', icon: CheckCircleIcon },
    { label: 'Credits Balance', value: '₹2,500', icon: CreditCardIcon },
    { label: 'Active Tickets', value: '1', icon: ChatBubbleLeftRightIcon },
  ]

  const focusHighlights = [
    {
      label: 'Next session',
      value: upcomingSessions[0].consultant,
      meta: `${upcomingSessions[0].date} · ${upcomingSessions[0].time}`,
    },
    {
      label: 'Credits balance',
      value: '₹2,500',
      meta: 'Top up anytime',
    },
    {
      label: 'Support status',
      value: '1 open ticket',
      meta: 'Avg. response 2h',
    },
  ]

  const sidebarItems = [
    { id: 'overview' as Tab, label: 'Overview', icon: HomeIcon },
    { id: 'search' as Tab, label: 'Find Consultants', icon: MagnifyingGlassIcon },
    { id: 'upcoming' as Tab, label: 'Upcoming Sessions', icon: CalendarDaysIcon },
    { id: 'past' as Tab, label: 'Past Sessions', icon: CheckCircleIcon },
    { id: 'credits' as Tab, label: 'Credits & Plans', icon: CreditCardIcon },
    { id: 'support' as Tab, label: 'Help & Support', icon: ChatBubbleLeftRightIcon },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.09),_transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(99,102,241,0.07),_transparent_55%)]" />
      <div className="relative flex">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-sky-100/50 bg-white/70 backdrop-blur-2xl lg:block shadow-sm">
          <div className="sticky top-0 p-6">
            <Link to="/" className="mb-8 flex items-center gap-3 cursor-pointer group">
              <div className="rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-md shadow-sky-500/30 group-hover:shadow-sky-500/50 transition">
                CW
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-sky-600/60">Consultation</p>
                <p className="text-base font-semibold text-slate-800">Web Application</p>
              </div>
            </Link>

            <nav className="space-y-1.5">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/30'
                        : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50/50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="border-b border-sky-100/50 bg-white/60 backdrop-blur-2xl shadow-sm">
            <div className="flex items-center justify-between px-8 py-5">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-sm text-sky-700/70 mt-0.5">Welcome back, Alex!</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 font-semibold text-sky-700 transition hover:bg-sky-50 hover:border-sky-300 shadow-sm">
                  Profile
                </button>
                <button className="rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-2 font-semibold text-white transition hover:shadow-lg hover:shadow-sky-500/30 shadow-md">
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="px-8 pb-24 pt-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
            <>
              <section className="mb-8 rounded-3xl border border-sky-100/70 bg-gradient-to-br from-white via-sky-50/70 to-white px-6 py-6 shadow-xl shadow-sky-100/60 backdrop-blur">
                <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">Today&apos;s flow</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-800">Stay ahead of bookings, balances, and follow-ups.</h2>
                    <p className="mt-2 text-sm text-sky-800/70">
                      Track what matters, jump into actions quicker, and keep momentum across every touchpoint.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50">
                        View calendar
                      </button>
                      <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                        New booking
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {focusHighlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-sky-100/80 bg-white/80 px-4 py-3 shadow-sm shadow-sky-100/70 backdrop-blur"
                      >
                        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-slate-800">{item.value}</p>
                        <p className="text-sm text-sky-800/70">{item.meta}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-sky-100/60 bg-white/80 backdrop-blur-sm p-5 shadow-md hover:shadow-lg transition-all hover:border-sky-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-medium text-sky-700/70 uppercase tracking-wide">{stat.label}</p>
                          <p className="mt-2 text-2xl font-bold text-slate-800">{stat.value}</p>
                        </div>
                        <div className="rounded-lg bg-gradient-to-br from-sky-100 to-indigo-100 p-2.5">
                          <Icon className="h-6 w-6 text-sky-600" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-lg font-bold text-slate-800 mb-1">Upcoming Sessions</h2>
                  <p className="text-xs text-sky-700/60 mb-5">Your next consultations</p>
                  <div className="mt-4 space-y-3">
                    {upcomingSessions.slice(0, 2).map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/50 to-indigo-50/30 p-4 hover:shadow-md transition"
                      >
                        <div>
                          <p className="font-semibold text-slate-800">{session.consultant}</p>
                          <p className="text-sm text-sky-700/70">
                            {session.date} at {session.time}
                          </p>
                        </div>
                        <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-lg font-bold text-slate-800 mb-1">Recent Activity</h2>
                  <p className="text-xs text-sky-700/60 mb-5">Your latest actions</p>
                  <div className="mt-4 space-y-3.5 text-sm">
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="h-2.5 w-2.5 rounded-full bg-sky-500 shadow-sm" />
                      <p>Booked session with Dr. Priya Nair</p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-sm" />
                      <p>Completed session with Rajesh Kumar</p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700">
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-sm" />
                      <p>Purchased ₹5,000 credits</p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </>
            )}

          {/* Search Consultants Tab */}
          {activeTab === 'search' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800">Find Consultants</h2>
                <p className="mt-2 text-sm text-sky-700/70">
                  Search for consultants by domain, expertise, price range, ratings, language, and availability.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="flex-1 min-w-[200px]">
                    <input
                      type="text"
                      placeholder="Search by name, domain, or expertise..."
                      className="w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-sky-600/50 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-sm"
                    />
                  </div>
                  <select className="rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-sm">
                    <option>All Domains</option>
                    <option>Product Strategy</option>
                    <option>Digital Marketing</option>
                    <option>Financial Planning</option>
                  </select>
                  <select className="rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-sm">
                    <option>Price Range</option>
                    <option>₹0 - ₹3,000</option>
                    <option>₹3,000 - ₹6,000</option>
                    <option>₹6,000+</option>
                  </select>
                  <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                    Search
                  </button>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'Dr. Priya Nair',
                    domain: 'Product Strategy & GTM',
                    rating: 4.96,
                    price: '₹6,500',
                    languages: ['English', 'Hindi'],
                    available: 'Available today',
                  },
                  {
                    name: 'Rajesh Kumar',
                    domain: 'Digital Marketing',
                    rating: 4.8,
                    price: '₹4,500',
                    languages: ['English', 'Hindi', 'Tamil'],
                    available: 'Available tomorrow',
                  },
                  {
                    name: 'Sarah Johnson',
                    domain: 'Financial Planning',
                    rating: 4.9,
                    price: '₹5,500',
                    languages: ['English'],
                    available: 'Available this week',
                  },
                ].map((consultant) => (
                  <div
                    key={consultant.name}
                    className="rounded-xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-5 shadow-md transition hover:shadow-lg hover:border-sky-200"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">{consultant.name}</h3>
                        <p className="text-sm text-sky-700/70">{consultant.domain}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-semibold text-slate-800">{consultant.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sky-700/70">Price:</span>
                        <span className="font-semibold text-slate-800">{consultant.price}/session</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sky-700/70">Languages:</span>
                        <span className="text-slate-800">{consultant.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sky-700/70">Availability:</span>
                        <span className="font-medium text-sky-600">{consultant.available}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Sessions Tab */}
          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800">Upcoming Sessions</h2>
                <p className="mt-2 text-sm text-sky-700/70">
                  Your scheduled consultation sessions. You'll receive email reminders before each session.
                </p>
              </div>

              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-800">{session.consultant}</h3>
                          <span
                            className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                              session.status === 'confirmed'
                                ? 'bg-sky-100 text-sky-700 border border-sky-200'
                                : 'bg-amber-100 text-amber-700 border border-amber-200'
                            }`}
                          >
                            {session.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-sky-700/70">{session.domain}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-700">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="h-4 w-4 text-sky-600" />
                            <span>
                              {session.date} at {session.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4 text-sky-600" />
                            <span>{session.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sky-300">•</span>
                            <span>{session.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 shadow-sm">
                          Reschedule
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                          <VideoCameraIcon className="h-4 w-4" />
                          Join Call
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Sessions Tab */}
          {activeTab === 'past' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800">Past Sessions</h2>
                <p className="mt-2 text-sm text-sky-700/70">
                  Your completed consultation sessions. Rate and review to help others find the right consultant.
                </p>
              </div>

              <div className="space-y-4">
                {pastSessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800">{session.consultant}</h3>
                        <p className="mt-1 text-sm text-sky-700/70">{session.domain}</p>
                        <p className="mt-2 text-sm text-sky-600/60">Completed on {session.date}</p>
                        {session.review && (
                          <div className="mt-3">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < session.rating ? 'text-amber-400' : 'text-sky-200'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="mt-2 text-sm text-slate-700">"{session.review}"</p>
                          </div>
                        )}
                      </div>
                      {!session.review && (
                        <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 shadow-sm">
                          Rate & Review
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Credits & Plans Tab */}
          {activeTab === 'credits' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Credits & Subscription</h2>
                    <p className="mt-2 text-sm text-sky-700/70">
                      Manage your credits, subscribe to plans, and view transaction history.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-sky-700/70">Current Balance</p>
                    <p className="text-3xl font-bold text-sky-600">₹2,500</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800">Buy Credits</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { amount: '₹1,000', credits: '1,000 credits', bonus: '' },
                      { amount: '₹5,000', credits: '5,000 credits', bonus: '+500 bonus' },
                      { amount: '₹10,000', credits: '10,000 credits', bonus: '+1,500 bonus' },
                    ].map((pack) => (
                      <div
                        key={pack.amount}
                        className="flex w-full items-center justify-between rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/50 to-indigo-50/30 p-4 transition hover:border-sky-200 hover:shadow-md"
                      >
                        <div>
                          <p className="font-bold text-slate-800">{pack.amount}</p>
                          <p className="text-sm text-sky-700/70">{pack.credits}</p>
                          {pack.bonus && (
                            <p className="text-xs font-medium text-sky-600">{pack.bonus}</p>
                          )}
                        </div>
                        <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                          Buy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800">Subscription Plans</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { name: 'Basic', sessions: '5 sessions/month', price: '₹2,500/month' },
                      { name: 'Professional', sessions: '10 sessions/month', price: '₹4,500/month' },
                      { name: 'Enterprise', sessions: 'Unlimited', price: 'Custom pricing' },
                    ].map((plan) => (
                      <div
                        key={plan.name}
                        className="rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/50 to-indigo-50/30 p-4 hover:shadow-md transition"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-slate-800">{plan.name}</p>
                            <p className="text-sm text-sky-700/70">{plan.sessions}</p>
                            <p className="mt-1 text-sm font-bold text-sky-600">{plan.price}</p>
                          </div>
                          <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                <h3 className="text-lg font-bold text-slate-800">Transaction History</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { date: '2024-01-12', description: 'Purchased credits', amount: '+₹5,000', type: 'credit' },
                    { date: '2024-01-10', description: 'Session booking', amount: '-₹6,500', type: 'debit' },
                    { date: '2024-01-05', description: 'Purchased credits', amount: '+₹2,500', type: 'credit' },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/30 to-indigo-50/20 p-4 hover:shadow-md transition"
                    >
                      <div>
                        <p className="font-semibold text-slate-800">{transaction.description}</p>
                        <p className="text-sm text-sky-700/70">{transaction.date}</p>
                      </div>
                      <p
                        className={`font-bold ${
                          transaction.type === 'credit' ? 'text-sky-600' : 'text-red-500'
                        }`}
                      >
                        {transaction.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Support Tab */}
          {activeTab === 'support' && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800">Help & Support</h2>
                <p className="mt-2 text-sm text-sky-700/70">
                  Raise a ticket, track status, and get help with any issues you're facing.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800">Raise a Ticket</h3>
                  <form className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-sky-700/70 mb-1.5">Subject</label>
                      <input
                        type="text"
                        placeholder="What do you need help with?"
                        className="w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-sky-600/50 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sky-700/70 mb-1.5">Description</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your issue in detail..."
                        className="w-full rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-sky-600/50 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-sm"
                      />
                    </div>
                    <button className="w-full rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                      Submit Ticket
                    </button>
                  </form>
                </div>

                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800">Active Tickets</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      {
                        id: '#1234',
                        subject: 'Payment issue',
                        status: 'In Progress',
                        date: '2024-01-12',
                      },
                    ].map((ticket) => (
                      <div
                        key={ticket.id}
                        className="rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/50 to-indigo-50/30 p-4 hover:shadow-md transition"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-slate-800">{ticket.subject}</p>
                            <p className="text-sm text-sky-700/70">Ticket {ticket.id}</p>
                            <p className="text-xs text-sky-600/60">{ticket.date}</p>
                          </div>
                          <span className="rounded-lg bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-700">
                            {ticket.status}
                          </span>
                        </div>
                        <button className="mt-3 text-sm font-semibold text-sky-600 hover:text-sky-700">View Details</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard


