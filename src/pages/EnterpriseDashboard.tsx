import { useState } from 'react'
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentArrowUpIcon,
  HomeIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'

type Tab = 'overview' | 'sessions' | 'team' | 'earnings' | 'approvals' | 'documents'

const stats = [
  { label: 'Active consultants', value: '18', meta: '3 pending invites' },
  { label: 'Company sessions', value: '64', meta: 'This month' },
  { label: 'Earnings (net)', value: '₹8.2L', meta: '+22% vs last' },
  { label: 'Pending approvals', value: '05', meta: 'Docs or KYC' },
]

const upcomingCompanySessions = [
  {
    id: 1,
    client: 'NovaFin Corp',
    lead: 'Priya Kapoor',
    type: 'Board advisory',
    date: 'Wed, 27 Nov',
    time: '11:00 AM',
    status: 'confirmed',
  },
  {
    id: 2,
    client: 'Helio Mobility',
    lead: 'Arjun Menon',
    type: 'Growth workshop',
    date: 'Thu, 28 Nov',
    time: '4:30 PM',
    status: 'pending',
  },
  {
    id: 3,
    client: 'BlueOrbit Retail',
    lead: 'Ritika Sen',
    type: 'Turnaround sprint',
    date: 'Fri, 29 Nov',
    time: '9:00 AM',
    status: 'confirmed',
  },
]

const teamMembers = [
  { name: 'Priya Kapoor', domain: 'Strategy Lead', sessions: 18, rating: 4.9, status: 'Active' },
  { name: 'Arjun Menon', domain: 'Growth Advisor', sessions: 15, rating: 4.7, status: 'Active' },
  { name: 'Ritika Sen', domain: 'Ops Excellence', sessions: 11, rating: 4.6, status: 'Limited' },
  { name: 'Dr. Vivek Rao', domain: 'Leadership Coach', sessions: 6, rating: 4.8, status: 'Pending KYC' },
]

const earningsBreakdown = [
  { label: 'Company wallet', value: '₹5,40,000', detail: 'Available to withdraw' },
  { label: 'Scheduled payout', value: '₹1,10,500', detail: 'Releasing 30 Nov' },
  { label: 'Consultant share', value: '₹3,90,000', detail: 'Distributed internally' },
]

const payoutHistory = [
  { id: '#ENT-9081', date: '20 Nov 2024', amount: '₹2,00,000', status: 'Completed', note: 'HDFC • 4481' },
  { id: '#ENT-9042', date: '07 Nov 2024', amount: '₹1,75,500', status: 'Completed', note: 'HDFC • 4481' },
  { id: '#ENT-9009', date: '25 Oct 2024', amount: '₹2,30,000', status: 'Completed', note: 'HDFC • 4481' },
]

const approvals = [
  { id: 'KYC-778', name: 'Dr. Vivek Rao', type: 'Consultant KYC', status: 'Pending review', submitted: '24 Nov' },
  { id: 'DOC-552', name: 'GrowthOps Pvt Ltd', type: 'Utility bill', status: 'Needs correction', submitted: '22 Nov' },
  { id: 'KYC-779', name: 'Shreya Nair', type: 'Consultant KYC', status: 'Queued', submitted: '21 Nov' },
]

const documents = [
  { name: 'Company PAN', status: 'Verified', updated: '10 Oct 2024' },
  { name: 'MSME certificate', status: 'Pending renewal', updated: '04 Nov 2024' },
  { name: 'Utility bill (HQ)', status: 'Submitted', updated: '22 Nov 2024' },
]

const sidebarItems = [
  { id: 'overview' as Tab, label: 'Overview', icon: HomeIcon },
  { id: 'sessions' as Tab, label: 'Sessions', icon: CalendarDaysIcon },
  { id: 'team' as Tab, label: 'Team', icon: UserGroupIcon },
  { id: 'earnings' as Tab, label: 'Earnings', icon: CreditCardIcon },
  { id: 'approvals' as Tab, label: 'Approvals', icon: ShieldCheckIcon },
  { id: 'documents' as Tab, label: 'Documents', icon: ClipboardDocumentCheckIcon },
]

function EnterpriseDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.08),_transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(99,102,241,0.07),_transparent_55%)]" />
      <div className="relative flex">
        <aside className="hidden w-68 border-r border-sky-100/40 bg-white/80 backdrop-blur-2xl lg:block shadow-sm">
          <div className="sticky top-0 p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30">
                EA
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-sky-600/60">Enterprise Admin</p>
                <p className="text-base font-semibold text-slate-800">Aurora Consulting</p>
              </div>
            </div>
            <nav className="space-y-1.5">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-medium transition ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/30'
                        : 'text-slate-600 hover:bg-sky-50/60 hover:text-sky-700'
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
          <header className="border-b border-sky-100/60 bg-white/70 backdrop-blur-2xl shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Enterprise control room</p>
                <h1 className="text-2xl font-bold text-slate-800">Good evening, Meera.</h1>
                <p className="text-sm text-sky-700/70">Monitor company sessions, team health, and payouts.</p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <button className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-4 py-2 font-semibold text-sky-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50">
                  <Squares2X2Icon className="h-4 w-4" />
                  Team settings
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-5 py-2 font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                  <BuildingOffice2Icon className="h-4 w-4" />
                  Add consultant
                </button>
              </div>
            </div>
          </header>

          <main className="px-8 pb-24 pt-8 space-y-8">
            {activeTab === 'overview' && (
              <>
                <section className="rounded-3xl border border-sky-100/70 bg-gradient-to-br from-white via-sky-50/70 to-white px-6 py-6 shadow-xl shadow-sky-100/60 backdrop-blur">
                  <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400">Enterprise visibility</p>
                      <h2 className="mt-3 text-2xl font-semibold text-slate-800">Balance client demand, team supply, and earnings.</h2>
                      <p className="mt-2 text-sm text-sky-800/70">
                        This panel keeps you ahead on approvals, session reassignments, and payouts across your entire firm.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button className="rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50">
                          View pipeline
                        </button>
                        <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:shadow-lg hover:shadow-sky-500/40">
                          Invite team
                        </button>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-sky-100/80 bg-white/80 px-4 py-3 shadow-sm shadow-sky-100/70 backdrop-blur">
                          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
                          <p className="mt-1 text-base font-semibold text-slate-800">{stat.value}</p>
                          <p className="text-sm text-sky-800/70">{stat.meta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-sky-100/60 bg-white/80 backdrop-blur-sm p-5 shadow-md transition hover:border-sky-200 hover:shadow-lg">
                      <p className="text-xs font-medium text-sky-700/70 uppercase tracking-wide">{stat.label}</p>
                      <p className="mt-2 text-2xl font-bold text-slate-800">{stat.value}</p>
                      <p className="text-sm text-slate-500">{stat.meta}</p>
                    </div>
                  ))}
                </section>

                <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                  <div className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-8 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800">Enterprise sessions</h3>
                        <p className="text-xs text-slate-500">Confirm, reassign, or monitor attendance</p>
                      </div>
                      <button className="text-sm font-semibold text-sky-600 hover:text-sky-700">Open calendar</button>
                    </div>
                    <div className="mt-4 space-y-3">
                      {upcomingCompanySessions.map((session) => (
                        <div key={session.id} className="rounded-lg border border-sky-100 bg-gradient-to-r from-sky-50/60 to-indigo-50/30 p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-slate-800">{session.client}</p>
                              <p className="text-sm text-slate-600">{session.type}</p>
                              <p className="text-sm text-sky-700/70">
                                {session.date} - {session.time}
                              </p>
                            </div>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                session.status === 'confirmed'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {session.status}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-500">Lead consultant: {session.lead}</p>
                          <div className="mt-3 flex gap-2">
                            <button className="rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                              Reassign
                            </button>
                            <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30">
                              Join room
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-8 shadow-lg">
                    <h3 className="text-lg font-bold text-slate-800">Focus items</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-600">
                      <li className="rounded-lg border border-sky-100 bg-white/70 px-4 py-3">
                        <span className="font-semibold text-slate-800">2 consultants overdue on KYC</span>
                        <p className="text-xs text-slate-500">Send reminder or pause bookings</p>
                      </li>
                      <li className="rounded-lg border border-sky-100 bg-white/70 px-4 py-3">
                        <span className="font-semibold text-slate-800">1 high-priority ticket escalated</span>
                        <p className="text-xs text-slate-500">Assign to team lead for resolution</p>
                      </li>
                      <li className="rounded-lg border border-sky-100 bg-white/70 px-4 py-3">
                        <span className="font-semibold text-slate-800">Add branding assets for public profile</span>
                        <p className="text-xs text-slate-500">Upload banner and enterprise tagline</p>
                      </li>
                    </ul>
                  </div>
                </section>
              </>
            )}

            {activeTab === 'sessions' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">Company-wide sessions</h2>
                  <p className="text-sm text-slate-600">Track bookings, attendance, and resourcing.</p>
                </header>
                {upcomingCompanySessions.map((session) => (
                  <div key={session.id} className="rounded-2xl border border-sky-100/60 bg-white/90 p-6 shadow-md">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-800">{session.client}</h3>
                          <span
                            className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                              session.status === 'confirmed'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {session.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500">{session.type}</p>
                        <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-700">
                          <div className="flex items-center gap-2">
                            <CalendarDaysIcon className="h-4 w-4 text-sky-600" />
                            <span>{session.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4 text-sky-600" />
                            <span>{session.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UserGroupIcon className="h-4 w-4 text-sky-600" />
                            <span>Lead: {session.lead}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <button className="flex-1 rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                          Reassign
                        </button>
                        <button className="flex-1 rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                          Notify client
                        </button>
                        <button className="flex-1 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 hover:shadow-lg">
                          <VideoCameraIcon className="h-4 w-4" />
                          Join call
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {activeTab === 'team' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Team management</h2>
                      <p className="text-sm text-slate-600">Invite, assign tiers, and monitor consultant health.</p>
                    </div>
                    <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30">
                      Invite consultant
                    </button>
                  </div>
                </header>
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 p-6 shadow-md">
                  <div className="grid gap-4">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-sky-100 bg-white/70 px-4 py-4">
                        <div>
                          <p className="text-lg font-semibold text-slate-800">{member.name}</p>
                          <p className="text-sm text-slate-500">{member.domain}</p>
                        </div>
                        <div className="flex flex-wrap gap-5 text-sm text-slate-600">
                          <span>Sessions: {member.sessions}</span>
                          <span>Rating: {member.rating}</span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              member.status === 'Active'
                                ? 'bg-emerald-100 text-emerald-700'
                                : member.status === 'Limited'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {member.status}
                          </span>
                        </div>
                        <div className="flex gap-2 text-sm">
                          <button className="rounded-lg border border-sky-200 bg-white px-3 py-2 font-semibold text-sky-700 hover:bg-sky-50">
                            Assign lead
                          </button>
                          <button className="rounded-lg border border-rose-200 bg-white px-3 py-2 font-semibold text-rose-500 hover:bg-rose-50">
                            Pause
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'earnings' && (
              <section className="space-y-6">
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-8 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Enterprise earnings</h2>
                      <p className="text-sm text-slate-600">Company wallet, consultant shares, and payout history.</p>
                    </div>
                    <button className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30">
                      Initiate withdrawal
                    </button>
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                  {earningsBreakdown.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-sky-100/60 bg-white/90 p-6 shadow-md">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-800">{item.value}</p>
                      <p className="text-sm text-slate-500">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-8 shadow-lg">
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

            {activeTab === 'approvals' && (
              <section className="space-y-4">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">Verification queue</h2>
                  <p className="text-sm text-slate-600">Approve consultant KYCs and enterprise compliance artifacts.</p>
                </header>
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 p-6 shadow-md">
                  <div className="space-y-3">
                    {approvals.map((item) => (
                      <div key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-100 bg-white/70 px-4 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                          <p className="text-xs text-slate-500">
                            {item.type} - submitted {item.submitted}
                          </p>
                        </div>
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{item.status}</span>
                        <div className="flex gap-2 text-sm">
                          <button className="rounded-lg border border-sky-200 bg-white px-3 py-2 font-semibold text-sky-700 hover:bg-sky-50">
                            Review
                          </button>
                          <button className="rounded-lg border border-emerald-200 bg-white px-3 py-2 font-semibold text-emerald-600 hover:bg-emerald-50">
                            Approve
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {activeTab === 'documents' && (
              <section className="space-y-6">
                <header className="rounded-2xl border border-sky-100/60 bg-white/90 px-6 py-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800">Enterprise documents</h2>
                  <p className="text-sm text-slate-600">Centralize compliance docs, contracts, and branding assets.</p>
                </header>
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 p-6 shadow-md">
                  <div className="space-y-3">
                    {documents.map((doc) => (
                      <div key={doc.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-sky-100 bg-white/70 px-4 py-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{doc.name}</p>
                          <p className="text-xs text-slate-500">Updated {doc.updated}</p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            doc.status === 'Verified'
                              ? 'bg-emerald-100 text-emerald-700'
                              : doc.status === 'Pending renewal'
                                ? 'bg-amber-100 text-amber-700'
                                : 'bg-sky-100 text-sky-700'
                          }`}
                        >
                          {doc.status}
                        </span>
                        <button className="inline-flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50">
                          <DocumentArrowUpIcon className="h-4 w-4" />
                          Upload
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-sky-100/60 bg-white/90 p-6 shadow-md">
                  <h3 className="text-lg font-bold text-slate-800">Broadcast</h3>
                  <p className="text-sm text-slate-600">Send announcements to all consultants.</p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <textarea
                      rows={3}
                      placeholder="Share new branding guidelines, policies, or reminders..."
                      className="flex-1 rounded-xl border border-sky-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-sky-600/60 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                    <button className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/30">
                      Send broadcast
                    </button>
                  </div>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default EnterpriseDashboard

