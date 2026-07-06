import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Shield } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

const scanTypes = [
  { title: 'CAN Bus Analysis', description: 'Detect injection attacks and unauthorized messages' },
  { title: 'Firmware Integrity', description: 'Verify firmware signatures and detect tampering' },
  { title: 'Bluetooth Security', description: 'Scan for Bluetooth spoofing and hijacking attempts' },
  { title: 'GPS Authenticity', description: 'Detect GPS spoofing and signal manipulation' },
  { title: 'Encryption Check', description: 'Validate encryption standards and key management' },
  { title: 'Malware Scan', description: 'Deep scan for malicious code and backdoors' },
  { title: 'Replay Attack', description: 'Detect message replay and timing attacks' },
  { title: 'Certificate Validation', description: 'Verify digital certificates and revocation status' },
]

export default function SecurityScanScreen() {
  const navigate = useNavigate()

  const handleStartScan = () => {
    navigate('/security-scan-progress')
  }

  return (
    <Layout title="Security Scan">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Full Security Scan"
          subtitle="Comprehensive threat and vulnerability analysis"
          icon={<Shield />}
        />
      </motion.div>

      {/* Scan Selection */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Available Scans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {scanTypes.map((scan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card hover className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{scan.title}</h3>
                <p className="text-primary-400 text-sm">{scan.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scan Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Estimated Time</p>
          <p className="text-3xl font-bold text-white">5-8 min</p>
        </Card>
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Test Coverage</p>
          <p className="text-3xl font-bold text-accent-emerald">8 Modules</p>
        </Card>
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Last Scan</p>
          <p className="text-lg font-bold text-white">6 hours ago</p>
        </Card>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <Card className="p-6">
          <h3 className="text-lg font-bold text-white mb-4">What This Scan Does</h3>
          <ul className="space-y-3 text-primary-300 text-sm">
            <li className="flex gap-3">
              <span className="text-accent-emerald">✓</span>
              <span>Analyzes CAN bus traffic for injection attacks and unauthorized messages</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-emerald">✓</span>
              <span>Verifies firmware integrity and checks for unauthorized modifications</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-emerald">✓</span>
              <span>Tests Bluetooth and wireless communication security</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-emerald">✓</span>
              <span>Detects GPS spoofing and false location injection</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-emerald">✓</span>
              <span>Validates encryption standards and key management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent-emerald">✓</span>
              <span>Performs deep malware and backdoor detection</span>
            </li>
          </ul>
        </Card>
      </motion.div>

      {/* Start Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="primary"
          fullWidth
          onClick={handleStartScan}
          icon={<Play className="w-5 h-5" />}
          className="py-4 text-lg"
        >
          Start Security Scan
        </Button>
      </motion.div>
    </Layout>
  )
}
