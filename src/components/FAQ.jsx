import React from 'react'

const faqs = [
  { q: 'Wie sind die Preise?', a: 'Hängen von Gästezahl, Dauer und Menü ab. Schick uns eine Anfrage – wir senden ein fixes Angebot.' },
  { q: 'Wie viele Gäste könnt ihr versorgen?', a: 'Je nach Setup 50–300+ Gäste. Für große Events kommen wir mit mehreren Öfen.' },
  { q: 'Wie weit fahrt ihr an?', a: 'Ganz Vorarlberg: Bregenz, Dornbirn, Feldkirch, Bludenz, Montafon, Bregenzerwald.' },
  { q: 'Vegetarisch/vegan?', a: 'Ja, mehrere vegetarische und vegane Optionen. Allergene kennzeichnen wir klar.' },
]

const FAQ = () => (
  <section id="faq" className="py-20 bg-zinc-950">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">FAQ</h2>
      <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {faqs.map((f, i) => (
          <details key={i} className="p-6 group">
            <summary className="cursor-pointer list-none text-white font-medium flex items-center justify-between">
              <span>{f.q}</span>
              <span className="ml-4 text-zinc-400 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-zinc-300">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQ
