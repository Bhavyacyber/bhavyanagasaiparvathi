import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'
import { Layout } from '../components/Layout'
import { Card, Header } from '../components/Card'

const scanStages = [
  { id: 1, name: 'CAN Bus Analysis', duration: 45 },
  { id: 2, name: 'Firmware Integrity', duration: 60 },
  { id: 3, name: 'Bluetooth Security', duration: 40 },
  { id: 4, name: 'GPS Authenticity', duration: 35 },
  { id: 5, name: 'Encryption Check', duration: 50 },
  { id: 6, name: 'Malware Detection', duration: 70 },
  { id: 7, name: 'Replay Attack', duration: 30 },
  { id: 8, name: 'Certificate Validation', duration: 40 },
]

export default function SecurityScanProgressScreen() {
  const navigate = useNavigate()
  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (currentStage < scanStages.length) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentStage((s) => s + 1)
            return 0
          }
          return prev + Math.random() * 15
        })
      }, 500)

      return () => clearInterval(interval)
    } else {
      // Scan complete, navigate after delay
      const timer = setTimeout(() => navigate('/security-scan-report'), 2000)
      return () => clearTimeout(timer)
    }
  }, [currentStage, navigate])

  const totalProgress = ((currentStage + progress / 100) / scanStages.length) * 100

  return (
    <Layout showBack={false} title="Security Scan Progress">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Running Security Scan"
          subtitle="Analyzing battery security infrastructure..."
          icon={<Shield />}
        />
      </motion.div>

      {/* Main Progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32" />

          <p className="text-primary-400 text-sm font-semibold mb-4">OVERALL PROGRESS</p>

          {/* Circular Progress */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 relative">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="60" fill="none" stroke="#374151" strokeWidth="8" />
                <motion.circle
                  cx="70"
                  cy="70"
                  r="60"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset={314 - (totalProgress / 100) * 314}
                  transition={{ duration: 0.3 }}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4f6dff" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div>
                  <span className="text-4xl font-bold text-primary-400">{Math.round(totalProgress)}</span>
                  <span className="text-primary-400">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time */}
          <p className="text-primary-300 text-lg">
            Estimated time remaining:{' '}
            <span className="font-bold text-white">
              {Math.max(0, Math.round((scanStages.length - currentStage - progress / 100) * 0.5))} seconds
            </span>
          </p>
        </Card>
      </motion.div>

      {/* Scan Stages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Scan Stages</h2>
        <div className="space-y-3">
          {scanStages.map((stage, idx) => (
            <motion.div key={stage.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className={`p-4 ${idx <= currentStage ? 'border-primary-600' : 'border-primary-700'}`}>
                <div className="flex items-center gap-4">
                  <div>
                    {idx < currentStage ? (
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                    ) : idx === currentStage ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-6 border-2 border-primary-500 border-t-primary-400 rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 border-2 border-primary-700 rounded-full" />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-white">{stage.name}</p>
                    <p className="text-primary-400 text-xs">{stage.duration}s estimated</p>
                  </div>

                  {idx === currentStage && (
                    <div className="w-24 h-1 bg-primary-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-emerald"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  )}

                  {idx < currentStage && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  )
}
