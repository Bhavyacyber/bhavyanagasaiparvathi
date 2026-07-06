import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  title: string
  subtitle?: string
  icon?: ReactNode
}

export function Header({ title, subtitle, icon }: HeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <div className="mb-3 flex items-center gap-3">
        {icon && <div className="rounded-full border border-primary-500/20 bg-primary-500/10 p-2 text-primary-300">{icon}</div>}
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
      </div>
      {subtitle && <p className="text-base leading-7 text-slate-400 sm:text-lg">{subtitle}</p>}
    </div>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <motion.div
      className={`card ${hover ? 'cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30' : ''} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

interface MetricProps {
  label: string
  value: string | number
  unit?: string
  icon?: ReactNode
  status?: 'success' | 'warning' | 'danger' | 'info'
}

export function Metric({ label, value, unit, icon, status = 'info' }: MetricProps) {
  const statusColors = {
    success: 'text-emerald-400',
    warning: 'text-yellow-400',
    danger: 'text-red-400',
    info: 'text-primary-400',
  }

  return (
    <Card className="p-6 text-center">
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <p className="text-primary-300 text-sm mb-2">{label}</p>
      <p className={`text-3xl font-bold ${statusColors[status]}`}>
        {value}{unit && <span className="text-xl ml-1">{unit}</span>}
      </p>
    </Card>
  )
}

interface StatBadgeProps {
  label: string
  value: string | number
  variant?: 'success' | 'warning' | 'danger' | 'info'
}

export function StatBadge({ label, value, variant = 'info' }: StatBadgeProps) {
  const variants = {
    success: 'badge-success',
    warning: 'badge-warning',
    danger: 'badge-danger',
    info: 'badge-info',
  }

  return (
    <div className="flex flex-col items-center">
      <span className={`badge ${variants[variant]} mb-2`}>{label}</span>
      <span className="text-2xl font-bold text-white">{value}</span>
    </div>
  )
}
