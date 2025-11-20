import React, { useState } from 'react'

const InquiryForm = () => {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      event_date: form.get('event_date'),
      guests: Number(form.get('guests')),
      location: form.get('location'),
      event_type: form.get('event_type'),
      message: form.get('message') || ''
    }

    try {
      const res = await fetch(`${backend}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
      setError('Senden fehlgeschlagen. Bitte später erneut versuchen.')
    }
  }

  return (
    <section id="inquiry" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Termin anfragen</h2>
        <p className="text-zinc-300 mb-8">Sag uns kurz Datum, Ort und Gästezahl – wir melden uns mit einem Angebot.</p>
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
          <input name="name" required minLength={2} placeholder="Name" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white" />
          <input name="email" type="email" required placeholder="E-Mail" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white" />
          <input name="phone" required placeholder="Telefon" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white" />
          <input name="event_date" required placeholder="Event-Datum" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white" />
          <input name="guests" type="number" min={1} required placeholder="Gästezahl" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white" />
          <input name="location" required placeholder="Ort / Location" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white" />
          <select name="event_type" required className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white md:col-span-2">
            <option value="">Event-Typ wählen</option>
            <option>Hochzeit</option>
            <option>Firmenfeier</option>
            <option>Geburtstag</option>
            <option>Privates Event</option>
          </select>
          <textarea name="message" rows="4" placeholder="Nachricht (optional)" className="px-4 py-3 rounded-lg bg-zinc-900/60 border border-white/10 text-white md:col-span-2" />
          <button disabled={status==='sending'} className="md:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
            {status === 'sending' ? 'Wird gesendet…' : 'Anfrage senden'}
          </button>
          {status === 'success' && <p className="md:col-span-2 text-green-400">Danke! Wir melden uns schnellstmöglich.</p>}
          {status === 'error' && <p className="md:col-span-2 text-red-400">{error}</p>}
        </form>
      </div>
    </section>
  )
}

export default InquiryForm
