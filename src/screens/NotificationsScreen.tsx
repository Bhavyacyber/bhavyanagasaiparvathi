import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bell, Trash2 } from 'lucide-react'
import { Layout, Button } from '../components/Layout'
import { Card, Header } from '../components/Card'

const notifications = [
  { id: 1, title: 'Firmware Update Available', message: 'New firmware v2.5.0 is ready for installation', time: '30 min ago', type: 'info', read: false },
  { id: 2, title: 'Certificate Renewal', message: 'Your battery certificate expires in 45 days', time: '2 hours ago', type: 'warning', read: false },
  { id: 3, title: 'Security Scan Passed', message: 'Daily security scan completed successfully', time: '4 hours ago', type: 'success', read: true },
  { id: 4, title: 'Unusual Activity', message: 'GPS anomaly detected and blocked', time: '1 day ago', type: 'warning', read: true },
  { id: 5, title: 'Ownership Transfer Initiated', message: 'New owner verification in progress', time: '2 days ago', type: 'info', read: true },
]

export default function NotificationsScreen() {
  const navigate = useNavigate()

  return (
    <Layout title="Notifications">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Header
          title="Notifications"
          subtitle="Latest updates and alerts"
          icon={<Bell />}
        />
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Total</p>
          <p className="text-4xl font-bold text-white">{notifications.length}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Unread</p>
          <p className="text-4xl font-bold text-yellow-500">{notifications.filter((n) => !n.read).length}</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-primary-400 text-sm font-semibold mb-3">Critical</p>
          <p className="text-4xl font-bold text-red-500">0</p>
        </Card>
      </motion.div>

      {/* Notifications List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="space-y-3">
          {notifications.map((notification, idx) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx }}
            >
              <Card
                className={`p-5 flex items-start justify-between ${!notification.read ? 'border-l-4 border-l-primary-500' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{notification.title}</h3>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    )}
                  </div>
                  <p className="text-primary-300 text-sm mb-2">{notification.message}</p>
                  <span
                    className={`badge ${
                      notification.type === 'warning'
                        ? 'badge-warning'
                        : notification.type === 'success'
                          ? 'badge-success'
                          : 'badge-info'
                    }`}
                  >
                    {notification.time}
                  </span>
                </div>
                <button className="p-2 hover:bg-primary-700 rounded-lg transition-colors text-primary-400 hover:text-red-500 ml-4">
                  <Trash2 className="w-5 h-5" />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
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
