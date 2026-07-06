import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Settings, Shield, Bell, Lock, CheckCircle } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

export default function SettingsScreen() {
  const navigate = useNavigate()
  const [mfaEnabled, setMfaEnabled] = useState(false)
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  const handleMFAEnable = () => {
    setMfaEnabled(true)
  }

  return (
    <Layout title="Settings">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header title="Settings" subtitle="Manage your account preferences and security" icon={<Settings />} />
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Security</h2>
        <div className="space-y-4">
          {/* MFA */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="font-semibold text-white">Multi-Factor Authentication</p>
                  <p className="text-primary-400 text-sm">Protect your account with 2FA</p>
                </div>
              </div>
              {mfaEnabled ? (
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              ) : (
                <Button variant="secondary" size="sm" onClick={handleMFAEnable}>
                  Enable
                </Button>
              )}
            </div>
            {mfaEnabled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
              >
                <p className="text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  MFA is enabled on your account
                </p>
              </motion.div>
            )}
          </Card>

          {/* Biometric */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="font-semibold text-white">Biometric Login</p>
                  <p className="text-primary-400 text-sm">Face ID / Fingerprint authentication</p>
                </div>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={biometricEnabled}
                  onChange={(e) => setBiometricEnabled(e.target.checked)}
                  className="w-5 h-5 accent-primary-500 rounded"
                />
              </label>
            </div>
          </Card>
        </div>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Notifications</h2>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-primary-400" />
              <div>
                <p className="font-semibold text-white">Push Notifications</p>
                <p className="text-primary-400 text-sm">Receive alerts for important events</p>
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                className="w-5 h-5 accent-primary-500 rounded"
              />
            </label>
          </div>
        </Card>
      </motion.div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-white mb-6">About</h2>
        <Card className="p-6 space-y-4">
          <div>
            <p className="text-primary-400 text-sm font-semibold mb-1">App Version</p>
            <p className="text-white">1.0.0</p>
          </div>
          <div>
            <p className="text-primary-400 text-sm font-semibold mb-1">Last Updated</p>
            <p className="text-white">January 15, 2024</p>
          </div>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="secondary"
          fullWidth
          onClick={() => navigate('/profile')}
        >
          Back to Profile
        </Button>
      </motion.div>
    </Layout>
  )
}
