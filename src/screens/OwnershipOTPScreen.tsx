import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { Layout, Button, Input } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function OwnershipOTPScreen() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')

  return (
    <Layout title="OTP Verification">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="OTP Verification"
          subtitle="Verify ownership transfer with one-time password"
          icon={<Shield />}
        />
      </motion.div>

      {/* OTP Input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto"
      >
        <Card className="p-12 text-center mb-8">
          <p className="text-primary-400 text-sm font-semibold mb-2">Enter OTP Code</p>
          <p className="text-primary-300 text-sm mb-8">
            Sent to new.owner@example.com
          </p>

          <Input
            type="text"
            placeholder="000000"
            value={otp}
            maxLength={6}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
            className="text-center text-4xl tracking-widest mb-6"
          />

          <p className="text-primary-400 text-xs">
            Resend OTP in <span className="font-bold">30s</span>
          </p>
        </Card>

        {/* Info */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">What Happens Next</h3>
          <ul className="space-y-2 text-primary-300 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-500">•</span>
              <span>OTP will be verified securely</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">•</span>
              <span>Blockchain transaction will be initiated</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">•</span>
              <span>Digital signatures will be updated</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">•</span>
              <span>New owner will be notified</span>
            </li>
          </ul>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="primary"
            fullWidth
            disabled={otp.length !== 6}
            onClick={() => navigate('/ownership-verification')}
          >
            Verify
          </Button>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate('/ownership-transfer')}
          >
            Back
          </Button>
        </div>
      </motion.div>
    </Layout>
  )
}
