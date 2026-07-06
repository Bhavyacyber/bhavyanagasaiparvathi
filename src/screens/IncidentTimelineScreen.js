import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react';
import { Layout, Button } from '../components/Layout';
import { Card, Header } from '../components/Card';
const incidents = [
    { date: '2024-01-12', type: 'Warning', title: 'Unusual CAN Traffic Detected', description: 'Detected anomalous CAN bus messages, logged and monitored', severity: 'warning' },
    { date: '2024-01-08', type: 'Info', title: 'Certificate Renewal Reminder', description: 'Digital certificate will expire in 50 days', severity: 'info' },
    { date: '2024-01-05', type: 'Info', title: 'Security Scan Completed', description: 'Full system security scan passed with 96% score', severity: 'success' },
    { date: '2024-01-01', type: 'Warning', title: 'GPS Signal Anomaly', description: 'Possible GPS spoofing attempt detected and blocked', severity: 'warning' },
];
export default function IncidentTimelineScreen() {
    const navigate = useNavigate();
    return (_jsxs(Layout, { title: "Incident Timeline", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Header, { title: "Security Incident Timeline", subtitle: "Complete cybersecurity event history", icon: _jsx(AlertTriangle, {}) }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [_jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Total Incidents" }), _jsx("p", { className: "text-4xl font-bold text-white", children: "4" })] }), _jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Critical" }), _jsx("p", { className: "text-4xl font-bold text-red-500", children: "0" })] }), _jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Resolved" }), _jsx("p", { className: "text-4xl font-bold text-emerald-500", children: "4" })] })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Incident Records" }), _jsx("div", { className: "space-y-4", children: incidents.map((incident, idx) => {
                            const Icon = incident.severity === 'warning'
                                ? AlertTriangle
                                : incident.severity === 'success'
                                    ? CheckCircle
                                    : AlertCircle;
                            const color = incident.severity === 'warning'
                                ? 'text-yellow-500'
                                : incident.severity === 'success'
                                    ? 'text-emerald-500'
                                    : 'text-primary-400';
                            return (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.05 * idx }, children: _jsx(Card, { className: "p-6", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `p-3 bg-primary-700 rounded-lg mt-1 ${color}`, children: _jsx(Icon, { className: "w-5 h-5" }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "text-lg font-bold text-white", children: incident.title }), _jsx("span", { className: `badge ${incident.severity === 'warning'
                                                                    ? 'badge-warning'
                                                                    : incident.severity === 'success'
                                                                        ? 'badge-success'
                                                                        : 'badge-info'}`, children: incident.type })] }), _jsx("p", { className: "text-primary-400 text-sm mb-2", children: incident.date }), _jsx("p", { className: "text-primary-300", children: incident.description })] })] }) }) }, idx));
                        }) })] }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "mt-12", children: _jsx(Button, { variant: "secondary", fullWidth: true, onClick: () => navigate('/dashboard'), children: "Back to Dashboard" }) })] }));
}
