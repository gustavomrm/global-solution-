ReSkillAI
Global Solution 2025/2 – O Futuro do Trabalho

Curso: Análise e Desenvolvimento de Sistemas
Instituição: FIAP
Período: 1º Ano (Turma Fevereiro)

Integrantes:

Luiz Guedes – RM 565843
Gustavo Mendes – RM 565807
Enzo Ricarte – RM 566053

1. Descrição do Projeto

A ReSkillAI é uma plataforma de requalificação profissional que utiliza Inteligência Artificial para identificar habilidades, sugerir trilhas de aprendizado personalizadas e conectar profissionais a novas oportunidades de emprego.

O sistema atua como um assistente digital de carreira, ajudando pessoas impactadas pela automação e pelas transformações do mercado de trabalho a desenvolverem competências relevantes para o futuro.

A proposta está alinhada ao tema “O Futuro do Trabalho”, promovendo inclusão digital, aprendizado contínuo e uso ético de tecnologias emergentes.

2. Problema

Milhões de profissionais estão sendo afetados pela automação e pela adoção de novas tecnologias. Ao mesmo tempo, as empresas têm dificuldade em encontrar talentos com as competências digitais exigidas pelas novas funções.
Falta uma ferramenta capaz de identificar lacunas de habilidades e guiar o usuário em uma jornada personalizada de requalificação.

3. Solução Proposta

A ReSkillAI oferece:

Análise de Perfil com IA: O usuário informa profissão, habilidades e interesses. O sistema utiliza Machine Learning para identificar competências transferíveis.

Recomendações de Trilhas de Aprendizado: Sugestão automática de cursos e conteúdos, baseada em APIs públicas e dados de mercado.

Chatbot de Orientação Profissional: Assistente virtual que guia o usuário durante o processo de requalificação.

Dashboard Interativo: Área do usuário com progresso, conquistas e oportunidades sugeridas.

Gamificação: Pontuação por metas e conquistas concluídas, incentivando o aprendizado contínuo.

4. Objetivo

Capacitar profissionais para as novas demandas do mercado de trabalho, democratizando o acesso à requalificação digital e conectando aprendizado a oportunidades reais de emprego.

5. Tecnologias Utilizadas
Front-End

React + Vite

TypeScript

Tailwind CSS

React Router DOM

Back-End

Java (Quarkus Framework)

REST API

Integração com Banco de Dados PostgreSQL

Inteligência Artificial e Chatbot

Python (Scikit-Learn, Flask)

IBM Watson Assistant (NLP e orientação profissional)

Banco de Dados

PostgreSQL / Oracle Cloud

Modelo relacional com tabelas de usuários, trilhas e progresso

Deploy e Infraestrutura

Front-End: Vercel

Back-End: Render

IA e Banco: Cloud IBM / Railway

6. Estrutura do Projeto
reskillai/
│
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Imagens e ícones
│   ├── components/         # Navbar, Footer, Cards, etc.
│   ├── pages/              # Home, Dashboard, Perfil
│   ├── App.tsx             # Roteamento principal
│   ├── index.css           # Estilos globais (Tailwind)
│   └── main.tsx            # Ponto de entrada do React
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

7. Como Executar o Projeto
Pré-requisitos

Node.js (versão 18 ou superior)

NPM ou Yarn instalados

Passos para rodar o projeto
# Clonar o repositório
git clone https://github.com/usuario/reskillai.git

# Entrar na pasta
cd reskillai

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev


A aplicação estará disponível em:
http://localhost:5173

8. Design e UX

A interface da ReSkillAI segue princípios de design minimalista, com uso de cores neutras e azuis para transmitir confiança e modernidade.
O layout é responsivo e adota as Heurísticas de Usabilidade de Nielsen, com foco em:

Clareza e consistência na navegação

Feedback imediato para ações do usuário

Prevenção de erros e acessibilidade

9. SLA – Acordo de Nível de Serviço

O SLA define o compromisso da ReSkillAI com qualidade, disponibilidade e segurança dos serviços.

Disponibilidade: 99% mensal

Tempo médio de resposta da API: até 800ms

Suporte técnico: resposta em até 24h úteis

Backup e segurança: cópias diárias, criptografia de dados e autenticação JWT

Penalidades: descontos de 5% a 10% em caso de descumprimento dos prazos acordados

10. Resultados Esperados

Auxiliar profissionais na transição de carreira para áreas tecnológicas

Ampliar o acesso à educação digital e reduzir desigualdades de oportunidade

Criar uma plataforma escalável e financeiramente sustentável

Demonstrar o uso prático de IA, design e engenharia de software em benefício social

11. Conclusão

A ReSkillAI representa a aplicação prática dos conhecimentos de engenharia de software, inteligência artificial, design e negócios em uma solução voltada ao futuro do trabalho.
O projeto conecta tecnologia e propósito, oferecendo uma ferramenta capaz de transformar dados em oportunidades e aprendizado em empregabilidade.

12. Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos na FIAP – Global Solution 2025/2.