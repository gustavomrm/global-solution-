import React from 'react'
import HeroSection from '../components/HeroSection'
import ComoFunciona from '../components/ComoFunciona'
import Impacto from '../components/Impacto'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="bg-accent-white">
      <HeroSection />
      <ComoFunciona />
      <Impacto />
      <Footer />
    </div>
  )
}
