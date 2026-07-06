import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Share2, FileText } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function BatteryPassportScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Battery Passport">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Digital Battery Passport"
          subtitle="Complete battery lifecycle documentation"
          icon={<FileText />}
        />
      </motion.div>

      {/* Passport Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-12 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-emerald/10 rounded-full -ml-20 -mb-20" />

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-12 pb-12 border-b border-primary-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary-700 rounded-lg flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Digital Battery Passport</h2>
                  <p className="text-primary-400">BPAN-2024-001847-EV</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Battery Information */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Battery Information</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary-400 text-sm mb-2">Manufacturer</p>
                    <p className="text-lg font-semibold text-white">BlueCore Battery Tech</p>
                  </div>
                  <div>
                    <p className="text-primary-400 text-sm mb-2">Model</p>
                    <p className="text-lg font-semibold text-white">LFP-200KWh Premium</p>
                  </div>
                  <div>
                    <p className="text-primary-400 text-sm mb-2">Chemistry</p>
                    <p className="text-lg font-semibold text-white">LiFePO₄</p>
                  </div>
                  <div>
                    <p className="text-primary-400 text-sm mb-2">Capacity</p>
                    <p className="text-lg font-semibold text-white">200 kWh</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-primary-400 text-sm mb-2">State of Health</p>
                    <p className="text-3xl font-bold text-emerald-500">94%</p>
                  </div>
                  <div>
                    <p className="text-primary-400 text-sm mb-2">Charge Cycles</p>
                    <p className="text-3xl font-bold text-primary-400">247</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Certifications & Compliance</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-white">ISO 9001 Quality Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-white">ISO 21434 Automotive Security</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-white">UNECE R155 Cybersecurity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-white">IEC 62443 Industrial Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Passport Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <Card className="p-6">
          <h3 className="text-lg font-bold text-white mb-4">What's Included</h3>
          <ul className="space-y-2 text-primary-300 text-sm">
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Complete battery specifications</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Manufacturing documentation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Certification records</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Performance metrics</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Blockchain hash verification</span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-500">✓</span>
              <span>Digital signature proof</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold text-white mb-4">File Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-primary-400 text-sm mb-1">File Name</p>
              <p className="text-white font-mono text-sm">BPAN-2024-001847-EV-Passport.pdf</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm mb-1">File Size</p>
              <p className="text-white font-mono text-sm">2.4 MB</p>
            </div>
            <div>
              <p className="text-primary-400 text-sm mb-1">Generated</p>
              <p className="text-white font-mono text-sm">{new Date().toLocaleString()}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button
          variant="primary"
          fullWidth
          icon={<Download className="w-5 h-5" />}
        >
          Download PDF
        </Button>
        <Button
          variant="secondary"
          fullWidth
          icon={<Share2 className="w-5 h-5" />}
        >
          Share Passport
        </Button>
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
