import { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PortfolioScreen from './screens/PortfolioScreen'

interface AuthContextType {
  isLoggedIn: boolean
  user: { email: string; id: string } | null
  login: (email: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<{ email: string; id: string } | null>(null)

  const handleLogin = (email: string) => {
    setIsLoggedIn(true)
    setUser({ email, id: 'USR-' + Math.random().toString(36).substr(2, 9) })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login: handleLogin, logout: handleLogout }}>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
