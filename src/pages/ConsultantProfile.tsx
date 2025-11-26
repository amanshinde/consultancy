import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon, ChatBubbleLeftRightIcon, StarIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

type ChatMessage = {
  from: 'consultant' | 'user'
  text: string
  time: string
}

const CONSULTANTS = [
  {
    id: 'priya-nair',
    name: 'Dr. Priya Nair',
    title: 'Product Strategy & GTM Advisor',
    domain: 'Product Strategy & GTM',
    rating: 4.96,
    sessions: 128,
    price: '₹6,500/session',
    bio: 'Helps SaaS and D2C teams design GTM, pricing, and expansion plays that actually ship.',
    languages: ['English', 'Hindi'],
    tags: ['GTM', 'Pricing', 'SaaS', 'B2C'],
    availability: 'Available today',
  },
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    title: 'Performance & Growth Marketer',
    domain: 'Digital Marketing',
    rating: 4.8,
    sessions: 96,
    price: '₹4,500/session',
    bio: 'Works with early and growth-stage brands to scale paid and organic channels sustainably.',
    languages: ['English', 'Hindi', 'Tamil'],
    tags: ['Performance ads', 'Funnels', 'CRO'],
    availability: 'Available tomorrow',
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Financial Planning & Cashflow Coach',
    domain: 'Financial Planning',
    rating: 4.9,
    sessions: 74,
    price: '₹5,500/session',
    bio: 'Helps founders and working professionals build resilient financial systems and habits.',
    languages: ['English'],
    tags: ['Wealth', 'Cashflow', 'Risk'],
    availability: 'Available this week',
  },
]

function ConsultantProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: 'consultant',
      text: 'Hi! Share a quick context of your challenge so I can tailor the session.',
      time: 'Just now',
    },
  ])
  const [draft, setDraft] = useState('')

  const consultant = CONSULTANTS.find((c) => c.id === id) ?? CONSULTANTS[0]

  const handleSend = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [...prev, { from: 'user', text, time: 'Just now' }])
    setDraft('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50/40 to-indigo-50/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.08),_transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(79,70,229,0.07),_transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-sky-100/60 bg-white/70 px-4 py-4 shadow-sm rounded-2xl mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1 rounded-lg border border-sky-100 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 hover:bg-sky-50"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back
            </button>
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-sky-600/70">Consultant profile</p>
              <h1 className="text-xl font-semibold text-slate-900">{consultant.name}</h1>
            </div>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 hover:shadow-lg">
            Book session
          </button>
        </header>

        <main className="grid flex-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <section className="space-y-4 rounded-2xl border border-sky-100/70 bg-white/90 px-6 py-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-sm font-semibold text-white">
                {consultant.name
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-900">{consultant.name}</h2>
                <p className="text-sm text-slate-600">{consultant.title}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-amber-400" /> {consultant.rating} ({consultant.sessions} sessions)
                  </span>
                  <span>{consultant.domain}</span>
                  <span>{consultant.languages.join(', ')}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700">{consultant.bio}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {consultant.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {consultant.availability}
              </span>
              <span className="font-semibold text-slate-900">{consultant.price}</span>
            </div>

            <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50/80 px-4 py-3 text-xs text-slate-600">
              <p className="font-semibold text-slate-800">How this works</p>
              <p className="mt-1">
                Share context in chat, align on expectations, then confirm a slot. Payments and video links stay inside the
                platform.
              </p>
            </div>
          </section>

          <section className="flex flex-col rounded-2xl border border-sky-100/70 bg-white/90 px-4 py-4 shadow-md">
            <header className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-sky-500" />
                Chat with {consultant.name.split(' ')[0]}
              </div>
              <VideoCameraIcon className="h-5 w-5 text-sky-400" />
            </header>

            <div className="flex-1 space-y-2 overflow-y-auto rounded-xl border border-sky-50 bg-slate-50 px-3 py-3 text-xs text-slate-700">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                      msg.from === 'user'
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white'
                        : 'bg-white border border-sky-100 text-slate-800'
                    }`}
                  >
                    <p className="text-[11px] leading-snug">{msg.text}</p>
                    <p className={`mt-1 text-[10px] ${msg.from === 'user' ? 'text-sky-100/80' : 'text-slate-400'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Say hi and share a quick context..."
                className="flex-1 rounded-lg border border-sky-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-sky-600/60 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
              />
              <button
                onClick={handleSend}
                className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm shadow-sky-500/30 hover:shadow-md"
              >
                Send
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default ConsultantProfile
