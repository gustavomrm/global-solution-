import React from 'react'
import Footer from '../components/Footer'

export default function SobrePage() {
  const equipe = [
    { nome: 'Luiz Guedes', rm: 'RM 565843', bio: 'Desenvolvimento Front-End' },
    { nome: 'Gustavo Mendes', rm: 'RM 565807', bio: 'Desenvolvimento Full-Stack' },
    { nome: 'Enzo Ricarte', rm: 'RM 566053', bio: 'Design e UX/UI' }
  ]

  return (
    <div className="min-h-screen bg-accent-white">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary-50 to-accent-white py-3xl px-md md:px-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-md">
            Sobre a <span className="text-primary-500">ReSkillAI</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Uma plataforma de requalificação profissional que une inteligência artificial e educação personalizada.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-md py-3xl md:px-lg">
        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-2xl mb-3xl">
          <div className="bg-neutral-50 rounded-lg p-2xl border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-neutral-900 mb-md">Missão</h3>
            <p className="text-neutral-600 leading-relaxed">
              Democratizar o acesso à educação de qualidade, transformando carreiras através de inteligência artificial e aprendizado personalizado.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-lg p-2xl border-l-4 border-secondary-500">
            <h3 className="text-xl font-bold text-neutral-900 mb-md">Visão</h3>
            <p className="text-neutral-600 leading-relaxed">
              Ser a plataforma líder de requalificação profissional no futuro do trabalho, conectando pessoas às oportunidades que vêm.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-lg p-2xl border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-neutral-900 mb-md">Valores</h3>
            <p className="text-neutral-600 leading-relaxed">
              Inovação, Acessibilidade, Transparência e Impacto Social — colocando as pessoas no centro de tudo.
            </p>
          </div>
        </div>

        {/* O Projeto */}
        <section className="mb-3xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-lg">O Projeto ReSkillAI</h2>
          <div className="grid md:grid-cols-2 gap-2xl">
            <div className="bg-neutral-50 rounded-lg p-2xl">
              <h3 className="font-bold text-neutral-900 mb-md text-lg">Context</h3>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                ReSkillAI é a solução apresentada para a Global Solution 2025/2 da FIAP, com o tema "O Futuro do Trabalho". O projeto responde à necessidade urgente de requalificação profissional em um mercado em constante transformação.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                A plataforma combina inteligência artificial, análise de dados e design centrado no usuário para oferecer uma experiência de aprendizado verdadeiramente personalizada.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-lg p-2xl">
              <h3 className="font-bold text-neutral-900 mb-md text-lg">Tecnologias</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• <strong>Front-end:</strong> React + Vite</li>
                <li>• <strong>Estilização:</strong> Tailwind CSS</li>
                <li>• <strong>Gráficos:</strong> Recharts</li>
                <li>• <strong>IA e Chatbot:</strong> IBM Watson Assistant</li>
                <li>• <strong>Backend:</strong> Node.js + Express</li>
                <li>• <strong>APIs:</strong> Axios / REST</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-3xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-lg">Equipe de Desenvolvimento</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {equipe.map((membro, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-lg p-lg text-center">
                <div className="w-16 h-16 rounded-full bg-primary-200 flex items-center justify-center mx-auto mb-md text-2xl font-bold text-primary-600">
                  {membro.nome[0]}
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{membro.nome}</h3>
                <p className="text-primary-600 text-xs font-semibold mb-2">{membro.rm}</p>
                <p className="text-neutral-600 text-xs">{membro.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="bg-primary-50 rounded-lg p-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-md">Vamos Conversar?</h2>
          <p className="text-neutral-600 mb-lg max-w-2xl mx-auto">
            Tem dúvidas sobre a ReSkillAI? Quer conhecer mais sobre o projeto? Entre em contato conosco!
          </p>
          <div className="space-y-2">
            <p className="text-neutral-700">
              <strong>Email:</strong> contato@reskillai.com
            </p>
            <p className="text-neutral-700">
              <strong>FIAP - Global Solution 2025/2</strong>
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
