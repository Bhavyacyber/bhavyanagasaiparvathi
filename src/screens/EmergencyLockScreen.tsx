import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, AlertTriangle, CheckCircle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function EmergencyLockScreen() {
  const navigate = useNavigate()
  const [locked, setLocked] = useState(false)
  const [confirmLock, setConfirmLock] = useState(false)

  const handleEmergencyLock = () => {
    setLocked(true)
    setTimeout(() => {
      // Simulate lock completion
    }, 2000)
  }

  return (
    <Layout title="Emergency Lock">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Emergency Battery Lock"
          subtitle="Immobilize battery in emergency situations"
          icon={<Lock />}
        />
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto mb-12"
      >
        <Card className="p-12 text-center relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 ${locked ? 'bg-red-500/10' : 'bg-emerald-500/10'}`} />

          {locked ? (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="mb-6"
              >
                <AlertTriangle className="w-24 h-24 mx-auto text-red-500" />
              </motion.div>
              <h1 className="text-4xl font-bold text-red-500 mb-2">BATTERY LOCKED</h1>
              <p className="text-xl text-primary-300">All battery operations are disabled</p>
            </>
          ) : (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="mb-6"
              >
                <Lock className="w-24 h-24 mx-auto text-emerald-500" />
              </motion.div>
              <h1 className="text-4xl font-bold text-white mb-2">SYSTEM ACTIVE</h1>
              <p className="text-xl text-primary-300">Battery is operating normally</p>
            </>
          )}
        </Card>
      </motion.div>

      {/* Information */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12 space-y-6"
      >
        <Card className="p-6">
          <h3 className="text-lg font-bold text-white mb-4">What Emergency Lock Does</h3>
          <ul className="space-y-2 text-primary-300 text-sm">
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Disables all battery discharge operations</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Triggers immobilization protocols</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Sends alert to authorities and owner</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Records exact location and timestamp</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>Requires OTP to unlock</span>
            </li>
          </ul>
        </Card>

        {locked && (
          <Card className="p-6 bg-red-500/10 border-red-500/30">
            <h3 className="text-lg font-bold text-red-500 mb-4">🔒 Battery is Locked</h3>
            <div className="space-y-3 text-primary-300">
              <div>
                <p className="text-sm font-semibold text-white mb-1">Locked At</p>
                <p className="text-sm">{new Date().toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Location</p>
                <p className="text-sm">Latitude: 28.7041°N, Longitude: 77.1025°E</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Status</p>
                <p className="text-sm">Authorities notified • Owner alerted</p>
              </div>
            </div>
          </Card>
        )}
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        {!locked ? (
          <>
            {!confirmLock ? (
              <>
                <Card className="p-6 bg-yellow-500/10 border-yellow-500/30">
                  <p className="text-yellow-400 font-semibold mb-2">⚠️ WARNING</p>
                  <p className="text-primary-300 text-sm">
                    Emergency lock will immediately immobilize the battery. This action should only be used in genuine emergencies.
                  </p>
                </Card>
                <Button
                  variant="danger"
                  fullWidth
                  onClick={() => setConfirmLock(true)}
                  icon={<AlertTriangle className="w-5 h-5" />}
                >
                  Activate Emergency Lock
                </Button>
              </>
            ) : (
              <>
                <Card className="p-6 bg-red-500/10 border-red-500/30">
                  <p className="text-red-400 font-semibold mb-2">⚠️ CRITICAL</p>
                  <p className="text-primary-300 text-sm">
                    Are you absolutely sure? This will immediately disable all battery operations.
                  </p>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="danger"
                    fullWidth
                    onClick={handleEmergencyLock}
                  >
                    Confirm Lock
                  </Button>
                  <Button
                    variant="secondary"
                    fullWidth
                    onClick={() => setConfirmLock(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </>
        ) : (
          <Button
            variant="secondary"
            fullWidth
            onClick={() => navigate('/dashboard')}
            icon={<CheckCircle className="w-5 h-5" />}
          >
            Return to Dashboard
          </Button>
        )}
      </motion.div>
    </Layout>
  )
}
