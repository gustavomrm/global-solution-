import React from 'react'
import CardTrilha from '../components/CardTrilha'
import Footer from '../components/Footer'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const trilhasRecomendadas = [
  {
    id: 1,
    titulo: 'Fundamentos de Inteligência Artificial',
    descricao: 'Aprenda os conceitos básicos de IA, machine learning e aplicações práticas.',
    area: 'Tecnologia',
    nivel: 'Iniciante',
    progresso: 45,
    duracao: '8 semanas',
    pontos: 250
  },
  {
    id: 2,
    titulo: 'React Avançado e Desenvolvimento Front-End',
    descricao: 'Domine React, hooks e arquitetura moderna de aplicações web.',
    area: 'Desenvolvimento',
    nivel: 'Intermediário',
    progresso: 12,
    duracao: '10 semanas',
    pontos: 350
  },
  {
    id: 3,
    titulo: 'Análise de Dados com Python',
    descricao: 'Use Python para análise, visualização e insights de dados.',
    area: 'Data Science',
    nivel: 'Intermediário',
    progresso: 78,
    duracao: '12 semanas',
    pontos: 400
  }
]

const progressData = [
  { mes: 'Ago', pontos: 120 },
  { mes: 'Set', pontos: 290 },
  { mes: 'Out', pontos: 480 },
  { mes: 'Nov', pontos: 820 }
]

const categoriaData = [
  { name: 'Tecnologia', value: 40, color: '#1E88E5' },
  { name: 'Desenvolvimento', value: 35, color: '#43A047' },
  { name: 'Data Science', value: 25, color: '#FB8C00' }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-md py-3xl md:py-[3rem]">
        {/* Cabeçalho do Dashboard */}
        <div className="mb-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-md">Seu Painel de Aprendizado</h1>
          <p className="text-lg text-neutral-600">Bem-vindo! Aqui você acompanha seu progresso e continua sua jornada.</p>
        </div>

        {/* Grid de Stats */}
        <div className="grid md:grid-cols-4 gap-lg mb-3xl">
          <div className="bg-accent-white rounded-lg p-lg shadow-sm border-l-4 border-primary-500">
            <p className="text-sm text-neutral-600 mb-2">Total de Pontos</p>
            <p className="text-3xl font-bold text-primary-600">820</p>
          </div>
          <div className="bg-accent-white rounded-lg p-lg shadow-sm border-l-4 border-secondary-500">
            <p className="text-sm text-neutral-600 mb-2">Trilhas em Andamento</p>
            <p className="text-3xl font-bold text-secondary-600">3</p>
          </div>
          <div className="bg-accent-white rounded-lg p-lg shadow-sm border-l-4 border-blue-500">
            <p className="text-sm text-neutral-600 mb-2">Trilhas Concluídas</p>
            <p className="text-3xl font-bold text-blue-600">2</p>
          </div>
          <div className="bg-accent-white rounded-lg p-lg shadow-sm border-l-4 border-orange-500">
            <p className="text-sm text-neutral-600 mb-2">Sequência</p>
            <p className="text-3xl font-bold text-orange-600">12 dias</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid lg:grid-cols-2 gap-2xl mb-3xl">
          {/* Gráfico de Progresso */}
          <div className="bg-accent-white rounded-lg p-2xl shadow-md">
            <h2 className="text-lg font-bold text-neutral-900 mb-lg">Evolução de Pontos (Últimos 4 Meses)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEEE" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pontos" fill="#1E88E5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Distribuição por Categoria */}
          <div className="bg-accent-white rounded-lg p-2xl shadow-md">
            <h2 className="text-lg font-bold text-neutral-900 mb-lg">Cursos por Categoria</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoriaData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoriaData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mensagem da IA */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-2xl border border-primary-200 mb-3xl">
          <div className="flex items-start gap-lg">
            <div className="text-3xl">🤖</div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-2">Mensagem da ReSkillAI</h3>
              <p className="text-neutral-700">
                Continue sua jornada! Você está indo muito bem. Sua dedicação aos estudos está rendendo frutos. Recomendo que você dedique mais tempo à trilha de "Análise de Dados com Python" — você está perto de concluir! 🎯
              </p>
            </div>
          </div>
        </div>

        {/* Trilhas Recomendadas */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2xl">Trilhas de Aprendizado Recomendadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2xl">
            {trilhasRecomendadas.map(trilha => (
              <CardTrilha key={trilha.id} trilha={trilha} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
