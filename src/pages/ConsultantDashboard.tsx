import { useState } from 'react'
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CreditCardIcon,
  EnvelopeOpenIcon,
  HomeIcon,
  StarIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

type Tab = 'overview' | 'sessions' | 'requests' | 'earnings' | 'reviews' | 'messages'

type SessionStatus = 'confirmed' | 'pending' | 'awaiting'

type Session = {
  id: number
  client: string
  topic: string
  date: string
  time: string
  duration: string
  type: string
  status: SessionStatus
}

const stats = [
  { label: 'Confirmed Sessions', value: '12', meta: '+3 this week' },
  { label: 'Awaiting Action', value: '04', meta: '2 high priority' },
  { label: 'Month Earnings', value: '₹1,82,000', meta: '+18% vs last' },
  { label: 'Avg. Rating', value: '4.9/5', meta: '128 reviews' },
]

const quickHighlights = [
  { label: 'Next session', value: 'FinEdge Labs', meta: '28 Nov  -  10:30 AM' },
  { label: 'Pending payout', value: '₹15,000', meta: 'Clears on 03 Dec' },
  { label: 'Inbox', value: '2 unread', meta: 'Latest: BrightUp Studios' },
]

const upcomingSessions: Session[] = [
  {
    id: 1,
    client: 'FinEdge Labs',
    topic: 'Go-to-market review',
    date: 'Tue, 28 Nov',
    time: '10:30 AM',
    duration: '60 min',
    type: 'Strategy Call',
    status: 'confirmed',
  },
  {
    id: 2,
    client: 'Aria Retail',
    topic: 'Conversion audit',
    date: 'Wed, 29 Nov',
    time: '2:00 PM',
    duration: '45 min',
    type: 'Audit Session',
    status: 'confirmed',
  },
  {
    id: 3,
    client: 'Nova SaaS',
    topic: 'Pricing workshop',
    date: 'Fri, 01 Dec',
    time: '4:30 PM',
    duration: '90 min',
    type: 'Deep Dive',
    status: 'pending',
  },
]

const sessionRequests: Session[] = [
  {
    id: 4,
    client: 'BrightUp Studios',
    topic: 'Brand positioning',
    date: 'Sat, 02 Dec',
    time: '11:00 AM',
    duration: '60 min',
    type: 'Discovery Call',
    status: 'awaiting',
  },
  {
    id: 5,
    client: 'Zen Logistics',
    topic: 'Ops optimisation',
    date: 'Mon, 04 Dec',
    time: '9:00 AM',
    duration: '45 min',
    type: 'Coaching',
    status: 'awaiting',
  },
]

const earningsSummary = [
  { label: 'This week', value: '₹42,500', detail: '+12% vs last week' },
  { label: 'Pending payout', value: '₹15,000', detail: 'Next cycle  -  03 Dec' },
  { label: 'Average rate', value: '₹6,200/hr', detail: '+₹400 vs Oct' },
]

const payoutHistory = [
  { id: '#P-7781', date: '21 Nov 2024', amount: '₹48,000', status: 'Completed', note: 'HDFC • 3489' },
  { id: '#P-7755', date: '12 Nov 2024', amount: '₹35,500', status: 'Completed', note: 'HDFC • 3489' },
  { id: '#P-7701', date: '02 Nov 2024', amount: '₹51,200', status: 'Completed', note: 'HDFC • 3489' },
]

const reviews = [
  {
    client: 'Riya Sharma',
    company: 'Vortex Commerce',
    rating: 5,
    feedback: 'Actionable insights and a detailed roadmap -- great session!',
    date: '24 Nov 2024',
  },
  {
    client: 'Dev Patel',
    company: 'Northwind Mobility',
    rating: 4,
    feedback: 'Clear breakdown of mistakes and growth plan. Slight delay starting.',
    date: '19 Nov 2024',
  },
  {
    client: 'Sonia Gupta',
    company: 'BrightUp Studios',
    rating: 5,
    feedback: 'Loved the templates you shared. Booking again next month.',
    date: '14 Nov 2024',
  },
]

const inboxItems = [
  { title: 'Client shared files', desc: 'BrightUp Studios uploaded reference deck', time: '5 min ago' },
  { title: 'Reminder  -  30 min', desc: 'FinEdge Labs strategy call', time: 'Calendar' },
  { title: 'Payment released', desc: '₹12,000 to HDFC ****3489', time: 'Yesterday' },
  { title: 'Verification', desc: 'KYC renewal due in 12 days', time: 'Due soon' },
]

const profileChecklist = [
  { label: 'Upload latest certification', done: false },
  { label: 'Update hourly pricing', done: true },
  { label: 'Refresh case study', done: false },
  { label: 'Verify bank document', done: true },
]

const sidebarItems = [
  { id: 'overview' as Tab, label: 'Overview', icon: HomeIcon },
  { id: 'sessions' as Tab, label: 'My Sessions', icon: CalendarDaysIcon },
  { id: 'requests' as Tab, label: 'Requests', icon: CheckCircleIcon },
  { id: 'earnings' as Tab, label: 'Earnings & Payouts', icon: CreditCardIcon },
  { id: 'reviews' as Tab, label: 'Reviews', icon: StarIcon },
  { id: 'messages' as Tab, label: 'Messages', icon: ChatBubbleLeftRightIcon },
]

function ConsultantDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(59,130,246,0.09),_transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(99,102,241,0.07),_transparent_55%)]" />
      <div className="relative flex">
        <aside className="hidden w-64 border-r border-sky-100/50 bg-white/70 backdrop-blur-2xl lg:block shadow-sm">
          <div className="sticky top-0 p-6">
            <button className="mb-8 flex items-center gap-3 cursor-pointer group">
              <div className="rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow-md shadow-sky-500/30 group-hover:shadow-sky-500/50 transition">
                CW
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-sky-600/60">Consultant</p>
                <p className="text-base font-semibold text-slate-800">Workspace</p>
              </div>
            </button>

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

        <div className="flex-1">
          <header className="border-b border-sky-100/50 bg-white/60 backdrop-blur-2xl shadow-sm">
            <div className="flex items-center justify-between px-8 py-5">
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Consultant Dashboard</h1>
                <p className="text-sm text-sky-700/70 mt-0.5">Hi Ananya, here is what needs your attention today.</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 font-semibold text-sky-700 transition hover:bg-sky-50 hover:border-sky-300 shadow-sm">
                  View profile
                </button>
                <button className="rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-2 font-semibold text-white transition hover:shadow-lg hover:shadow-sky-500/30 shadow-md">
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="px-8 pb-24 pt-8 space-y-8">
            {activeTab === 'overview' && (
              <>
                <section className="rounded-3xl border border-sky-100/70 bg-gradient-to-br from-white via-sky-50/70 to-white px-6 py-6 shadow-xl shadow-sky-100/60 backdrop-blur">
                  <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">Today&apos;s plan</p>
                      <h2 className="mt-3 text-2xl font-semibold text-slate-800">Guide clients, clear requests, and stay payout-ready.</h2>
                      <p className="mt-2 text-sm text-sky-800/70">
                        Stay on top of your consultations, approvals, and wallet balance -- everything updates live as clients book you.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50">
                          View calendar
                        </button>
                        <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                          Share availability
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {quickHighlights.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-sky-100/80 bg-white/80 px-4 py-3 shadow-sm shadow-sky-100/70 backdrop-blur">
                          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                          <p className="mt-1 text-base font-semibold text-slate-800">{item.value}</p>
                          <p className="text-sm text-sky-800/70">{item.meta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-sky-100/60 bg-white/80 backdrop-blur-sm p-5 shadow-md hover:shadow-lg transition-all hover:border-sky-200">
                      <p className="text-xs font-medium text-sky-700/70 uppercase tracking-wide">{stat.label}</p>
                      <p className="mt-2 text-2xl font-bold text-slate-800">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.meta}</p>
                    </div>
                  ))}
                </section>

                <section className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">Upcoming Sessions</h3>
                        <p className="text-xs text-sky-700/60">Next 48 hours</p>
                      </div>
                      <button className="text-sm font-semibold text-sky-600 hover:text-sky-700">Manage</button>
                    </div>
                    <div className="mt-4 space-y-3">
                      {upcomingSessions.slice(0, 2).map((session) => (
                        <div key={session.id} className="flex items-center justify-between rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/50 to-indigo-50/30 p-4 hover:shadow-md transition">
                          <div>
                            <p className="font-semibold text-slate-800">{session.client}</p>
                            <p className="text-sm text-sky-700/70">{session.date}  -  {session.time}</p>
                          </div>
                          <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                            Prep
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">Session Requests</h3>
                        <p className="text-xs text-sky-700/60">Requires your response</p>
                      </div>
                      <button className="text-sm font-semibold text-sky-600 hover:text-sky-700">See all</button>
                    </div>
                    <div className="mt-4 space-y-3">
                      {sessionRequests.map((request) => (
                        <div key={request.id} className="rounded-lg border border-amber-100 bg-gradient-to-r from-amber-50/60 to-white p-4">
                          <p className="font-semibold text-slate-800">{request.client}</p>
                          <p className="text-sm text-sky-700/70">{request.date}  -  {request.time}</p>
                          <div className="mt-3 flex gap-2">
                            <button className="flex-1 rounded-lg bg-emerald-500/90 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
                              Accept
                            </button>
                            <button className="flex-1 rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                              Propose slot
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                  <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                    <h3 className="text-lg font-bold text-slate-800">Profile checklist</h3>
                    <p className="text-xs text-sky-700/60">Keep your profile at 100%</p>
                    <div className="mt-4 space-y-3">
                      {profileChecklist.map((task) => (
                        <div key={task.label} className="flex items-center justify-between rounded-lg border border-sky-100 bg-white/70 px-4 py-3">
                          <span className="text-sm text-slate-700">{task.label}</span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              task.done ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {task.done ? 'Done' : 'Pending'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                    <h3 className="text-lg font-bold text-slate-800">Inbox</h3>
                    <div className="mt-4 space-y-3">
                      {inboxItems.map((item) => (
                        <div key={item.title} className="rounded-lg border border-sky-100 bg-white/70 p-4">
                          <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                          <p className="text-xs text-slate-500">{item.desc}</p>
                          <p className="text-xs text-sky-600 mt-1">{item.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'sessions' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">All upcoming sessions</h2>
                  <p className="text-sm text-sky-700/70">Join, reschedule, or share prep links for confirmed calls.</p>
                </header>
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-6 shadow-md hover:shadow-lg transition">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-800">{session.client}</h3>
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
                        <p className="mt-1 text-sm text-sky-700/70">{session.topic}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-700">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="h-4 w-4 text-sky-600" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4 text-sky-600" />
                            <span>
                              {session.time}  -  {session.duration}
                            </span>
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
                          Join call
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {activeTab === 'requests' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-amber-100 bg-white/90 backdrop-blur-sm px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">Pending session requests</h2>
                  <p className="text-sm text-amber-700/70">Respond within 12 hours to keep acceptance rate high.</p>
                </header>
                {sessionRequests.map((request) => (
                  <div key={request.id} className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50/60 to-white p-6 shadow-md">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-amber-500">{request.type}</p>
                        <h3 className="text-xl font-semibold text-slate-800">{request.client}</h3>
                        <p className="text-sm text-sky-700/70">{request.topic}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-700">
                          <span>{request.date}</span>
                          <span className="text-slate-400">|</span>
                          <span>
                            {request.time}  -  {request.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <button className="flex-1 rounded-lg bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500">
                          Accept
                        </button>
                        <button className="flex-1 rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                          Propose slot
                        </button>
                        <button className="flex-1 rounded-lg border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-500 hover:bg-rose-50">
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {activeTab === 'earnings' && (
              <section className="space-y-6">
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Earnings & payout wallet</h2>
                      <p className="text-sm text-sky-700/70">Monitor inflows, request withdrawals, and view history.</p>
                    </div>
                    <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg">
                      Withdraw funds
                    </button>
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {earningsSummary.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-6 shadow-md">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-800">{item.value}</p>
                      <p className="text-sm text-slate-500">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-8 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-800">Payout history</h3>
                  <div className="mt-4 space-y-3">
                    {payoutHistory.map((payout) => (
                      <div key={payout.id} className="flex flex-wrap items-center justify-between rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/50 to-indigo-50/30 p-4">
                        <div>
                          <p className="font-semibold text-slate-800">{payout.amount}</p>
                          <p className="text-sm text-slate-500">{payout.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-sky-600">{payout.status}</p>
                          <p className="text-xs text-slate-500">{payout.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'reviews' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">Client reviews</h2>
                  <p className="text-sm text-sky-700/70">Highlight what clients love and follow up on feedback.</p>
                </header>
                <div className="grid gap-4 md:grid-cols-2">
                  {reviews.map((review) => (
                    <div key={review.client} className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-6 shadow-md">
                      <div className="flex items-center gap-3">
                        <UserCircleIcon className="h-10 w-10 text-slate-400" />
                        <div>
                          <p className="font-semibold text-slate-800">{review.client}</p>
                          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{review.company}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <StarIcon key={idx} className={`h-4 w-4 ${idx < review.rating ? 'text-amber-400' : 'text-slate-200'}`} />
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-slate-700">"{review.feedback}"</p>
                      <p className="mt-2 text-xs text-slate-500">{review.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === 'messages' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">Inbox & reminders</h2>
                  <p className="text-sm text-sky-700/70">Recent conversations, files, and alerts.</p>
                </header>
                <div className="grid gap-4 md:grid-cols-2">
                  {inboxItems.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-sky-100/60 bg-white/90 backdrop-blur-sm p-5 shadow-md">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-slate-800">{item.title}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                        <EnvelopeOpenIcon className="h-5 w-5 text-sky-500" />
                      </div>
                      <p className="mt-2 text-xs text-sky-600">{item.time}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default ConsultantDashboard
