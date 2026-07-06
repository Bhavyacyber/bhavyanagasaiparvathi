import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Play, Activity, Lock, Wifi, Radio, Zap, Eye, AlertTriangle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const threatData = [
  { time: '00:00', threats: 2 },
  { time: '04:00', threats: 5 },
  { time: '08:00', threats: 3 },
  { time: '12:00', threats: 8 },
  { time: '16:00', threats: 4 },
  { time: '20:00', threats: 6 },
  { time: '24:00', threats: 2 },
]

const securityMetrics = [
  { name: 'CAN', value: 95, icon: Zap, color: '#10b981' },
  { name: 'Firmware', value: 98, icon: Lock, color: '#4f6dff' },
  { name: 'Bluetooth', value: 92, icon: Wifi, color: '#f59e0b' },
  { name: 'GPS', value: 96, icon: Radio, color: '#8b5cf6' },
  { name: 'OTA', value: 97, icon: Activity, color: '#06b6d4' },
  { name: 'Runtime', value: 94, icon: Eye, color: '#ec4899' },
]

export default function CybersecurityDashboardScreen() {
  const navigate = useNavigate()

  const handleRunScan = () => {
    navigate('/security-scan')
  }

  return (
    <Layout title="Cybersecurity Dashboard">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Zero Trust Cybersecurity"
          subtitle="Real-time threat monitoring and device protection"
          icon={<Shield />}
        />
      </motion.div>

      {/* Overall Security Score */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32" />

          <p className="text-primary-400 text-sm font-semibold mb-4">OVERALL SECURITY SCORE</p>
          <div className="flex items-center justify-center gap-8">
            <div>
              <div className="text-7xl font-bold text-primary-500">95</div>
              <p className="text-primary-400 text-lg">/100</p>
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-full h-full" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="60" fill="none" stroke="#374151" strokeWidth="8" />
                <motion.circle
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray="314"
                  initial={{ strokeDashoffset: 314 }}
                  animate={{ strokeDashoffset: 314 * 0.05 }}
                  transition={{ duration: 2 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#4f6dff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-500">95%</span>
              </div>
            </div>
          </div>
          <p className="text-emerald-400 mt-6 font-semibold">✓ All Systems Protected</p>
        </Card>
      </motion.div>

      {/* Security Modules Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Security Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityMetrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary-700 rounded-lg">
                        <Icon className="w-5 h-5" style={{ color: metric.color }} />
                      </div>
                      <span className="font-semibold text-white">{metric.name}</span>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: metric.color }}>
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full bg-primary-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: metric.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1.5, delay: 0.05 * idx + 0.3 }}
                    />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Threat Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Threat Timeline (24h)</h2>
        <Card className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={threatData}>
              <defs>
                <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="threats"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorThreats)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Attack Heatmap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Attack Vector Distribution</h2>
        <Card className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'CAN Injection', value: 35 },
                    { name: 'Firmware', value: 25 },
                    { name: 'Bluetooth', value: 20 },
                    { name: 'GPS Spoofing', value: 15 },
                    { name: 'Others', value: 5 },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#ef4444" />
                  <Cell fill="#f59e0b" />
                  <Cell fill="#eab308" />
                  <Cell fill="#10b981" />
                  <Cell fill="#4f6dff" />
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-white">CAN Bus Attacks: 35%</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <span className="text-white">Firmware Exploits: 25%</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-green-500" />
              <span className="text-white">Bluetooth Spoofing: 20%</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-blue-500" />
              <span className="text-white">GPS Spoofing: 15%</span>
            </div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-purple-500" />
              <span className="text-white">Other Threats: 5%</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Run Security Scan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          variant="primary"
          fullWidth
          onClick={handleRunScan}
          icon={<Play className="w-5 h-5" />}
          className="py-4 text-lg"
        >
          Run Full Security Scan
        </Button>
      </motion.div>
    </Layout>
  )
}
