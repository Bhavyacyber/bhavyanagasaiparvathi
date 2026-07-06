import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Fingerprint, Shield } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { Input, Button } from '../components/Layout'

export default function LoginScreen() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'email' | 'password' | 'otp' | 'biometric'>('email')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = () => {
    if (email.includes('@')) {
      setStep('password')
    }
  }

  const handlePasswordSubmit = () => {
    if (password.length >= 6) {
      setStep('otp')
    }
  }

  const handleOTPSubmit = () => {
    if (otp.length === 6) {
      setStep('biometric')
    }
  }

  const handleBiometricLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      login(email)
      navigate('/dashboard')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main card */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="glass p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-accent-emerald rounded-2xl flex items-center justify-center mb-4 shadow-glow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">BPAS Login</h1>
            <p className="text-primary-300 text-sm">Secure Digital Battery Identity</p>
          </div>

          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            {['email', 'password', 'otp', 'biometric'].map((s) => (
              <motion.div
                key={s}
                className={`h-1 flex-1 rounded-full ${
                  ['email', 'password', 'otp', 'biometric'].indexOf(step) >= ['email', 'password', 'otp', 'biometric'].indexOf(s as any)
                    ? 'bg-primary-500'
                    : 'bg-primary-700'
                }`}
                layoutId={`progress-${s}`}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          {/* Email Step */}
          {step === 'email' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <label className="block text-primary-300 text-sm font-semibold mb-3">Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<Mail className="w-5 h-5" />}
                />
              </div>
              <Button variant="primary" fullWidth onClick={handleEmailSubmit} disabled={!email.includes('@')}>
                Continue
              </Button>
            </motion.div>
          )}

          {/* Password Step */}
          {step === 'password' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <label className="block text-primary-300 text-sm font-semibold mb-3">Email</label>
                <p className="input-field bg-primary-700/50 text-primary-400 cursor-not-allowed flex items-center">
                  {email}
                </p>
              </div>
              <div className="mb-6">
                <label className="block text-primary-300 text-sm font-semibold mb-3">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<Lock className="w-5 h-5" />}
                />
              </div>
              <Button variant="primary" fullWidth onClick={handlePasswordSubmit} disabled={password.length < 6}>
                Continue
              </Button>
              <Button variant="secondary" fullWidth onClick={() => setStep('email')} className="mt-3">
                Back
              </Button>
            </motion.div>
          )}

          {/* OTP Step */}
          {step === 'otp' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-primary-300 text-sm mb-6">
                Enter the 6-digit OTP sent to <strong>{email}</strong>
              </p>
              <div className="mb-6">
                <Input
                  type="text"
                  placeholder="000000"
                  value={otp}
                  maxLength={6}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="text-center text-2xl tracking-widest"
                />
              </div>
              <Button variant="primary" fullWidth onClick={handleOTPSubmit} disabled={otp.length !== 6}>
                Verify OTP
              </Button>
              <Button variant="secondary" fullWidth onClick={() => setStep('password')} className="mt-3">
                Back
              </Button>
            </motion.div>
          )}

          {/* Biometric Step */}
          {step === 'biometric' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 mx-auto bg-primary-700 rounded-full flex items-center justify-center mb-4"
                >
                  <Fingerprint className="w-10 h-10 text-primary-400" />
                </motion.div>
                <p className="text-primary-300 mb-2">Biometric Authentication</p>
                <p className="text-sm text-primary-400">Place your finger on the sensor</p>
              </div>
              <Button
                variant="primary"
                fullWidth
                onClick={handleBiometricLogin}
                disabled={isLoading}
              >
                {isLoading ? 'Authenticating...' : 'Authenticate'}
              </Button>
              <Button variant="secondary" fullWidth onClick={() => setStep('otp')} className="mt-3" disabled={isLoading}>
                Back
              </Button>
            </motion.div>
          )}

          {/* Footer */}
          <p className="text-center text-primary-400 text-xs mt-6 pt-6 border-t border-primary-700">
            Enterprise Cybersecurity Platform
          </p>
        </div>
      </motion.div>
    </div>
  )
}
