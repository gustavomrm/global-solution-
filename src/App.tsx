import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Chatbot from './components/Chatbot'
import HomePage from './pages/HomePage'
import PerfilPage from './pages/PerfilPage'
import DashboardPage from './pages/DashboardPage'
import SobrePage from './pages/SobrePage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-accent-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/trilhas" element={<DashboardPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  )
}

export default App
