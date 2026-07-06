import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download, Share2, CheckCircle, AlertTriangle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const reportData = [
  { test: 'CAN Bus', score: 98, status: 'PASS' },
  { test: 'Firmware', score: 96, status: 'PASS' },
  { test: 'Bluetooth', score: 94, status: 'PASS' },
  { test: 'GPS', score: 92, status: 'PASS' },
  { test: 'Encryption', score: 97, status: 'PASS' },
  { test: 'Malware', score: 99, status: 'PASS' },
  { test: 'Replay', score: 95, status: 'PASS' },
  { test: 'Certificates', score: 98, status: 'PASS' },
]

const findings = [
  { severity: 'INFO', message: 'Firmware version 2.4.1 is latest available' },
  { severity: 'INFO', message: 'All cryptographic keys are properly managed' },
  { severity: 'WARNING', message: 'Certificate expires in 45 days - recommend renewal' },
  { severity: 'INFO', message: 'No active security threats detected' },
]

export default function SecurityScanReportScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Scan Report">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Security Scan Report"
          subtitle={`Scan completed at ${new Date().toLocaleTimeString()}`}
          icon={<CheckCircle />}
        />
      </motion.div>

      {/* Overall Result */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32" />

          <CheckCircle className="w-24 h-24 mx-auto text-emerald-500 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-2">All Systems Secure</h1>
          <p className="text-xl text-primary-300 mb-6">No critical vulnerabilities detected</p>

          <div className="inline-block">
            <div className="text-5xl font-bold text-emerald-500">96</div>
            <div className="text-primary-400 text-lg">Security Score</div>
          </div>
        </Card>
      </motion.div>

      {/* Test Results */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Test Results</h2>
        <Card className="p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reportData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="test" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
              <YAxis stroke="#9ca3af" domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="score" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Detailed Results */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Detailed Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reportData.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                  <div>
                    <p className="font-semibold text-white">{result.test}</p>
                    <p className="text-sm text-primary-400">Status: {result.status}</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-emerald-500">{result.score}</span>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Findings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Findings & Recommendations</h2>
        <div className="space-y-3">
          {findings.map((finding, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card className="p-4 flex items-center gap-4">
                {finding.severity === 'WARNING' ? (
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-primary-400 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className="text-white">{finding.message}</p>
                  <p className="text-xs text-primary-400 mt-1">{finding.severity}</p>
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
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Button
          variant="primary"
          fullWidth
          icon={<Download className="w-5 h-5" />}
        >
          Download Report
        </Button>
        <Button
          variant="secondary"
          fullWidth
          icon={<Share2 className="w-5 h-5" />}
        >
          Share Report
        </Button>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          Done
        </Button>
      </motion.div>
    </Layout>
  )
}
