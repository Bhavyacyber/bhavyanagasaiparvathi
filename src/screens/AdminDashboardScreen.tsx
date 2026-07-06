import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const fleetData = [
  { name: 'Healthy', value: 1247 },
  { name: 'Warning', value: 89 },
  { name: 'Critical', value: 12 },
]

const attackData = [
  { location: 'North Region', attacks: 45 },
  { location: 'South Region', attacks: 32 },
  { location: 'East Region', attacks: 28 },
  { location: 'West Region', attacks: 19 },
  { location: 'Central', attacks: 15 },
]

const compromisedBatteries = [
  { bpan: 'BPAN-2024-001234-EV', threat: 'CAN Injection', status: 'quarantined' },
  { bpan: 'BPAN-2024-005678-EV', threat: 'Firmware Tampering', status: 'isolated' },
  { bpan: 'BPAN-2024-009999-EV', threat: 'GPS Spoofing', status: 'monitoring' },
]

export default function AdminDashboardScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Admin Dashboard">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Fleet Administration"
          subtitle="Enterprise-wide battery fleet management and security analytics"
          icon={<BarChart3 />}
        />
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
      >
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Total Batteries</p>
          <p className="text-4xl font-bold text-white">1,348</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Healthy</p>
          <p className="text-4xl font-bold text-emerald-500">1,247</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Warnings</p>
          <p className="text-4xl font-bold text-yellow-500">89</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Critical</p>
          <p className="text-4xl font-bold text-red-500">12</p>
        </Card>
      </motion.div>

      {/* Fleet Health Distribution */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Fleet Health Distribution</h2>
        <Card className="p-6">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={fleetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Attack Heatmap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Attack Vector Heatmap</h2>
        <Card className="p-6">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={attackData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="location" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="attacks" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Compromised Batteries */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Active Threats</h2>
        <div className="space-y-3">
          {compromisedBatteries.map((battery, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{battery.bpan}</p>
                  <p className="text-primary-400 text-sm">Threat: {battery.threat}</p>
                </div>
                <span className={`badge ${battery.status === 'quarantined' ? 'badge-danger' : battery.status === 'isolated' ? 'badge-warning' : 'badge-info'}`}>
                  {battery.status}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Button
          variant="secondary"
          fullWidth
          icon={<TrendingUp className="w-5 h-5" />}
        >
          Export Report
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>
      </motion.div>
    </Layout>
  )
}
