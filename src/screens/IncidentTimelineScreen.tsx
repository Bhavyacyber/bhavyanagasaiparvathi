import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

const incidents = [
  { date: '2024-01-12', type: 'Warning', title: 'Unusual CAN Traffic Detected', description: 'Detected anomalous CAN bus messages, logged and monitored', severity: 'warning' },
  { date: '2024-01-08', type: 'Info', title: 'Certificate Renewal Reminder', description: 'Digital certificate will expire in 50 days', severity: 'info' },
  { date: '2024-01-05', type: 'Info', title: 'Security Scan Completed', description: 'Full system security scan passed with 96% score', severity: 'success' },
  { date: '2024-01-01', type: 'Warning', title: 'GPS Signal Anomaly', description: 'Possible GPS spoofing attempt detected and blocked', severity: 'warning' },
]

export default function IncidentTimelineScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Incident Timeline">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Security Incident Timeline"
          subtitle="Complete cybersecurity event history"
          icon={<AlertTriangle />}
        />
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Total Incidents</p>
          <p className="text-4xl font-bold text-white">4</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Critical</p>
          <p className="text-4xl font-bold text-red-500">0</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Resolved</p>
          <p className="text-4xl font-bold text-emerald-500">4</p>
        </Card>
      </motion.div>

      {/* Incident Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Incident Records</h2>
        <div className="space-y-4">
          {incidents.map((incident, idx) => {
            const Icon =
              incident.severity === 'warning'
                ? AlertTriangle
                : incident.severity === 'success'
                  ? CheckCircle
                  : AlertCircle
            const color =
              incident.severity === 'warning'
                ? 'text-yellow-500'
                : incident.severity === 'success'
                  ? 'text-emerald-500'
                  : 'text-primary-400'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-primary-700 rounded-lg mt-1 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{incident.title}</h3>
                        <span
                          className={`badge ${
                            incident.severity === 'warning'
                              ? 'badge-warning'
                              : incident.severity === 'success'
                                ? 'badge-success'
                                : 'badge-info'
                          }`}
                        >
                          {incident.type}
                        </span>
                      </div>
                      <p className="text-primary-400 text-sm mb-2">{incident.date}</p>
                      <p className="text-primary-300">{incident.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
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
