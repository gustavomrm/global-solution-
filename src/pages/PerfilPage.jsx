import React, { useState } from 'react'
import Footer from '../components/Footer'

export default function PerfilPage() {
  const [formData, setFormData] = useState({
    profissao: '',
    habilidades: '',
    interesses: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Perfil submetido:', formData)
    // Aqui você redirecionaria para o dashboard
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-2xl mx-auto px-md py-3xl md:py-[4rem]">
        {/* Cabeçalho */}
        <div className="text-center mb-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-md">
            Analyze seu Perfil
          </h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">
            Nos conte um pouco sobre você para que possamos recomendar as melhores trilhas de aprendizado
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="bg-accent-white rounded-xl shadow-md p-2xl md:p-3xl">
          {/* Profissão Atual */}
          <div className="mb-2xl">
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Qual é sua profissão atual? *
            </label>
            <input
              type="text"
              name="profissao"
              value={formData.profissao}
              onChange={handleChange}
              placeholder="Ex: Gerente de Projetos, Analista de Dados..."
              className="w-full px-lg py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              required
            />
            <p className="text-xs text-neutral-500 mt-2">Isso nos ajuda a entender seu contexto profissional</p>
          </div>

          {/* Habilidades */}
          <div className="mb-2xl">
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Quais são suas principais habilidades? *
            </label>
            <textarea
              name="habilidades"
              value={formData.habilidades}
              onChange={handleChange}
              placeholder="Ex: Liderança, Comunicação, Programação Python, Excel..."
              rows="4"
              className="w-full px-lg py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
              required
            />
            <p className="text-xs text-neutral-500 mt-2">Separe as habilidades por vírgula</p>
          </div>

          {/* Interesses */}
          <div className="mb-2xl">
            <label className="block text-sm font-semibold text-neutral-900 mb-2">
              Quais são suas áreas de interesse? *
            </label>
            <textarea
              name="interesses"
              value={formData.interesses}
              onChange={handleChange}
              placeholder="Ex: Inteligência Artificial, Gestão de Produtos, Design UX..."
              rows="4"
              className="w-full px-lg py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
              required
            />
            <p className="text-xs text-neutral-500 mt-2">Quais tópicos te interessam para aprender?</p>
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            className="w-full px-2xl py-3 rounded-lg bg-primary-500 text-accent-white font-semibold hover:bg-primary-600 transition text-lg"
          >
            Gerar Minhas Recomendações →
          </button>

          <p className="text-center text-xs text-neutral-500 mt-lg">
            Seus dados serão usados apenas para personalizar sua experiência
          </p>
        </form>
      </div>

      <Footer />
    </div>
  )
}
