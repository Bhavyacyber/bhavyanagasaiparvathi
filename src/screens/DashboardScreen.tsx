import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Battery,
  Shield,
  QrCode,
  FileText,
  ArrowRight,
  History,
  AlertCircle,
  Lock,
  User,
  MessageSquare,
  BarChart3,
  ChevronRight,
} from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

const batteryData = {
  bpan: 'BPAN-2024-001847-EV',
  vin: 'JH2RC5704NM100001',
  manufacturer: 'BlueCore Battery Tech',
  health: 94,
  charging: 78,
  cycles: 247,
  status: 'Healthy',
  securityScore: 98,
  lastScan: '2 hours ago',
}

const quickActions = [
  { icon: Shield, label: 'Cybersecurity', path: '/cybersecurity', color: 'text-primary-400' },
  { icon: QrCode, label: 'Scan QR', path: '/qr-scan', color: 'text-accent-emerald' },
  { icon: Battery, label: 'Battery Health', path: '/battery-health', color: 'text-yellow-400' },
  { icon: FileText, label: 'Passport', path: '/battery-passport', color: 'text-blue-400' },
  { icon: ArrowRight, label: 'Transfer', path: '/ownership-transfer', color: 'text-purple-400' },
  { icon: History, label: 'Service', path: '/service-history', color: 'text-orange-400' },
  { icon: AlertCircle, label: 'Incidents', path: '/incident-timeline', color: 'text-red-400' },
  { icon: Lock, label: 'Emergency', path: '/emergency-lock', color: 'text-pink-400' },
]

const recentAlerts = [
  { id: 1, message: 'Firmware update available', timestamp: '30 min ago', type: 'info' },
  { id: 2, message: 'Certificate expires in 45 days', timestamp: '2 hours ago', type: 'warning' },
  { id: 3, message: 'OTA security check passed', timestamp: '4 hours ago', type: 'success' },
]

export default function DashboardScreen() {
  const navigate = useNavigate()

  const handleQuickAction = (path: string) => {
    navigate(path)
  }

  return (
    <Layout showBack={false} showLogout={true}>
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Header title="Battery Dashboard" subtitle={`BPAN: ${batteryData.bpan}`} icon={<Battery />} />
      </motion.div>

      {/* Main Metrics Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {/* Health Status */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent-emerald/10 rounded-full -mr-10 -mt-10" />
            <p className="text-primary-400 text-sm mb-3">Battery Health</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-accent-emerald">{batteryData.health}</span>
              <span className="text-primary-400 text-lg mb-1">%</span>
            </div>
            <div className="w-full bg-primary-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${batteryData.health}%` }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
            <p className="text-primary-400 text-xs mt-3">Status: {batteryData.status}</p>
          </Card>
        </motion.div>

        {/* Charging Status */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -mr-10 -mt-10" />
            <p className="text-primary-400 text-sm mb-3">Charge Level</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-yellow-400">{batteryData.charging}</span>
              <span className="text-primary-400 text-lg mb-1">%</span>
            </div>
            <div className="w-full bg-primary-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${batteryData.charging}%` }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
            <p className="text-primary-400 text-xs mt-3">Last Updated: Now</p>
          </Card>
        </motion.div>

        {/* Cycles */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-full -mr-10 -mt-10" />
            <p className="text-primary-400 text-sm mb-3">Charge Cycles</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-primary-400">{batteryData.cycles}</span>
            </div>
            <p className="text-sm text-primary-400 mb-3">Estimated remaining: 3,500+</p>
            <p className="text-primary-400 text-xs">Degradation: 2.1%/year</p>
          </Card>
        </motion.div>

        {/* Security Score */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/10 rounded-full -mr-10 -mt-10" />
            <p className="text-primary-400 text-sm mb-3">Security Score</p>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-primary-500">{batteryData.securityScore}</span>
              <span className="text-primary-400 text-lg mb-1">/100</span>
            </div>
            <div className="w-full bg-primary-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${batteryData.securityScore}%` }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
            <p className="text-primary-400 text-xs mt-3">Scan: {batteryData.lastScan}</p>
          </Card>
        </motion.div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * idx }}
              onClick={() => handleQuickAction(action.path)}
            >
              <Card hover className="p-4 text-center cursor-pointer">
                <div className={`inline-block p-3 bg-primary-700 rounded-lg mb-3 ${action.color}`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <p className="text-sm font-semibold text-white">{action.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Alerts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Recent Alerts</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/notifications')}
            icon={<ChevronRight className="w-4 h-4" />}
          >
            View All
          </Button>
        </div>
        <div className="space-y-3">
          {recentAlerts.map((alert) => (
            <motion.div key={alert.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="p-4 flex items-center gap-4">
                <div className={`w-1 h-12 rounded-full ${
                  alert.type === 'success' ? 'bg-emerald-500' :
                  alert.type === 'warning' ? 'bg-yellow-500' :
                  'bg-primary-500'
                }`} />
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{alert.message}</p>
                  <p className="text-primary-400 text-xs">{alert.timestamp}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/profile')}
          icon={<User className="w-5 h-5" />}
        >
          Profile
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/chatbot')}
          icon={<MessageSquare className="w-5 h-5" />}
        >
          AI Assistant
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/admin')}
          icon={<BarChart3 className="w-5 h-5" />}
        >
          Admin
        </Button>
      </motion.div>
    </Layout>
  )
}
