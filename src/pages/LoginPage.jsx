import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock login — em produção, fazer chamada à API
    console.log(isSignUp ? 'Cadastro' : 'Login', { email, password })
    // Simular sucesso e redirecionar para dashboard
    alert(`${isSignUp ? 'Cadastro' : 'Login'} realizado com sucesso!`)
    navigate('/trilhas')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-accent-white">
      <div className="max-w-md mx-auto px-md py-3xl md:py-[4rem] flex flex-col justify-center min-h-screen">
        {/* Header */}
        <div className="text-center mb-3xl">
          <div className="w-20 h-20 rounded-lg bg-primary-500 flex items-center justify-center mx-auto mb-md text-4xl font-bold text-accent-white">
            AI
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {isSignUp ? 'Crie sua Conta' : 'Bem-vindo'}
          </h1>
          <p className="text-neutral-600">
            {isSignUp
              ? 'Inicie sua jornada de requalificação profissional'
              : 'Faça login para continuar sua aprendizagem'}
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="bg-accent-white rounded-lg shadow-lg p-2xl space-y-lg">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-lg py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              required
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-lg py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              required
            />
          </div>

          {/* Botão Entrar/Cadastrar */}
          <button
            type="submit"
            className="w-full px-2xl py-3 rounded-lg bg-primary-500 text-accent-white font-semibold hover:bg-primary-600 transition text-lg"
          >
            {isSignUp ? 'Criar Conta' : 'Entrar'}
          </button>

          {/* Toggle Cadastro/Login */}
          <div className="text-center text-sm text-neutral-600">
            {isSignUp ? (
              <>
                Já tem conta?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-primary-600 font-semibold hover:underline"
                >
                  Faça login
                </button>
              </>
            ) : (
              <>
                Não tem conta?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-primary-600 font-semibold hover:underline"
                >
                  Cadastre-se
                </button>
              </>
            )}
          </div>
        </form>

        {/* Links Auxiliares */}
        <div className="text-center mt-lg">
          <a href="#" className="text-sm text-primary-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
