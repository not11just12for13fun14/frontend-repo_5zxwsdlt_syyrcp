import React from 'react'
import Hero from './components/Hero'
import Leistungen from './components/Leistungen'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Hero />
      <Leistungen />
      <Menu />
      <Reviews />
      <FAQ />
      <InquiryForm />
      <Footer />
    </div>
  )
}

export default App
