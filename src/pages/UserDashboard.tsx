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

  const stats = [
    { label: 'Upcoming Sessions', value: '3', icon: ClockIcon },
    { label: 'Total Sessions', value: '12', icon: CheckCircleIcon },
    { label: 'Credits Balance', value: '₹2,500', icon: CreditCardIcon },
    { label: 'Active Tickets', value: '1', icon: ChatBubbleLeftRightIcon },
  ]

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

  const sidebarItems = [
    { id: 'overview' as Tab, label: 'Overview', icon: HomeIcon },
    { id: 'search' as Tab, label: 'Find Consultants', icon: MagnifyingGlassIcon },
    { id: 'upcoming' as Tab, label: 'Upcoming Sessions', icon: CalendarDaysIcon },
    { id: 'past' as Tab, label: 'Past Sessions', icon: CheckCircleIcon },
    { id: 'credits' as Tab, label: 'Credits & Plans', icon: CreditCardIcon },
    { id: 'support' as Tab, label: 'Help & Support', icon: ChatBubbleLeftRightIcon },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-hero-sheen blur-3xl opacity-60" />
      <div className="relative flex">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-slate-200 bg-white/80 backdrop-blur-xl lg:block">
          <div className="sticky top-0 p-6">
            <Link to="/" className="mb-8 flex items-center gap-3 cursor-pointer">
              <div className="rounded-xl bg-brand text-white px-4 py-2 text-sm font-semibold">
                CW
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Consultation</p>
                <p className="text-base font-semibold text-slate-700">Web Application</p>
              </div>
            </Link>

            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                      activeTab === item.id
                        ? 'bg-brand text-white'
                        : 'text-slate-500 hover:text-slate-900'
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
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
                <p className="text-sm text-slate-500">Welcome back, Alex!</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <button className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-600 transition hover:text-slate-900">
                  Profile
                </button>
                <button className="rounded-full bg-slate-900 px-5 py-2 font-semibold text-white transition hover:bg-slate-800">
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="px-6 pb-24 pt-16">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-600">{stat.label}</p>
                          <p className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</p>
                        </div>
                        <div className="rounded-xl bg-brand/10 p-3">
                          <Icon className="h-6 w-6 text-brand" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                  <h2 className="text-lg font-semibold text-slate-900">Upcoming Sessions</h2>
                  <div className="mt-4 space-y-4">
                    {upcomingSessions.slice(0, 2).map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">{session.consultant}</p>
                          <p className="text-sm text-slate-600">
                            {session.date} at {session.time}
                          </p>
                        </div>
                        <button className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                  <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
                  <div className="mt-4 space-y-4 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand" />
                      <p>Booked session with Dr. Priya Nair</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <p>Completed session with Rajesh Kumar</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <p>Purchased ₹5,000 credits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Consultants Tab */}
          {activeTab === 'search' && (
            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-semibold text-slate-900">Find Consultants</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Search for consultants by domain, expertise, price range, ratings, language, and availability.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <input
                      type="text"
                      placeholder="Search by name, domain, or expertise..."
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                  <select className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                    <option>All Domains</option>
                    <option>Product Strategy</option>
                    <option>Digital Marketing</option>
                    <option>Financial Planning</option>
                  </select>
                  <select className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                    <option>Price Range</option>
                    <option>₹0 - ₹3,000</option>
                    <option>₹3,000 - ₹6,000</option>
                    <option>₹6,000+</option>
                  </select>
                  <button className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
                    Search
                  </button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{consultant.name}</h3>
                        <p className="text-sm text-slate-600">{consultant.domain}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-semibold">{consultant.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Price:</span>
                        <span className="font-semibold text-slate-900">{consultant.price}/session</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Languages:</span>
                        <span className="text-slate-900">{consultant.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600">Availability:</span>
                        <span className="text-green-600">{consultant.available}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
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
              <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-semibold text-slate-900">Upcoming Sessions</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Your scheduled consultation sessions. You'll receive email reminders before each session.
                </p>
              </div>

              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold text-slate-900">{session.consultant}</h3>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              session.status === 'confirmed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {session.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{session.domain}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="h-4 w-4" />
                            <span>
                              {session.date} at {session.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4" />
                            <span>{session.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400">•</span>
                            <span>{session.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                          Reschedule
                        </button>
                        <button className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
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
              <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-semibold text-slate-900">Past Sessions</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Your completed consultation sessions. Rate and review to help others find the right consultant.
                </p>
              </div>

              <div className="space-y-4">
                {pastSessions.map((session) => (
                  <div
                    key={session.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{session.consultant}</h3>
                        <p className="mt-1 text-sm text-slate-600">{session.domain}</p>
                        <p className="mt-2 text-sm text-slate-500">Completed on {session.date}</p>
                        {session.review && (
                          <div className="mt-3">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < session.rating ? 'text-amber-400' : 'text-slate-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="mt-2 text-sm text-slate-600">"{session.review}"</p>
                          </div>
                        )}
                      </div>
                      {!session.review && (
                        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
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
              <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">Credits & Subscription</h2>
                    <p className="mt-2 text-sm text-slate-600">
                      Manage your credits, subscribe to plans, and view transaction history.
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">Current Balance</p>
                    <p className="text-3xl font-semibold text-slate-900">₹2,500</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                  <h3 className="text-lg font-semibold text-slate-900">Buy Credits</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { amount: '₹1,000', credits: '1,000 credits', bonus: '' },
                      { amount: '₹5,000', credits: '5,000 credits', bonus: '+500 bonus' },
                      { amount: '₹10,000', credits: '10,000 credits', bonus: '+1,500 bonus' },
                    ].map((pack) => (
                      <div
                        key={pack.amount}
                        className="flex w-full items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-brand hover:bg-brand/5"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">{pack.amount}</p>
                          <p className="text-sm text-slate-600">{pack.credits}</p>
                          {pack.bonus && (
                            <p className="text-xs text-green-600">{pack.bonus}</p>
                          )}
                        </div>
                        <button className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
                          Buy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                  <h3 className="text-lg font-semibold text-slate-900">Subscription Plans</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      { name: 'Basic', sessions: '5 sessions/month', price: '₹2,500/month' },
                      { name: 'Professional', sessions: '10 sessions/month', price: '₹4,500/month' },
                      { name: 'Enterprise', sessions: 'Unlimited', price: 'Custom pricing' },
                    ].map((plan) => (
                      <div
                        key={plan.name}
                        className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-slate-900">{plan.name}</p>
                            <p className="text-sm text-slate-600">{plan.sessions}</p>
                            <p className="mt-1 text-sm font-semibold text-brand">{plan.price}</p>
                          </div>
                          <button className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                <h3 className="text-lg font-semibold text-slate-900">Transaction History</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { date: '2024-01-12', description: 'Purchased credits', amount: '+₹5,000', type: 'credit' },
                    { date: '2024-01-10', description: 'Session booking', amount: '-₹6,500', type: 'debit' },
                    { date: '2024-01-05', description: 'Purchased credits', amount: '+₹2,500', type: 'credit' },
                  ].map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">{transaction.description}</p>
                        <p className="text-sm text-slate-600">{transaction.date}</p>
                      </div>
                      <p
                        className={`font-semibold ${
                          transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
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
              <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                <h2 className="text-2xl font-semibold text-slate-900">Help & Support</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Raise a ticket, track status, and get help with any issues you're facing.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                  <h3 className="text-lg font-semibold text-slate-900">Raise a Ticket</h3>
                  <form className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-600">Subject</label>
                      <input
                        type="text"
                        placeholder="What do you need help with?"
                        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-600">Description</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your issue in detail..."
                        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <button className="w-full rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow-glow-sm transition hover:bg-indigo-500">
                      Submit Ticket
                    </button>
                  </form>
                </div>

                <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-12 shadow-lg shadow-slate-200/50">
                  <h3 className="text-lg font-semibold text-slate-900">Active Tickets</h3>
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
                        className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-slate-900">{ticket.subject}</p>
                            <p className="text-sm text-slate-600">Ticket {ticket.id}</p>
                            <p className="text-xs text-slate-500">{ticket.date}</p>
                          </div>
                          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                            {ticket.status}
                          </span>
                        </div>
                        <button className="mt-3 text-sm font-semibold text-brand">View Details</button>
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


