import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, TrendingDown, Lightbulb } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const healthData = [
  { month: 'Jan', soh: 100 },
  { month: 'Feb', soh: 99.5 },
  { month: 'Mar', soh: 99 },
  { month: 'Apr', soh: 98.5 },
  { month: 'May', soh: 97.8 },
  { month: 'Jun', soh: 97.2 },
  { month: 'Jul', soh: 96.8 },
  { month: 'Aug', soh: 96.2 },
]

const degradationData = [
  { cycle: '0-500', rate: 0.5 },
  { cycle: '500-1000', rate: 0.45 },
  { cycle: '1000-1500', rate: 0.48 },
  { cycle: '1500-2000', rate: 0.52 },
  { cycle: '2000-2500', rate: 0.55 },
]

export default function AIBatteryHealthScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Battery Health">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="AI Battery Health Analysis"
          subtitle="Machine learning predictions and degradation analysis"
          icon={<Zap />}
        />
      </motion.div>

      {/* Main Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <Card className="p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full -mr-20 -mt-20" />
          <p className="text-primary-400 text-sm font-semibold mb-3">STATE OF HEALTH (SOH)</p>
          <div className="text-5xl font-bold text-emerald-500 mb-2">94%</div>
          <p className="text-primary-400 text-sm">Healthy - Expected life: 8-10 years</p>
        </Card>

        <Card className="p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full -mr-20 -mt-20" />
          <p className="text-primary-400 text-sm font-semibold mb-3">STATE OF CHARGE (SOC)</p>
          <div className="text-5xl font-bold text-yellow-500 mb-2">78%</div>
          <p className="text-primary-400 text-sm">Current charge level</p>
        </Card>

        <Card className="p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full -mr-20 -mt-20" />
          <p className="text-primary-400 text-sm font-semibold mb-3">CHARGE CYCLES</p>
          <div className="text-5xl font-bold text-primary-400 mb-2">247</div>
          <p className="text-primary-400 text-sm">Remaining: ~3,500+</p>
        </Card>
      </motion.div>

      {/* SOH Trend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">State of Health Trend (8 Months)</h2>
        <Card className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={healthData}>
              <defs>
                <linearGradient id="colorSOH" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" domain={[95, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="soh"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorSOH)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Degradation Rate */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Degradation Rate by Cycle Range</h2>
        <Card className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={degradationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="cycle" stroke="#9ca3af" />
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
                dataKey="rate"
                stroke="#f59e0b"
                fillOpacity={0.6}
                fill="#f59e0b"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* AI Predictions & Recommendations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <Card className="p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-yellow-500" />
            AI Predictions
          </h3>
          <ul className="space-y-3 text-primary-300 text-sm">
            <li className="flex gap-2">
              <span className="text-primary-500">•</span>
              <span>Estimated end-of-life: 2032</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">•</span>
              <span>Projected SOH at 5000 cycles: 85%</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">•</span>
              <span>Degradation rate: 0.52% per 500 cycles</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">•</span>
              <span>Optimal temperature for longevity: 20-25°C</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-500" />
            Recommendations
          </h3>
          <ul className="space-y-3 text-primary-300 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Maintain cool storage temperatures</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Avoid frequent fast charging</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Keep SOC between 20-80% for storage</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Update firmware when available</span>
            </li>
          </ul>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Button variant="primary" fullWidth onClick={() => navigate('/battery-passport')}>
          View Passport
        </Button>
        <Button variant="secondary" fullWidth onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </motion.div>
    </Layout>
  )
}
