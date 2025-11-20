import React from 'react'

const classics = ['Margherita', 'Marinara', 'Prosciutto e Funghi', 'Salame', 'Vegetariana']
const premium = ['Burrata & Pesto', 'Trüffel Mortadella', 'Salsiccia & Friarielli', 'Nduja & Honig', 'Parma & Rucola']

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Menü – neapolitanische Pizzen</h2>
        <p className="text-zinc-300 mb-8">Klassiker und Premium-Pizzen – frisch, schnell, live gebacken im mobilen Pizzaofen.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Klassiker</h3>
            <ul className="space-y-2 text-zinc-300 list-disc list-inside">
              {classics.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-3">Premium</h3>
            <ul className="space-y-2 text-zinc-300 list-disc list-inside">
              {premium.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
