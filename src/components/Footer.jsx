import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [regions, setRegions] = useState([])
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${backend}/regions`).then(r => r.json()).then(setRegions).catch(() => {})
  }, [backend])

  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-white font-semibold text-lg">Vivo – Pizza Eventservice</h3>
            <p className="text-zinc-400 text-sm mt-1">Mobiler Pizzaofen • Pizza Catering Vorarlberg</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400 text-sm">Regionen: {regions.join(' • ')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
