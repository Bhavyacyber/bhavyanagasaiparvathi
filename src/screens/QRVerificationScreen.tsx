import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, AlertTriangle, XCircle, Shield } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

interface VerificationResult {
  status: 'authentic' | 'fake' | 'tampered'
  title: string
  message: string
  riskScore: number
  icon: any
  color: string
  details: string[]
}

const verificationData: Record<string, VerificationResult> = {
  authentic: {
    status: 'authentic',
    title: 'Authentic Battery Detected',
    message: 'This battery pack has been verified as genuine and original.',
    riskScore: 2,
    icon: CheckCircle,
    color: 'text-emerald-500',
    details: [
      'QR code signature verified',
      'Manufacturing records matched',
      'Blockchain hash confirmed',
      'No tampering detected',
      'Digital certificate valid',
    ],
  },
  fake: {
    status: 'fake',
    title: 'Counterfeit Battery Detected',
    message: 'This battery pack does not match registered authenticity markers.',
    riskScore: 95,
    icon: XCircle,
    color: 'text-red-500',
    details: [
      'QR code signature mismatch',
      'Manufacturing records not found',
      'Blockchain hash invalid',
      'Possible counterfeit clone',
      'Certificate not registered',
    ],
  },
  tampered: {
    status: 'tampered',
    title: 'Tampered Battery Detected',
    message: 'This battery pack shows signs of tampering or modification.',
    riskScore: 88,
    icon: AlertTriangle,
    color: 'text-yellow-500',
    details: [
      'QR code shows modification signs',
      'Hologram security features compromised',
      'Seal integrity compromised',
      'Hardware modification detected',
      'Firmware integrity compromised',
    ],
  },
}

export default function QRVerificationScreen() {
  const { result = 'authentic' } = useParams<{ result: string }>()
  const navigate = useNavigate()
  const data = verificationData[result] || verificationData.authentic
  const Icon = data.icon

  return (
    <Layout title="Verification Result">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header title="QR Verification Result" subtitle="Complete Battery Authentication Analysis" icon={<Shield />} />
      </motion.div>

      {/* Main Result Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="mb-12"
      >
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 -mr-32 -mt-32">
            <Icon className="w-64 h-64" />
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="mb-6"
          >
            <Icon className={`w-24 h-24 mx-auto ${data.color}`} />
          </motion.div>

          <h1 className="text-4xl font-bold text-white mb-2">{data.title}</h1>
          <p className="text-xl text-primary-300 mb-8">{data.message}</p>

          {/* Risk Score */}
          <div className="inline-block mb-8">
            <div className="text-sm text-primary-400 mb-3">Risk Score</div>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-bold">{data.riskScore}</div>
              <div className="w-40 h-40 rounded-full border-4 border-primary-700 relative flex items-center justify-center">
                <motion.div
                  className={`absolute inset-0 rounded-full border-4 border-transparent ${
                    data.riskScore < 30
                      ? 'border-t-emerald-500 border-r-emerald-500'
                      : data.riskScore < 70
                        ? 'border-t-yellow-500 border-r-yellow-500'
                        : 'border-t-red-500 border-r-red-500'
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span
                  className={`text-2xl font-bold ${
                    data.riskScore < 30
                      ? 'text-emerald-500'
                      : data.riskScore < 70
                        ? 'text-yellow-500'
                        : 'text-red-500'
                  }`}
                >
                  {data.riskScore}%
                </span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Verification Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Verification Details</h2>
        <div className="space-y-3">
          {data.details.map((detail, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card className="p-4 flex items-center gap-4">
                <div
                  className={`w-1 h-12 rounded-full ${
                    data.status === 'authentic'
                      ? 'bg-emerald-500'
                      : data.status === 'fake'
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                  }`}
                />
                <p className="text-white font-medium">{detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Scan Timestamp</p>
          <p className="text-white font-mono text-sm">{new Date().toLocaleString()}</p>
        </Card>
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Scan Location</p>
          <p className="text-white">Latitude: 28.7041°N<br/>Longitude: 77.1025°E</p>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button
          variant="primary"
          fullWidth
          onClick={() => navigate('/battery-passport')}
        >
          View Passport
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/qr-scan')}
        >
          Scan Again
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </Button>
      </motion.div>
    </Layout>
  )
}
