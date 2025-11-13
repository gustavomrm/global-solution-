import React from 'react'

export default function Impacto() {
  const testimonials = [
    {
      frase: '"ReSkillAI transformou minha carreira em apenas 3 meses."',
      autor: 'Maria Silva',
      cargo: 'Desenvolvedora Front-End'
    },
    {
      frase: '"A plataforma é intuitiva e o suporte da IA é incrível."',
      autor: 'João Santos',
      cargo: 'Analista de Dados'
    },
    {
      frase: '"Consegui me requalificar sem deixar meu trabalho atual."',
      autor: 'Ana Costa',
      cargo: 'Product Manager'
    }
  ]

  return (
    <section className="py-3xl px-md md:px-lg bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Impacto em Números */}
        <div className="grid md:grid-cols-4 gap-lg mb-3xl text-center">
          <div className="bg-accent-white rounded-lg p-2xl shadow-sm">
            <p className="text-4xl font-bold text-primary-500 mb-2">10.000+</p>
            <p className="text-neutral-600 text-sm">Pessoas requalificadas</p>
          </div>
          <div className="bg-accent-white rounded-lg p-2xl shadow-sm">
            <p className="text-4xl font-bold text-secondary-500 mb-2">500+</p>
            <p className="text-neutral-600 text-sm">Trilhas de aprendizado</p>
          </div>
          <div className="bg-accent-white rounded-lg p-2xl shadow-sm">
            <p className="text-4xl font-bold text-primary-600 mb-2">50+</p>
            <p className="text-neutral-600 text-sm">Áreas de conhecimento</p>
          </div>
          <div className="bg-accent-white rounded-lg p-2xl shadow-sm">
            <p className="text-4xl font-bold text-secondary-600 mb-2">99%</p>
            <p className="text-neutral-600 text-sm">Satisfação</p>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="text-center mb-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-md">O que Nossos Usuários Dizem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-2xl">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-accent-white rounded-lg p-2xl shadow-md border-l-4 border-primary-500">
              <p className="text-neutral-700 italic mb-lg text-sm leading-relaxed">{test.frase}</p>
              <div className="flex items-center gap-md pt-md border-t border-neutral-200">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                  {test.autor[0]}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-neutral-900 text-sm">{test.autor}</p>
                  <p className="text-xs text-neutral-600">{test.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
