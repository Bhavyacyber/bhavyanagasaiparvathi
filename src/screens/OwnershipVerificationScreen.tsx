import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function OwnershipVerificationScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Ownership Transfer">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Transfer Successful"
          subtitle="Ownership has been securely transferred"
          icon={<CheckCircle />}
        />
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="max-w-2xl mx-auto"
      >
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32" />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="mb-6"
          >
            <CheckCircle className="w-24 h-24 mx-auto text-emerald-500" />
          </motion.div>

          <h1 className="text-4xl font-bold text-white mb-2">Transfer Complete</h1>
          <p className="text-xl text-primary-300 mb-12">
            Battery ownership has been successfully transferred to the new owner
          </p>

          {/* Details */}
          <div className="space-y-6 text-left mb-12 pb-12 border-b border-primary-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-primary-400 text-sm font-semibold mb-2">Previous Owner</p>
                <p className="text-lg font-semibold text-white">John Doe</p>
                <p className="text-primary-400 text-sm">john.doe@example.com</p>
              </div>
              <div>
                <p className="text-primary-400 text-sm font-semibold mb-2">New Owner</p>
                <p className="text-lg font-semibold text-white">Jane Smith</p>
                <p className="text-primary-400 text-sm">jane.smith@example.com</p>
              </div>
            </div>

            <div>
              <p className="text-primary-400 text-sm font-semibold mb-3">Blockchain Transaction</p>
              <div className="bg-primary-700 p-4 rounded-lg break-all font-mono text-xs text-primary-300">
                0x7f8c8d9e4f3b2a1c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r
              </div>
            </div>

            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Transfer Timestamp</p>
              <p className="text-white font-mono text-sm">{new Date().toLocaleString()}</p>
            </div>
          </div>

          {/* Confirmation */}
          <div className="space-y-2 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">OTP verified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">Blockchain confirmed</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">Digital signatures updated</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">New owner notified</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
      >
        <Button
          variant="primary"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          Return to Dashboard
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/battery-identity')}
        >
          View Battery Identity
        </Button>
      </motion.div>
    </Layout>
  )
}
