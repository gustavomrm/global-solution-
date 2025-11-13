import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-neutral-50 via-accent-white to-neutral-50 py-3xl md:py-[5rem] px-md md:px-lg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-3xl items-center">
        {/* Conteúdo */}
        <div className="space-y-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Prepare-se para o <span className="text-primary-500">Futuro do Trabalho</span>
          </h1>
          
          <p className="text-lg text-neutral-600 leading-relaxed">
            Com IA e aprendizado personalizado, transforme sua carreira. Receba recomendações baseadas em seu perfil e conquiste as competências do amanhã.
          </p>

          <div className="flex flex-col sm:flex-row gap-md pt-md">
            <Link
              to="/perfil"
              className="px-2xl py-3 rounded-lg bg-primary-500 text-accent-white font-semibold hover:bg-primary-600 transition text-center"
            >
              Começar Agora →
            </Link>
            <button className="px-2xl py-3 rounded-lg border-2 border-primary-500 text-primary-500 font-semibold hover:bg-primary-50 transition">
              Saber Mais
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-md pt-lg border-t border-neutral-200">
            <div>
              <p className="text-2xl font-bold text-primary-500">10K+</p>
              <p className="text-sm text-neutral-600">Pessoas requalificadas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary-500">500+</p>
              <p className="text-sm text-neutral-600">Trilhas de aprendizado</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary-600">99%</p>
              <p className="text-sm text-neutral-600">Satisfação dos usuários</p>
            </div>
          </div>
        </div>

        {/* Ilustração / Imagem */}
        <div className="hidden md:block">
          <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center overflow-hidden">
            {/* Placeholder para ilustração futura */}
            <svg className="w-3/4 h-3/4 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            
            {/* Elementos decorativos */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-secondary-200 rounded-full opacity-50"></div>
            <div className="absolute bottom-10 left-6 w-16 h-16 bg-primary-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
