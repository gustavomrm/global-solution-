import React from 'react'

export default function ComoFunciona() {
  const steps = [
    {
      numero: '01',
      titulo: 'Informe seu Perfil',
      descricao: 'Responda um breve questionário sobre sua profissão, habilidades e interesses de carreira.',
      icone: '👤'
    },
    {
      numero: '02',
      titulo: 'Receba Recomendações',
      descricao: 'Nossa IA analisa seu perfil e recomenda trilhas de aprendizado personalizadas para você.',
      icone: '🤖'
    },
    {
      numero: '03',
      titulo: 'Aprenda e Evolua',
      descricao: 'Acompanhe seu progresso, conquiste competências e transforme sua carreira com confiança.',
      icone: '📈'
    }
  ]

  return (
    <section className="py-3xl px-md md:px-lg bg-accent-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-md">Como Funciona</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Três passos simples para começar sua transformação profissional
          </p>
        </div>

        {/* Cards de Passos */}
        <div className="grid md:grid-cols-3 gap-2xl">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Card */}
              <div className="bg-neutral-50 rounded-xl p-2xl border border-neutral-200 hover:border-primary-300 transition h-full">
                {/* Número */}
                <div className="text-5xl font-bold text-primary-200 mb-md">{step.numero}</div>
                
                {/* Ícone */}
                <div className="text-5xl mb-lg">{step.icone}</div>

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.titulo}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.descricao}</p>
              </div>

              {/* Seta (desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-12 top-1/2 transform -translate-y-1/2 text-primary-300 text-3xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
