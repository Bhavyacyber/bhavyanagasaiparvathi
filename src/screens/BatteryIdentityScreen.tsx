import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Copy, CheckCircle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

const batteryIdentity = {
  bpan: 'BPAN-2024-001847-EV',
  vin: 'JH2RC5704NM100001',
  manufacturer: 'BlueCore Battery Tech',
  model: 'LFP-200KWh Premium',
  capacity: '200 kWh',
  chemistry: 'LiFePO₄',
  productionDate: '2023-11-15',
  blockchainHash: '0x7f8c8d9e4f3b2a1c5d6e7f8g9h0i1j2k',
  digitalSignature: 'sig_2024_847_ev_bpan_verified',
  certificateExpiry: '2029-11-15',
  trustScore: 99.8,
}

export default function BatteryIdentityScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Battery Identity">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header title="Digital Battery Identity" subtitle="Complete Identity Verification Record" icon={<Shield />} />
      </motion.div>

      {/* Main Identity Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full -mr-20 -mt-20" />

          {/* BPAN Section */}
          <div className="mb-8 pb-8 border-b border-primary-700">
            <p className="text-primary-400 text-sm font-semibold mb-2">BATTERY PACK AADHAAR NUMBER (BPAN)</p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-accent-emerald">{batteryIdentity.bpan}</span>
              <button className="p-2 hover:bg-primary-700 rounded-lg transition-colors">
                <Copy className="w-5 h-5 text-primary-400" />
              </button>
            </div>
          </div>

          {/* Core Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-primary-700">
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">VIN</p>
              <p className="text-xl font-bold text-white">{batteryIdentity.vin}</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Manufacturer</p>
              <p className="text-xl font-bold text-white">{batteryIdentity.manufacturer}</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Model</p>
              <p className="text-xl font-bold text-white">{batteryIdentity.model}</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Chemistry</p>
              <p className="text-xl font-bold text-white">{batteryIdentity.chemistry}</p>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-primary-700">
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Capacity</p>
              <p className="text-2xl font-bold text-primary-400">{batteryIdentity.capacity}</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Production Date</p>
              <p className="text-xl font-bold text-white">{batteryIdentity.productionDate}</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm font-semibold mb-2">Certificate Expiry</p>
              <p className="text-xl font-bold text-accent-emerald">{batteryIdentity.certificateExpiry}</p>
            </div>
          </div>

          {/* Blockchain & Signature */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-primary-400 text-sm font-semibold">Blockchain Hash</p>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="bg-primary-700 p-4 rounded-lg break-all font-mono text-xs text-primary-300">
                {batteryIdentity.blockchainHash}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-primary-400 text-sm font-semibold">Digital Signature</p>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="bg-primary-700 p-4 rounded-lg break-all font-mono text-xs text-primary-300">
                {batteryIdentity.digitalSignature}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Trust Metrics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-4">Trust Score</p>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-bold text-emerald-500">{batteryIdentity.trustScore}</span>
            <span className="text-primary-400 text-xl mb-1">%</span>
          </div>
          <div className="w-full bg-primary-700 rounded-full h-3 mt-4">
            <motion.div
              className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '99.8%' }}
              transition={{ duration: 2 }}
            />
          </div>
          <p className="text-emerald-400 text-sm mt-3">✓ Verified & Authentic</p>
        </Card>

        <Card className="p-6">
          <p className="text-primary-400 text-sm font-semibold mb-4">Verification Status</p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">Manufacturing verified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">Blockchain registered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span className="text-white">Digital signature valid</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <Button variant="primary" fullWidth onClick={() => navigate('/battery-passport')}>
          View Battery Passport
        </Button>
        <Button variant="secondary" fullWidth onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </motion.div>
    </Layout>
  )
}
