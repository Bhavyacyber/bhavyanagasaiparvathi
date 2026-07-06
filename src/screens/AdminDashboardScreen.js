import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp } from 'lucide-react';
import { Layout, Button } from '../components/Layout';
import { Card, Header } from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const fleetData = [
    { name: 'Healthy', value: 1247 },
    { name: 'Warning', value: 89 },
    { name: 'Critical', value: 12 },
];
const attackData = [
    { location: 'North Region', attacks: 45 },
    { location: 'South Region', attacks: 32 },
    { location: 'East Region', attacks: 28 },
    { location: 'West Region', attacks: 19 },
    { location: 'Central', attacks: 15 },
];
const compromisedBatteries = [
    { bpan: 'BPAN-2024-001234-EV', threat: 'CAN Injection', status: 'quarantined' },
    { bpan: 'BPAN-2024-005678-EV', threat: 'Firmware Tampering', status: 'isolated' },
    { bpan: 'BPAN-2024-009999-EV', threat: 'GPS Spoofing', status: 'monitoring' },
];
export default function AdminDashboardScreen() {
    const navigate = useNavigate();
    return (_jsxs(Layout, { title: "Admin Dashboard", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Header, { title: "Fleet Administration", subtitle: "Enterprise-wide battery fleet management and security analytics", icon: _jsx(BarChart3, {}) }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-12", children: [_jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Total Batteries" }), _jsx("p", { className: "text-4xl font-bold text-white", children: "1,348" })] }), _jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Healthy" }), _jsx("p", { className: "text-4xl font-bold text-emerald-500", children: "1,247" })] }), _jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Warnings" }), _jsx("p", { className: "text-4xl font-bold text-yellow-500", children: "89" })] }), _jsxs(Card, { className: "p-6 text-center", children: [_jsx("p", { className: "text-primary-400 text-sm font-semibold mb-3", children: "Critical" }), _jsx("p", { className: "text-4xl font-bold text-red-500", children: "12" })] })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Fleet Health Distribution" }), _jsx(Card, { className: "p-6", children: _jsx(ResponsiveContainer, { width: "100%", height: 250, children: _jsxs(BarChart, { data: fleetData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#374151" }), _jsx(XAxis, { dataKey: "name", stroke: "#9ca3af" }), _jsx(YAxis, { stroke: "#9ca3af" }), _jsx(Tooltip, { contentStyle: {
                                            backgroundColor: '#1f2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                        } }), _jsx(Bar, { dataKey: "value", fill: "#10b981", radius: [8, 8, 0, 0] })] }) }) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Attack Vector Heatmap" }), _jsx(Card, { className: "p-6", children: _jsx(ResponsiveContainer, { width: "100%", height: 250, children: _jsxs(BarChart, { data: attackData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#374151" }), _jsx(XAxis, { dataKey: "location", stroke: "#9ca3af", angle: -45, textAnchor: "end", height: 100 }), _jsx(YAxis, { stroke: "#9ca3af" }), _jsx(Tooltip, { contentStyle: {
                                            backgroundColor: '#1f2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                        } }), _jsx(Bar, { dataKey: "attacks", fill: "#ef4444", radius: [8, 8, 0, 0] })] }) }) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Active Threats" }), _jsx("div", { className: "space-y-3", children: compromisedBatteries.map((battery, idx) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.05 * idx }, children: _jsxs(Card, { className: "p-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: battery.bpan }), _jsxs("p", { className: "text-primary-400 text-sm", children: ["Threat: ", battery.threat] })] }), _jsx("span", { className: `badge ${battery.status === 'quarantined' ? 'badge-danger' : battery.status === 'isolated' ? 'badge-warning' : 'badge-info'}`, children: battery.status })] }) }, idx))) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsx(Button, { variant: "secondary", fullWidth: true, icon: _jsx(TrendingUp, { className: "w-5 h-5" }), children: "Export Report" }), _jsx(Button, { variant: "secondary", fullWidth: true, onClick: () => navigate('/dashboard'), children: "Back to Dashboard" })] })] }));
}
