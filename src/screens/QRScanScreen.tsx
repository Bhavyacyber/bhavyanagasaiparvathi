import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { QrCode } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function QRScanScreen() {
  const navigate = useNavigate()
  const [isScanning, setIsScanning] = useState(true)

  const handleScan = (result: 'authentic' | 'fake' | 'tampered') => {
    setIsScanning(false)
    navigate(`/qr-verification/${result}`)
  }

  return (
    <Layout title="QR Scan & Verification">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header title="QR Code Scanner" subtitle="Scan battery QR code for verification" icon={<QrCode />} />
      </motion.div>

      {/* Scanner Area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-emerald/20" />

          {isScanning ? (
            <>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-48 h-48 border-4 border-primary-500 rounded-2xl relative"
              >
                <motion.div
                  animate={{ y: [-96, 96] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-t-4 border-t-accent-emerald"
                />
              </motion.div>

              <p className="text-primary-300 mt-8 text-center">
                Position QR code within frame to scan
              </p>

              {/* Simulated QR codes to tap */}
              <div className="mt-12 flex gap-4">
                <button
                  onClick={() => handleScan('authentic')}
                  className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white transition-colors text-sm"
                >
                  Authentic
                </button>
                <button
                  onClick={() => handleScan('fake')}
                  className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white transition-colors text-sm"
                >
                  Counterfeit
                </button>
                <button
                  onClick={() => handleScan('tampered')}
                  className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors text-sm"
                >
                  Tampered
                </button>
              </div>
            </>
          ) : null}
        </Card>
      </motion.div>

      {/* Scanner Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Detection Level</p>
          <p className="text-2xl font-bold text-emerald-400">99.8%</p>
          <p className="text-primary-400 text-xs mt-2">Clone detection accuracy</p>
        </Card>
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">QR Standards</p>
          <p className="text-sm text-white">ISO/IEC 18004<br/>RS Error Correction</p>
        </Card>
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-3">Scan Status</p>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-400"
          >
            Waiting...
          </motion.div>
        </Card>
      </motion.div>

      {/* Help Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-bold text-white mb-4">How to Scan</h3>
          <ul className="space-y-2 text-primary-300 text-sm">
            <li>✓ Ensure good lighting conditions</li>
            <li>✓ Hold camera steady, 6-8 inches from QR code</li>
            <li>✓ QR code should fill the scanning area</li>
            <li>✓ Do not apply filters or overlays</li>
          </ul>
        </Card>

        <Button variant="secondary" fullWidth onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </motion.div>
    </Layout>
  )
}
