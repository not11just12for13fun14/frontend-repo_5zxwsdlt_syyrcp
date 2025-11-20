import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-900/30 via-zinc-900 to-zinc-900" />
      <div className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 bg-red-500/40" />
      <div className="container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs tracking-widest uppercase text-red-300/90 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full mb-4">Mobiler Pizzaofen • Live gebacken</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Pizza Catering Vorarlberg – neapolitanische Pizza für dein Event
            </h1>
            <p className="mt-5 text-lg text-zinc-300">
              Vivo bringt den Holzofen direkt zu Hochzeiten, Firmenfeiern, Geburtstagen und privaten Events – in Bregenz, Dornbirn, Feldkirch, Bludenz, Montafon und dem Bregenzerwald.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#inquiry" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">Termin anfragen</a>
              <a href="#menu" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white font-semibold hover:bg-white/20 transition">Menü ansehen</a>
            </div>
            <p className="mt-4 text-sm text-zinc-400">Beliebt für: Pizza Hochzeit Vorarlberg • Firmenfeiern • Sommerfeste</p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center shadow-2xl ring-1 ring-white/10" />
            <div className="absolute -bottom-5 -left-5 bg-zinc-900/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-200">Pizza Eventservice • Neapolitan Style</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
