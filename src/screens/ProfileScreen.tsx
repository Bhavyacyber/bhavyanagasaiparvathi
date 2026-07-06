import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Edit, LogOut } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'
import { useAuth } from '../hooks/useAuth'

export default function ProfileScreen() {
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Layout title="Profile">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header title="User Profile" subtitle="Your BPAS account details" icon={<User />} />
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-12"
      >
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-accent-emerald rounded-full flex items-center justify-center mb-6 shadow-glow"
          >
            <User className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-3xl font-bold text-white mb-2">John Doe</h1>
          <p className="text-primary-400 mb-8">{user?.email || 'john.doe@example.com'}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">User ID</p>
              <p className="text-white font-mono text-sm">{user?.id || 'USR-12345678'}</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Account Type</p>
              <p className="text-white">Premium Battery Owner</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Joined</p>
              <p className="text-white">January 15, 2024</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Status</p>
              <p className="text-emerald-500 font-semibold">✓ Active</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Batteries */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Your Batteries</h2>
        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-primary-700 rounded-lg">
              <div>
                <p className="text-white font-semibold">BPAN-2024-001847-EV</p>
                <p className="text-primary-400 text-sm">BlueCore Battery Tech • 200 kWh</p>
              </div>
              <div className="text-right">
                <p className="text-emerald-500 font-bold">94%</p>
                <p className="text-primary-400 text-xs">Health</p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button
          variant="secondary"
          fullWidth
          icon={<Edit className="w-5 h-5" />}
          onClick={() => navigate('/settings')}
        >
          Edit Profile
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/settings')}
        >
          Settings
        </Button>
        <Button
          variant="danger"
          fullWidth
          icon={<LogOut className="w-5 h-5" />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </motion.div>
    </Layout>
  )
}
