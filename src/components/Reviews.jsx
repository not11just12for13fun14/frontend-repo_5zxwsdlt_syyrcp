import React from 'react'

const reviews = [
  { name: 'Lisa, Bregenz', text: 'Unglaublich leckere Pizza! Unsere Hochzeit war dank Vivo ein voller Erfolg.' },
  { name: 'Martin, Dornbirn', text: 'Schnell, professionell, super freundlich – perfekte Firmenfeier!' },
  { name: 'Sandra, Feldkirch', text: 'Unsere Gäste waren begeistert. Vegane Optionen top.' }
]

const Reviews = () => (
  <section id="bewertungen" className="py-20 bg-zinc-950">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Bewertungen</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-zinc-200">
            <p className="text-zinc-300">“{r.text}”</p>
            <p className="mt-4 text-sm text-zinc-400">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Reviews
