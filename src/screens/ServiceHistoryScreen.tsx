import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { History, Wrench } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

const serviceHistory = [
  { date: '2024-01-15', service: 'Routine Maintenance', technician: 'Tech-001', status: 'completed', notes: 'Battery health check passed' },
  { date: '2024-01-10', service: 'Firmware Update', technician: 'Tech-002', status: 'completed', notes: 'v2.4.1 installed' },
  { date: '2023-12-20', service: 'Diagnostics Scan', technician: 'Tech-001', status: 'completed', notes: 'All systems healthy' },
  { date: '2023-11-15', service: 'Installation', technician: 'Tech-003', status: 'completed', notes: 'Initial setup completed' },
]

export default function ServiceHistoryScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Service History">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Service History"
          subtitle="Complete maintenance and service timeline"
          icon={<History />}
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
          <p className="text-primary-400 text-sm font-semibold mb-3">Total Services</p>
          <p className="text-4xl font-bold text-white">4</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Last Service</p>
          <p className="text-2xl font-bold text-white">15 Jan 2024</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Status</p>
          <p className="text-emerald-500 font-bold">All Clear</p>
        </Card>
      </motion.div>

      {/* Service Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Service Records</h2>
        <div className="space-y-4 relative">
          {serviceHistory.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary-700 rounded-lg mt-1">
                    <Wrench className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{service.service}</h3>
                      <span className="badge badge-success">{service.status}</span>
                    </div>
                    <p className="text-primary-400 text-sm mb-3">{service.date} • Technician: {service.technician}</p>
                    <p className="text-white">{service.notes}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
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
