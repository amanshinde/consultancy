import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  BuildingOffice2Icon,
  UsersIcon,
  BanknotesIcon,
  BellAlertIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'

type UserTab = 'clients' | 'consultants' | 'enterprises'
type VerificationTab = 'pending' | 'approved' | 'rejected'

function AdminPage() {
  const [activeUserTab, setActiveUserTab] = useState<UserTab>('clients')
  const [verificationTab, setVerificationTab] = useState<VerificationTab>('pending')
  const [activeVerificationIndex, setActiveVerificationIndex] = useState(0)

  const dashboardStats = [
    {
      label: 'Total Users',
      value: '12,540',
      meta: '8,900 Clients • 3,200 Consultants • 440 Enterprises',
    },
    { label: 'Active Sessions', value: '32', meta: 'Live calls right now' },
    { label: 'Total Revenue', value: '₹12.4 Cr', meta: 'Lifetime processed volume' },
    { label: 'Platform Profit', value: '₹1.24 Cr', meta: '10% commission retained' },
  ]

  const actionItems = [
    { label: '5 Pending Consultant Verifications', action: 'Resolve now' },
    { label: '2 Open Disputes', action: 'Review disputes' },
    { label: '3 Withdrawal Requests', action: 'Approve payouts' },
  ]
  const userDirectory = {
    clients: [
      { name: 'Ananya Rao', email: 'ananya@example.com', joined: 'Feb 02, 2025', status: 'Active' },
      { name: 'Raghav Shah', email: 'raghav@example.com', joined: 'Jan 18, 2025', status: 'Banned' },
      { name: 'Maria Lewis', email: 'maria@example.com', joined: 'Dec 12, 2024', status: 'Active' },
    ],
    consultants: [
      { name: 'Dr. Priya Nair', domain: 'Product Strategy', rating: 4.9, earnings: '₹18.2L' },
      { name: 'Rajesh Kumar', domain: 'Digital Marketing', rating: 4.7, earnings: '₹11.6L' },
      { name: 'Sarah Johnson', domain: 'Financial Planning', rating: 4.8, earnings: '₹15.4L' },
    ],
    enterprises: [
      { company: 'Northwind Analytics', representative: 'Meera Singh', employees: 32 },
      { company: 'GrowthLabs', representative: 'Ravi Patel', employees: 18 },
      { company: 'Everest Partners', representative: 'Sandra Dias', employees: 44 },
    ],
  }

  const verificationCenter: Record<VerificationTab, Array<{
    id: string
    name: string
    type: string
    docs: string
    submittedAt: string
    status: VerificationTab
    risk: 'Low' | 'Medium' | 'High'
    docPreview: string
    formData: { label: string; value: string }[]
    rejectionReason?: string
  }>> = {
    pending: [
      {
        id: 'VC-1021',
        name: 'Priya Kapoor',
        type: 'Individual Consultant',
        docs: 'PAN, Aadhaar, UX certs',
        submittedAt: '12 mins ago',
        status: 'pending',
        risk: 'Low',
        docPreview: 'https://placehold.co/320x200?text=KYC+Doc',
        formData: [
          { label: 'Full Name', value: 'Priya Kapoor' },
          { label: 'ID Number', value: 'AUSPK8712D' },
          { label: 'Domain', value: 'UX Strategy' },
        ],
      },
      {
        id: 'VC-1022',
        name: 'Northwind Analytics',
        type: 'Enterprise Consultant',
        docs: 'GST, MoA, Utility bill',
        submittedAt: '35 mins ago',
        status: 'pending',
        risk: 'Medium',
        docPreview: 'https://placehold.co/320x200?text=Enterprise+Docs',
        formData: [
          { label: 'Company Name', value: 'Northwind Analytics' },
          { label: 'GST', value: '27ABCDE1234F1Z5' },
          { label: 'Representative', value: 'Meera Singh' },
        ],
      },
    ],
    approved: [
      {
        id: 'VC-0987',
        name: 'Rajesh Kumar',
        type: 'Individual Consultant',
        docs: 'PAN, Certificate, Bank Proof',
        submittedAt: 'Jan 20, 2025',
        status: 'approved',
        risk: 'Low',
        docPreview: 'https://placehold.co/320x200?text=Approved+Doc',
        formData: [
          { label: 'Full Name', value: 'Rajesh Kumar' },
          { label: 'ID Number', value: 'AHZPK9012C' },
          { label: 'Domain', value: 'Digital Marketing' },
        ],
      },
    ],
    rejected: [
      {
        id: 'VC-0971',
        name: 'GrowthLabs Invitee',
        type: 'Enterprise Consultant Addition',
        docs: 'Internal dossier',
        submittedAt: 'Jan 18, 2025',
        status: 'rejected',
        risk: 'High',
        docPreview: 'https://placehold.co/320x200?text=Rejected+Doc',
        formData: [
          { label: 'Full Name', value: 'Rohit Kumar' },
          { label: 'ID Number', value: 'BDTPK7711Q' },
          { label: 'Role', value: 'Growth Advisor' },
        ],
        rejectionReason: 'Image too blurry. Please re-upload a clear ID scan.',
      },
    ],
  }

  const enterpriseInsights = [
    { label: 'Enterprise Revenue (MTD)', value: '₹18.2M', trend: '+12%', icon: BanknotesIcon },
    { label: 'Consultants Onboarded', value: '486', trend: '+42', icon: UsersIcon },
    { label: 'Active Enterprises', value: '64', trend: '+5', icon: BuildingOffice2Icon },
    { label: 'Session Success Rate', value: '97.4%', trend: '+0.8%', icon: ArrowTrendingUpIcon },
  ]

  const transactions = [
    { id: '#TX-91234', from: 'Ananya Rao', to: 'Dr. Priya Nair', amount: '₹9,500', fee: '₹950', status: 'Success' },
    { id: '#TX-91212', from: 'Raghav Shah', to: 'Rajesh Kumar', amount: '₹6,000', fee: '₹600', status: 'Success' },
    { id: '#TX-91198', from: 'Maria Lewis', to: 'Sarah Johnson', amount: '₹7,200', fee: '₹720', status: 'Failed' },
  ]

  const payoutRequests = [
    { consultant: 'Dr. Priya Nair', bank: 'HDFC • 1234', amount: '₹1,20,000', status: 'Pending' },
    { consultant: 'Rajesh Kumar', bank: 'ICICI • 5566', amount: '₹78,500', status: 'Awaiting docs' },
    { consultant: 'Sarah Johnson', bank: 'SBI • 7865', amount: '₹92,000', status: 'Pending' },
  ]

  const sessionHistory = [
    { id: '#S-8721', participants: 'Ananya ↔ Priya', duration: '60 min', timestamp: 'Today, 10:00 AM' },
    { id: '#S-8714', participants: 'Raghav ↔ Rajesh', duration: '45 min', timestamp: 'Today, 09:00 AM' },
    { id: '#S-8708', participants: 'Maria ↔ Sarah', duration: '30 min', timestamp: 'Yesterday, 7:30 PM' },
  ]

  const notifications = [
    { title: 'Consultant invited to join enterprise', details: 'Acme Consulting invited Priya Kapoor • 5 mins ago' },
    { title: 'Enterprise account verified', details: 'Northwind Analytics cleared all compliance checks • 32 mins ago' },
    { title: 'Enterprise consultant added', details: 'GrowthLabs added 8 consultants to the roster • 1 hour ago' },
    { title: 'Enterprise consultant removed', details: 'Everest Partners offboarded Rahul Menon • 2 hours ago' },
  ]

  const lifecycle = [
    {
      title: 'Individual Consultant',
      steps: [
        'Signup → Select Individual → Upload KYC docs',
        'Admin verifies credentials & releases the profile',
        'Consultant receives bookings and hosts sessions',
        'Earnings accrue → withdrawals initiated by consultant',
        'Manages personal profile, availability, and payouts',
      ],
    },
    {
      title: 'Enterprise Consultant',
      steps: [
        'Signup → Select Enterprise → Upload business docs',
        'Create Enterprise Admin profile',
        'Invite internal consultants',
        'Admin verifies',
        'Company gets bookings',
        'Sessions happen via team members',
        'Company receives earnings → withdraws',
        'Manages branding, team, and pricing',
      ],
    },
  ]

  const badgeStatuses = [
    { enterprise: 'Northwind Analytics', badge: 'VERIFIED BUSINESS', status: 'Active', lastAudit: '7 days ago' },
    { enterprise: 'GrowthLabs', badge: 'GOLD PARTNER', status: 'Audit due', lastAudit: '42 days ago' },
    { enterprise: 'Everest Partners', badge: 'PREMIUM AGENCY', status: 'Under review', lastAudit: 'Pending' },
  ]

  const disputeCases = [
    {
      id: '#D-2187',
      enterprise: 'Acme Consulting',
      complaint: 'Consultant did not show up',
      evidence: 'No WebRTC connection logs for consultant, user joined.',
      sla: '04h 12m remaining',
      severity: 'High',
    },
    {
      id: '#D-2191',
      enterprise: 'GrowthLabs',
      complaint: 'Refund escalation • audio issues reported',
      evidence: 'Packet loss observed, consultant online for 6 min.',
      sla: '12h 05m remaining',
      severity: 'Medium',
    },
    {
      id: '#D-2204',
      enterprise: 'Everest Partners',
      complaint: 'Consultant reassignment dispute',
      evidence: 'Team lead reassigned 10 min before call.',
      sla: '20h 44m remaining',
      severity: 'Low',
    },
  ]

  const settingsOptions = [
    {
      title: 'Domains & Categories',
      description: 'Add/Edit/Delete areas like “Mental Health”, “Legal Advice”.',
      cta: 'Manage Categories',
    },
    {
      title: 'Commissions',
      description: 'Set global platform fee (currently 10%).',
      cta: 'Update Fee',
    },
    {
      title: 'Homepage Banners',
      description: 'Upload hero carousel images and CTAs for the landing page.',
      cta: 'Edit Banners',
    },
  ]

  const activeVerificationList = verificationCenter[verificationTab]
  const activeVerification =
    activeVerificationList[activeVerificationIndex] ?? activeVerificationList[0] ?? null

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-hero-sheen blur-3xl opacity-60" />
      <div className="relative">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl">
          <div className="flex w-full flex-wrap items-center gap-4 px-6 py-4">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="rounded-xl bg-brand text-white px-4 py-2 text-sm font-semibold">CW</div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-slate-400">Consultation</p>
                <p className="text-base font-semibold text-slate-700">Web Application</p>
              </div>
            </Link>
            <div className="ml-auto flex items-center gap-3 text-sm">
              <Link
                to="/dashboard"
                className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-600 transition hover:text-slate-900"
              >
                User Dashboard
              </Link>
              <button className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 font-semibold text-white transition hover:bg-slate-800">
                <BellAlertIcon className="h-5 w-5" />
                Alerts
              </button>
            </div>
          </div>
        </header>

        <main className="w-full px-6 pb-24 pt-16 space-y-16">
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Dashboard</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Platform health at a glance</h2>
              </div>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Export KPI report
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{stat.meta}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Action Required</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {actionItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-sm text-slate-900">{item.label}</p>
                    <button className="mt-3 text-xs font-semibold text-brand">{item.action}</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">User management</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Search. Filter. Ban when needed.</h2>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                {(['clients', 'consultants', 'enterprises'] as UserTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveUserTab(tab)}
                    className={`rounded-full px-4 py-2 transition ${
                      activeUserTab === tab
                        ? 'bg-slate-900 text-white'
                        : 'border border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-lg shadow-slate-200/60">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <input
                  type="text"
                  placeholder="Search name, email, domain..."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 lg:max-w-sm"
                />
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Export list
                </button>
              </div>
              <div className="mt-4 overflow-auto">
                <table className="min-w-full text-left text-sm text-slate-700">
                  <thead>
                    {activeUserTab === 'clients' && (
                      <tr>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Name</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Email</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Join Date</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Status</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500 text-right">Action</th>
                      </tr>
                    )}
                    {activeUserTab === 'consultants' && (
                      <tr>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Name</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Domain</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Rating</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Total Earnings</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500 text-right">Action</th>
                      </tr>
                    )}
                    {activeUserTab === 'enterprises' && (
                      <tr>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Company</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Representative</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500">Consultants</th>
                        <th className="py-3 pr-4 font-semibold text-slate-500 text-right">Action</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {activeUserTab === 'clients' &&
                      userDirectory.clients.map((user) => (
                        <tr key={user.email} className="border-t border-slate-100">
                          <td className="py-3 pr-4 font-semibold text-slate-900">{user.name}</td>
                          <td className="py-3 pr-4 text-slate-600">{user.email}</td>
                          <td className="py-3 pr-4 text-slate-600">{user.joined}</td>
                          <td className="py-3 pr-4">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                user.status === 'Active'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-rose-100 text-rose-700'
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-right">
                            <button className="text-sm font-semibold text-rose-600 hover:text-rose-800">
                              Ban user
                            </button>
                          </td>
                        </tr>
                      ))}
                    {activeUserTab === 'consultants' &&
                      userDirectory.consultants.map((consultant) => (
                        <tr key={consultant.name} className="border-t border-slate-100">
                          <td className="py-3 pr-4 font-semibold text-slate-900">{consultant.name}</td>
                          <td className="py-3 pr-4 text-slate-600">{consultant.domain}</td>
                          <td className="py-3 pr-4 text-slate-600">{consultant.rating}</td>
                          <td className="py-3 pr-4 text-slate-600">{consultant.earnings}</td>
                          <td className="py-3 pr-4 text-right space-x-3">
                            <button className="text-sm font-semibold text-brand hover:text-indigo-500">
                              View profile
                            </button>
                            <button className="text-sm font-semibold text-rose-600 hover:text-rose-800">
                              Suspend
                            </button>
                          </td>
                        </tr>
                      ))}
                    {activeUserTab === 'enterprises' &&
                      userDirectory.enterprises.map((enterprise) => (
                        <tr key={enterprise.company} className="border-t border-slate-100">
                          <td className="py-3 pr-4 font-semibold text-slate-900">{enterprise.company}</td>
                          <td className="py-3 pr-4 text-slate-600">{enterprise.representative}</td>
                          <td className="py-3 pr-4 text-slate-600">{enterprise.employees}</td>
                          <td className="py-3 pr-4 text-right space-x-3">
                            <button className="text-sm font-semibold text-brand hover:text-indigo-500">
                              Verified badge
                            </button>
                            <button className="text-sm font-semibold text-amber-600 hover:text-amber-800">
                              Gold partner
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Verification Center</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">No consultant goes live without this gate</h2>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                {(['pending', 'approved', 'rejected'] as VerificationTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setVerificationTab(tab)
                      setActiveVerificationIndex(0)
                    }}
                    className={`rounded-full px-4 py-2 transition ${
                      verificationTab === tab
                        ? 'bg-slate-900 text-white'
                        : 'border border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
                <p className="text-sm font-semibold text-slate-900">Queue</p>
                <div className="mt-4 space-y-4 max-h-[420px] overflow-auto pr-2">
                  {activeVerificationList.length === 0 && (
                    <p className="text-sm text-slate-500">Nothing in this bucket right now.</p>
                  )}
                  {activeVerificationList.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveVerificationIndex(index)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        (activeVerificationList[activeVerificationIndex] ?? activeVerificationList[0])?.id === item.id
                          ? 'border-brand bg-brand/5'
                          : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                      }`}
                    >
                      <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.type}</p>
                      <p className="mt-2 text-xs text-slate-500">Docs: {item.docs}</p>
                      <p className="mt-1 text-[11px] text-slate-400">Submitted {item.submittedAt}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 lg:col-span-2">
                {activeVerification ? (
                  <>
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{activeVerification.name}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{activeVerification.type}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          activeVerification.risk === 'High'
                            ? 'bg-rose-100 text-rose-700'
                            : activeVerification.risk === 'Medium'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {activeVerification.risk} risk
                      </span>
                    </div>
                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                      <div className="space-y-4">
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                          <p className="text-sm font-semibold text-slate-900">Document Preview</p>
                          <img
                            src={activeVerification.docPreview}
                            alt={`${activeVerification.name} documents`}
                            className="mt-3 w-full rounded-xl border border-dashed border-slate-200 object-cover"
                          />
                        </div>
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600">
                          <p className="font-semibold text-slate-900">Verification steps</p>
                          <ol className="mt-2 list-decimal space-y-1 pl-5">
                            <li>Match document data against submitted form.</li>
                            <li>Confirm clarity of upload.</li>
                            <li>Approve or reject with reason.</li>
                          </ol>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                          <p className="text-sm font-semibold text-slate-900">Submitted data</p>
                          <dl className="mt-3 space-y-2 text-sm text-slate-600">
                            {activeVerification.formData.map((field) => (
                              <div key={field.label}>
                                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">{field.label}</dt>
                                <dd className="text-sm font-semibold text-slate-900">{field.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                        {verificationTab !== 'approved' && (
                          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <p className="text-sm font-semibold text-slate-900">Decision</p>
                            {verificationTab === 'rejected' && activeVerification.rejectionReason ? (
                              <p className="mt-3 text-sm text-rose-700">{activeVerification.rejectionReason}</p>
                            ) : (
                              <textarea
                                className="mt-3 w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                                rows={3}
                                placeholder="Add rejection reason (optional)"
                              />
                            )}
                            <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold">
                              <button className="rounded-full border border-green-200 px-4 py-2 text-green-700 hover:bg-green-50">
                                Approve
                              </button>
                              <button className="rounded-full border border-rose-200 px-4 py-2 text-rose-700 hover:bg-rose-50">
                                Reject
                              </button>
                              <button className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50">
                                View audit trail
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-slate-500">Select a record to review details.</p>
                )}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-lg shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Financial management</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">Transactions</h2>
                </div>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Download CSV
                </button>
              </div>
              <div className="mt-4 space-y-3">
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-semibold text-slate-900">{tx.id}</p>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          tx.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {tx.status}
                      </span>
                    </div>
                    <p className="mt-1">
                      {tx.from} → {tx.to}
                    </p>
                    <p className="mt-1">Amount: {tx.amount}</p>
                    <p className="text-xs text-slate-500">Platform fee: {tx.fee}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-lg shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Financial management</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">Payout requests</h2>
                </div>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  Configure Razorpay
                </button>
              </div>
              <div className="mt-4 space-y-4">
                {payoutRequests.map((request) => (
                  <div key={request.consultant} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{request.consultant}</p>
                    <p className="text-sm text-slate-600">{request.bank}</p>
                    <p className="mt-2 text-sm text-slate-600">Amount: {request.amount}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                      <button className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:bg-slate-50">
                        View bank proof
                      </button>
                      <button className="rounded-full border border-green-200 px-3 py-1 text-green-700 hover:bg-green-50">
                        Mark as paid
                      </button>
                      <span
                        className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${
                          request.status === 'Pending'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Enterprise Insights</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Platform-level telemetry</h2>
              </div>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Export Report
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {enterpriseInsights.map((insight) => {
                const Icon = insight.icon
                return (
                  <div key={insight.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">{insight.label}</p>
                        <p className="mt-2 text-3xl font-semibold text-slate-900">{insight.value}</p>
                      </div>
                      <div className="rounded-2xl bg-brand/10 p-3">
                        <Icon className="h-6 w-6 text-brand" />
                      </div>
                    </div>
                    <p className="mt-3 text-xs font-semibold text-green-600">{insight.trend} vs last cycle</p>
                  </div>
                )
              })}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-lg shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Notifications</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">Enterprise activity feed</h2>
                </div>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Manage Alerts
                </button>
              </div>
              <div className="mt-6 space-y-4">
                {notifications.map((note) => (
                  <div key={note.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-900">{note.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{note.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-lg shadow-slate-200/60">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Enterprise SLA & Policies</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Policy toolkit</h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-brand" />
                  Configure enterprise-level SLAs for support, payouts, and onboarding.
                </li>
                <li className="flex items-center gap-3">
                  <DocumentCheckIcon className="h-5 w-5 text-brand" />
                  Automate reminders for expiring business documents and compliance renewals.
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheckIcon className="h-5 w-5 text-brand" />
                  Trigger badge revocation workflows when SLAs breach thresholds.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-lg shadow-slate-200/60">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Session oversight</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Recent calls</h2>
              <div className="mt-4 space-y-4">
                {sessionHistory.map((session) => (
                  <div key={session.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{session.participants}</p>
                      <span className="text-xs text-slate-500">{session.timestamp}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">Duration: {session.duration}</p>
                    <div className="mt-3 flex gap-2 text-xs font-semibold">
                      <button className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:bg-slate-50">
                        View logs
                      </button>
                      <button className="rounded-full border border-brand/30 px-3 py-1 text-brand hover:bg-brand/5">
                        Open recording
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white px-6 py-6 shadow-lg shadow-slate-200/60">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Dispute manager</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Quality control</h2>
              <div className="mt-4 space-y-4">
                {disputeCases.map((dispute) => (
                  <div key={dispute.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{dispute.complaint}</p>
                        <p className="text-xs text-slate-500">
                          {dispute.id} • {dispute.enterprise}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          dispute.severity === 'High'
                            ? 'bg-rose-100 text-rose-700'
                            : dispute.severity === 'Medium'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {dispute.severity}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">SLA: {dispute.sla}</p>
                    <p className="mt-2 text-sm text-slate-600">Evidence: {dispute.evidence}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                      <button className="rounded-full border border-slate-200 px-3 py-1 text-slate-700 hover:bg-slate-50">
                        View evidence
                      </button>
                      <button className="rounded-full border border-amber-200 px-3 py-1 text-amber-700 hover:bg-amber-50">
                        Assign reviewer
                      </button>
                      <button className="rounded-full border border-green-200 px-3 py-1 text-green-700 hover:bg-green-50">
                        Refund user
                      </button>
                      <button className="rounded-full border border-brand/30 px-3 py-1 text-brand hover:bg-brand/5">
                        Release payment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-lg shadow-slate-200/60">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">Enterprise badges</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Status & audits</h2>
              <div className="mt-6 space-y-4">
                {badgeStatuses.map((badge) => (
                  <div key={badge.enterprise} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{badge.enterprise}</p>
                        <p className="text-xs text-slate-500">{badge.badge}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          badge.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : badge.status === 'Audit due'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {badge.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-500">Last audit: {badge.lastAudit}</p>
                    <button className="mt-3 text-xs font-semibold text-brand">Manage badge</button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Settings & configuration</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">CMS controls for static content</h2>
              </div>
              <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Open CMS
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {settingsOptions.map((setting) => (
                <div key={setting.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900">{setting.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{setting.description}</p>
                  <button className="mt-4 text-sm font-semibold text-brand">{setting.cta}</button>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-soft">End-to-end lifecycle</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Simplified consultant journeys</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {lifecycle.map((flow) => (
                <div key={flow.title} className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-lg shadow-slate-200/60">
                  <h3 className="text-xl font-semibold text-slate-900">{flow.title}</h3>
                  <ol className="mt-6 space-y-4 text-sm text-slate-600">
                    {flow.steps.map((step) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AdminPage


