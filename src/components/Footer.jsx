import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-accent-white py-3xl px-md md:px-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2xl mb-2xl">
        {/* Sobre */}
        <div>
          <h3 className="font-bold text-lg mb-md">ReSkillAI</h3>
          <p className="text-sm text-neutral-400">Transformando carreiras através de inteligência artificial e educação personalizada.</p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h4 className="font-semibold mb-md">Plataforma</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-primary-500 transition">Início</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Trilhas</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Dashboard</a></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="font-semibold mb-md">Empresa</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-primary-500 transition">Sobre</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Contato</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Privacidade</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-semibold mb-md">Contato</h4>
          <p className="text-sm text-neutral-400">Email: contato@reskillai.com</p>
          <p className="text-sm text-neutral-400">FIAP - Faculdade de Informática e Administração Paulista</p>
        </div>
      </div>

      <div className="border-t border-neutral-700 pt-2xl">
        <p className="text-center text-sm text-neutral-400">
          © 2025 ReSkillAI. Todos os direitos reservados. | Global Solution 2025/2 - O Futuro do Trabalho
        </p>
      </div>
    </footer>
  )
}
