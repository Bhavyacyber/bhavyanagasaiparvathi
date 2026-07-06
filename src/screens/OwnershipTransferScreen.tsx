import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Repeat2, User } from 'lucide-react'
import { Layout, Button, Input } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function OwnershipTransferScreen() {
  const navigate = useNavigate()
  const [newOwnerEmail, setNewOwnerEmail] = useState('')

  return (
    <Layout title="Ownership Transfer">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Ownership Transfer"
          subtitle="Secure blockchain-verified transfer with OTP confirmation"
          icon={<Repeat2 />}
        />
      </motion.div>

      {/* Current Owner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Current Owner</h2>
        <Card className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary-400" />
            </div>
            <div>
              <p className="text-primary-400 text-sm mb-1">Owner Name</p>
              <p className="text-2xl font-bold text-white">John Doe</p>
              <p className="text-primary-400 text-sm">john.doe@example.com</p>
            </div>
          </div>
          <div className="bg-primary-700 p-4 rounded-lg">
            <p className="text-primary-400 text-xs mb-1">Digital Signature</p>
            <p className="font-mono text-sm text-primary-300">0x7f8c8d9e4f3b2a1c5d6e7f8g</p>
          </div>
        </Card>
      </motion.div>

      {/* New Owner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">New Owner Information</h2>
        <Card className="p-8 space-y-6">
          <div>
            <label className="block text-primary-300 text-sm font-semibold mb-3">Email Address</label>
            <Input
              type="email"
              placeholder="new.owner@example.com"
              value={newOwnerEmail}
              onChange={(e) => setNewOwnerEmail(e.target.value)}
              icon={<User />}
            />
          </div>

          <div>
            <p className="text-primary-400 text-sm mb-3">Transfer Process</p>
            <div className="space-y-2">
              {[
                { step: 1, desc: 'Verify new owner email' },
                { step: 2, desc: 'Send OTP verification' },
                { step: 3, desc: 'Blockchain confirmation' },
                { step: 4, desc: 'Digital signature update' },
              ].map((item) => (
                <div key={item.step} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center text-sm font-bold text-primary-400">
                    {item.step}
                  </div>
                  <span className="text-white">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Security Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <Card className="p-6 bg-yellow-500/10 border-yellow-500/30">
          <p className="text-yellow-400 font-semibold mb-2">⚠️ Security Notice</p>
          <p className="text-primary-300 text-sm">
            This action requires blockchain verification and digital signatures. The new owner will receive an OTP to confirm the transfer.
          </p>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Button
          variant="primary"
          fullWidth
          disabled={!newOwnerEmail.includes('@')}
          onClick={() => navigate('/ownership-otp')}
        >
          Continue to Verification
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          Cancel
        </Button>
      </motion.div>
    </Layout>
  )
}
