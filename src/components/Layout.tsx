import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'

interface LayoutProps {
  children: ReactNode
  showBack?: boolean
  onBack?: () => void
  showLogout?: boolean
  title?: string
}

export function Layout({ children, showBack = true, onBack, showLogout = false, title }: LayoutProps) {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate(-1)
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-primary-900">
      {/* Header */}
      <motion.div
        className="sticky top-0 z-50 glass border-b border-primary-700 px-6 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBack && (
              <button
                onClick={handleBack}
                className="p-2 hover:bg-primary-700 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
          </div>
          {showLogout && (
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-primary-700 rounded-lg transition-colors text-red-400"
            >
              <LogOut className="w-6 h-6" />
            </button>
          )}
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-primary-700 px-6 py-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-primary-400 text-sm">
            BPAS v1.0 • Battery Pack Aadhaar System • © 2024 EV Security
          </p>
        </div>
      </footer>
    </div>
  )
}

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  className?: string
  icon?: ReactNode
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  icon,
  fullWidth = false,
}: ButtonProps) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    danger: 'px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const sizeClass = sizes[size]

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizeClass} ${fullWidth ? 'w-full' : ''} flex items-center justify-center gap-2 ${className}`}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  )
}

interface InputProps {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  icon?: ReactNode
  className?: string
  maxLength?: number
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  icon,
  className = '',
}: InputProps) {
  return (
    <div className="relative">
      {icon && <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${icon ? 'pl-12' : ''} ${className}`}
      />
    </div>
  )
}

interface SelectProps {
  options: { label: string; value: string }[]
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  disabled?: boolean
}

export function Select({ options, value, onChange, placeholder, disabled = false }: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="input-field"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
