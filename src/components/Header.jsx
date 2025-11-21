import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-accent-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-md py-4 flex items-center justify-between md:px-lg">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center text-accent-white font-bold">
            AI
          </div>
          <span className="text-xl font-bold text-primary-600 hidden sm:inline">ReSkillAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-lg">
          <Link to="/" className="text-sm font-medium text-neutral-900 hover:text-primary-500 transition">
            Início
          </Link>
          <Link to="/trilhas" className="text-sm font-medium text-neutral-900 hover:text-primary-500 transition">
            Trilhas
          </Link>
          <Link to="/sobre" className="text-sm font-medium text-neutral-900 hover:text-primary-500 transition">
            Sobre
          </Link>
          <Link
            to="/login"
            className="px-lg py-2 rounded-md bg-primary-500 text-accent-white text-sm font-medium hover:bg-primary-600 transition"
          >
            Entrar
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-neutral-100 transition"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-neutral-50 border-t border-neutral-200 py-md px-md space-y-2">
          <Link to="/" className="block text-sm font-medium text-neutral-900 hover:text-primary-500 py-2">
            Início
          </Link>
          <Link to="/trilhas" className="block text-sm font-medium text-neutral-900 hover:text-primary-500 py-2">
            Trilhas
          </Link>
          <Link to="/sobre" className="block text-sm font-medium text-neutral-900 hover:text-primary-500 py-2">
            Sobre
          </Link>
          <Link
            to="/login"
            className="block w-full px-lg py-2 rounded-md bg-primary-500 text-accent-white text-sm font-medium hover:bg-primary-600 transition text-center"
          >
            Entrar
          </Link>
        </nav>
      )}
    </header>
  )
}
