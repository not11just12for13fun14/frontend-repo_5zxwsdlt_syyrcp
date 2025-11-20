import React, { useState } from 'react'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="px-6 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
            {subtitle && <p className="mt-3 text-gray-600 text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-white to-white"></div>
      <header className="px-6 md:px-10 lg:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tight">Vivo</span>
          <span className="px-2 py-1 text-xs rounded-full bg-rose-100 text-rose-700">Pizza Eventservice</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#leistungen" className="hover:text-rose-600">Leistungen</a>
          <a href="#menu" className="hover:text-rose-600">Menü</a>
          <a href="#bewertungen" className="hover:text-rose-600">Bewertungen</a>
          <a href="#faq" className="hover:text-rose-600">FAQ</a>
          <a href="#anfrage" className="font-semibold text-rose-700">Termin anfragen</a>
        </nav>
      </header>

      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Pizza Catering in Vorarlberg – frisch, schnell, neapolitanisch.
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Wir kommen mit mobilem Pizzaofen zu eurer Hochzeit, Firmenfeier, Geburtstag oder privatem Event – und backen
              Live-Pizza wie in Neapel. Regional, flexibel und mega lecker.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#anfrage" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition">
                Termin anfragen
              </a>
              <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:border-gray-400 transition">
                Menü ansehen
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Regionen: Bregenz • Dornbirn • Feldkirch • Bludenz • Montafon • Bregenzerwald
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
            <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur rounded-xl p-4 shadow">
              <p className="text-sm font-semibold">Live vor Ort gebacken</p>
              <p className="text-xs text-gray-600">Mobiler Pizzaofen • Team aus Vorarlberg</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

function Leistungen() {
  const items = [
    { title: 'Hochzeiten', desc: 'Italienisches Highlight für euren großen Tag.' },
    { title: 'Firmenfeiern', desc: 'Schnell, sauber, professionell – ohne Stress.' },
    { title: 'Geburtstage', desc: 'Vom Kindergeburtstag bis zur Gartenparty.' },
    { title: 'Private Events', desc: 'Individuelle Pakete, flexibel in ganz Vorarlberg.' },
  ]
  return (
    <Section id="leistungen" title="Leistungen" subtitle="Pizza-Catering für Hochzeiten, Firmenfeiern, Geburtstage und private Events in Vorarlberg.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 rounded-2xl border border-gray-200 shadow-sm bg-white">
            <h3 className="font-bold text-lg">{it.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Menu() {
  const klassiker = ['Margherita', 'Marinara', 'Prosciutto', 'Salami', 'Funghi']
  const premium = ['Bufala & Basilikum', 'Trüffel Creme & Speck', 'Salsiccia & Friarielli', 'Pistazien-Pesto & Mortadella', 'Vegane Gemüse-Pinsa']
  return (
    <Section id="menu" title="Menü" subtitle="Klassiker & Premium-Pizzen – luftig, knusprig, 48h-Teig.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl border border-gray-200 bg-white">
          <h3 className="font-bold text-xl">Klassiker</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            {klassiker.map(p => <li key={p}>• {p}</li>)}
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 bg-white">
          <h3 className="font-bold text-xl">Premium</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            {premium.map(p => <li key={p}>• {p}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Bewertungen() {
  const reviews = [
    { name: 'Lisa & Martin (Hochzeit in Dornbirn)', text: 'Beste Entscheidung! Unsere Gäste reden immer noch von der Pizza.' },
    { name: 'Tech GmbH (Firmenfeier in Bregenz)', text: 'Super schnell, super lecker, super Team – 100% Empfehlung.' },
    { name: 'Jonas (Geburtstag in Feldkirch)', text: 'Tolles Setup mit mobilem Ofen. Mega Stimmung und Geschmack!'}
  ]
  return (
    <Section id="bewertungen" title="Bewertungen" subtitle="Echte Rückmeldungen aus Vorarlberg – Social Proof für euer Event.">
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map(r => (
          <div key={r.name} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
            <p className="text-gray-700">“{r.text}”</p>
            <p className="mt-3 text-sm font-semibold text-gray-900">{r.name}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Was kostet das Pizza-Catering?', a: 'Abhängig von Gästeanzahl, Dauer und Auswahl. Sende uns eine kurze Anfrage – wir schicken ein fixes Angebot.' },
    { q: 'Wie viele Gäste sind möglich?', a: 'Von 30 bis 300 Personen – wir skalieren Team und Ofen-Setup passend zu eurem Event.' },
    { q: 'Wie läuft die Anfahrt?', a: 'Wir kommen mit mobilem Ofen zu allen Locations in Vorarlberg: Bregenz, Dornbirn, Feldkirch, Bludenz, Montafon, Bregenzerwald.' },
    { q: 'Vegetarisch/vegan möglich?', a: 'Ja, selbstverständlich. Auf Wunsch auch laktosefrei und mit glutenarmen Optionen.' },
    { q: 'Wie geht ihr mit Allergenen um?', a: 'Wir kennzeichnen alle Pizzen transparent und beraten euch vorab zu Allergenen.' },
  ]
  return (
    <Section id="faq" title="FAQ" subtitle="Alles Wichtige zu Preisen, Gästeanzahl, Anfahrt und Ernährung.">
      <div className="space-y-4">
        {faqs.map(f => (
          <details key={f.q} className="group border border-gray-200 rounded-xl p-4 bg-white">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="font-semibold text-gray-900">{f.q}</span>
              <span className="text-rose-600">+</span>
            </summary>
            <p className="mt-3 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

function InquiryForm() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', event_date: '', guests: '', location: '', event_type: 'Hochzeit', message: ''
  })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backendUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: Number(form.guests) })
      })
      const data = await res.json()
      if (data.status === 'ok') setStatus('success')
      else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <Section id="anfrage" title="Termin anfragen" subtitle="Unverbindlich anfragen – wir melden uns innerhalb von 24 Stunden mit einem Angebot.">
      <form onSubmit={submit} className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-gray-200">
        <input required placeholder="Name" className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input required type="email" placeholder="E-Mail" className="input" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input required placeholder="Telefon" className="input" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
        <input required type="date" placeholder="Event-Datum" className="input" value={form.event_date} onChange={e=>setForm({...form,event_date:e.target.value})} />
        <input required type="number" placeholder="Gästeanzahl" className="input" value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})} />
        <input required placeholder="Ort/Location" className="input" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} />
        <select className="input" value={form.event_type} onChange={e=>setForm({...form,event_type:e.target.value})}>
          <option>Hochzeit</option>
          <option>Firmenfeier</option>
          <option>Geburtstag</option>
          <option>Privates Event</option>
        </select>
        <textarea placeholder="Nachricht (optional)" className="input md:col-span-2" rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        <button className="md:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold shadow hover:bg-rose-700 transition">
          {status === 'sending' ? 'Wird gesendet…' : 'Anfrage senden'}
        </button>
        {status === 'success' && <p className="md:col-span-2 text-green-700">Danke! Wir melden uns in Kürze.</p>}
        {status === 'error' && <p className="md:col-span-2 text-red-700">Ups, etwas ist schiefgelaufen. Bitte später erneut versuchen.</p>}
      </form>
      <p className="mt-6 text-sm text-gray-600">SEO: Pizza Catering Vorarlberg • Mobiler Pizzaofen • Pizza Eventservice • Pizza Hochzeit Vorarlberg • Bregenz • Dornbirn • Feldkirch • Bludenz • Montafon • Bregenzerwald</p>
    </Section>
  )
}

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Leistungen />
      <Menu />
      <Bewertungen />
      <FAQ />
      <InquiryForm />
      <footer className="px-6 md:px-10 lg:px-20 py-10 bg-gray-50 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Vivo – Pizza Eventservice Vorarlberg</p>
          <p><a href="#anfrage" className="text-rose-700 font-semibold">Termin anfragen</a></p>
        </div>
      </footer>
    </div>
  )
}
