import React from 'react'

const items = [
  { title: 'Hochzeiten', desc: 'Elegantes Pizza-Catering für den großen Tag – flexibel für 50 bis 300 Gäste.' },
  { title: 'Firmenfeiern', desc: 'Teambuilding, Sommerfest oder Weihnachtsfeier – schnelle Ausgabe, hohe Kapazität.' },
  { title: 'Geburtstage', desc: 'Unkompliziertes, leckeres Highlight für jedes Alter – inkl. vegetarischer/veganer Optionen.' },
  { title: 'Private Events', desc: 'Gartenparty, Taufe, Jubiläum – wir bringen alles mit: mobiler Pizzaofen, Teig, Beläge.' }
]

const Leistungen = () => {
  return (
    <section id="leistungen" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Unsere Leistungen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 text-zinc-200">
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-zinc-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leistungen
