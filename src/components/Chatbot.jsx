import React, { useState } from 'react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Olá! 👋 Sou a ReSkillAI. Posso te ajudar a encontrar o curso ideal para o seu perfil ou responder dúvidas sobre a plataforma.' }
  ])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (!input.trim()) return
    
    setMessages([...messages, { role: 'user', text: input }])
    setInput('')

    // Simular resposta da IA
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: 'Entendi sua pergunta! Como posso ajudá-lo melhor na sua jornada de requalificação?'
      }])
    }, 500)
  }

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-lg right-lg w-16 h-16 rounded-full bg-primary-500 text-accent-white shadow-xl hover:bg-primary-600 transition flex items-center justify-center text-2xl z-40"
        aria-label="Abrir chatbot"
      >
        💬
      </button>

      {/* Janela de Chat */}
      {isOpen && (
        <div className="fixed bottom-32 right-lg w-full max-w-sm bg-accent-white rounded-xl shadow-2xl z-40 flex flex-col h-96 md:w-96">
          {/* Header */}
          <div className="bg-primary-500 text-accent-white px-lg py-md rounded-t-xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold">ReSkillAI Assistente</h3>
              <p className="text-xs opacity-90">Online • Pronto para ajudar</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-primary-600 rounded transition"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-md space-y-md bg-neutral-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-md rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-primary-500 text-accent-white rounded-br-none'
                    : 'bg-neutral-200 text-neutral-900 rounded-bl-none'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-neutral-200 p-md bg-accent-white rounded-b-xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escreva sua pergunta..."
                className="flex-1 px-md py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-primary-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-md py-2 bg-primary-500 text-accent-white rounded-lg hover:bg-primary-600 transition font-medium text-sm"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
