import React from 'react'

const levelColors = {
  iniciante: { bg: 'bg-green-50', badge: 'bg-secondary-500', text: 'text-secondary-700' },
  intermediario: { bg: 'bg-blue-50', badge: 'bg-primary-500', text: 'text-primary-700' },
  avancado: { bg: 'bg-purple-50', badge: 'bg-purple-500', text: 'text-purple-700' }
}

export default function CardTrilha({ trilha }) {
  const colors = levelColors[trilha.nivel?.toLowerCase()] || levelColors.iniciante

  return (
    <article className={`${colors.bg} rounded-lg p-lg shadow-md hover:shadow-lg transition border border-neutral-200`}>
      {/* Header com Badge */}
      <div className="flex items-start justify-between mb-md">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-neutral-900 mb-2">{trilha.titulo}</h3>
          <p className="text-sm text-neutral-600">{trilha.descricao}</p>
        </div>
        <span className={`${colors.badge} text-accent-white text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-md`}>
          {trilha.nivel}
        </span>
      </div>

      {/* Área de Conhecimento */}
      <div className="mb-lg">
        <span className="text-xs font-medium text-neutral-600 bg-neutral-200 text-neutral-700 px-2 py-1 rounded">
          {trilha.area}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-neutral-700">Progresso</span>
          <span className="text-xs font-bold text-neutral-900">{trilha.progresso}%</span>
        </div>
        <div className="h-2 bg-neutral-300 rounded-full overflow-hidden">
          <div
            style={{ width: `${trilha.progresso}%` }}
            className="h-full bg-gradient-to-r from-secondary-500 to-primary-500 transition-all duration-500"
          />
        </div>
      </div>

      {/* Duração e Pontos */}
      <div className="flex gap-md text-sm mb-lg">
        <span className="text-neutral-600">⏱️ {trilha.duracao}</span>
        <span className="text-neutral-600">⭐ {trilha.pontos} pontos</span>
      </div>

      {/* CTA Button */}
      <button className="w-full px-lg py-2 rounded-md bg-primary-500 text-accent-white text-sm font-semibold hover:bg-primary-600 transition">
        Acessar Trilha
      </button>
    </article>
  )
}
