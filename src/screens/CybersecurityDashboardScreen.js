import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Play, Activity, Lock, Wifi, Radio, Zap, Eye, AlertTriangle } from 'lucide-react';
import { Layout, Button } from '../components/Layout';
import { Card, Header } from '../components/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
const threatData = [
    { time: '00:00', threats: 2 },
    { time: '04:00', threats: 5 },
    { time: '08:00', threats: 3 },
    { time: '12:00', threats: 8 },
    { time: '16:00', threats: 4 },
    { time: '20:00', threats: 6 },
    { time: '24:00', threats: 2 },
];
const securityMetrics = [
    { name: 'CAN', value: 95, icon: Zap, color: '#10b981' },
    { name: 'Firmware', value: 98, icon: Lock, color: '#4f6dff' },
    { name: 'Bluetooth', value: 92, icon: Wifi, color: '#f59e0b' },
    { name: 'GPS', value: 96, icon: Radio, color: '#8b5cf6' },
    { name: 'OTA', value: 97, icon: Activity, color: '#06b6d4' },
    { name: 'Runtime', value: 94, icon: Eye, color: '#ec4899' },
];
export default function CybersecurityDashboardScreen() {
    const navigate = useNavigate();
    const handleRunScan = () => {
        navigate('/security-scan');
    };
    return (_jsxs(Layout, { title: "Cybersecurity Dashboard", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Header, { title: "Zero Trust Cybersecurity", subtitle: "Real-time threat monitoring and device protection", icon: _jsx(Shield, {}) }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "mb-12", children: _jsxs(Card, { className: "p-12 relative overflow-hidden text-center", children: [_jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32" }), _jsx("p", { className: "text-primary-400 text-sm font-semibold mb-4", children: "OVERALL SECURITY SCORE" }), _jsxs("div", { className: "flex items-center justify-center gap-8", children: [_jsxs("div", { children: [_jsx("div", { className: "text-7xl font-bold text-primary-500", children: "95" }), _jsx("p", { className: "text-primary-400 text-lg", children: "/100" })] }), _jsxs("div", { className: "w-32 h-32 relative", children: [_jsxs("svg", { className: "w-full h-full", viewBox: "0 0 140 140", children: [_jsx("circle", { cx: "70", cy: "70", r: "60", fill: "none", stroke: "#374151", strokeWidth: "8" }), _jsx(motion.circle, { cx: "70", cy: "70", r: "60", fill: "none", stroke: "url(#gradient)", strokeWidth: "8", strokeDasharray: "314", initial: { strokeDashoffset: 314 }, animate: { strokeDashoffset: 314 * 0.05 }, transition: { duration: 2 }, strokeLinecap: "round" }), _jsx("defs", { children: _jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", stopColor: "#10b981" }), _jsx("stop", { offset: "100%", stopColor: "#4f6dff" })] }) })] }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsx("span", { className: "text-2xl font-bold text-emerald-500", children: "95%" }) })] })] }), _jsx("p", { className: "text-emerald-400 mt-6 font-semibold", children: "\u2713 All Systems Protected" })] }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Security Modules" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: securityMetrics.map((metric, idx) => {
                            const Icon = metric.icon;
                            return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 * idx }, children: _jsxs(Card, { className: "p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-3 bg-primary-700 rounded-lg", children: _jsx(Icon, { className: "w-5 h-5", style: { color: metric.color } }) }), _jsx("span", { className: "font-semibold text-white", children: metric.name })] }), _jsxs("span", { className: "text-2xl font-bold", style: { color: metric.color }, children: [metric.value, "%"] })] }), _jsx("div", { className: "w-full bg-primary-700 rounded-full h-2", children: _jsx(motion.div, { className: "h-2 rounded-full", style: { backgroundColor: metric.color }, initial: { width: 0 }, animate: { width: `${metric.value}%` }, transition: { duration: 1.5, delay: 0.05 * idx + 0.3 } }) })] }) }, idx));
                        }) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Threat Timeline (24h)" }), _jsx(Card, { className: "p-6", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(AreaChart, { data: threatData, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "colorThreats", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: "#ef4444", stopOpacity: 0.8 }), _jsx("stop", { offset: "95%", stopColor: "#ef4444", stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#374151" }), _jsx(XAxis, { dataKey: "time", stroke: "#9ca3af" }), _jsx(YAxis, { stroke: "#9ca3af" }), _jsx(Tooltip, { contentStyle: {
                                            backgroundColor: '#1f2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                        } }), _jsx(Area, { type: "monotone", dataKey: "threats", stroke: "#ef4444", fillOpacity: 1, fill: "url(#colorThreats)" })] }) }) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Attack Vector Distribution" }), _jsxs(Card, { className: "p-6 grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { children: _jsx(ResponsiveContainer, { width: "100%", height: 250, children: _jsxs(PieChart, { children: [_jsxs(Pie, { data: [
                                                    { name: 'CAN Injection', value: 35 },
                                                    { name: 'Firmware', value: 25 },
                                                    { name: 'Bluetooth', value: 20 },
                                                    { name: 'GPS Spoofing', value: 15 },
                                                    { name: 'Others', value: 5 },
                                                ], cx: "50%", cy: "50%", labelLine: false, label: ({ name, value }) => `${name}: ${value}%`, outerRadius: 80, fill: "#8884d8", dataKey: "value", children: [_jsx(Cell, { fill: "#ef4444" }), _jsx(Cell, { fill: "#f59e0b" }), _jsx(Cell, { fill: "#eab308" }), _jsx(Cell, { fill: "#10b981" }), _jsx(Cell, { fill: "#4f6dff" })] }), _jsx(Tooltip, { contentStyle: {
                                                    backgroundColor: '#1f2937',
                                                    border: '1px solid #374151',
                                                } })] }) }) }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-red-500" }), _jsx("span", { className: "text-white", children: "CAN Bus Attacks: 35%" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-yellow-500" }), _jsx("span", { className: "text-white", children: "Firmware Exploits: 25%" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-green-500" }), _jsx("span", { className: "text-white", children: "Bluetooth Spoofing: 20%" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-blue-500" }), _jsx("span", { className: "text-white", children: "GPS Spoofing: 15%" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-purple-500" }), _jsx("span", { className: "text-white", children: "Other Threats: 5%" })] })] })] })] }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, children: _jsx(Button, { variant: "primary", fullWidth: true, onClick: handleRunScan, icon: _jsx(Play, { className: "w-5 h-5" }), className: "py-4 text-lg", children: "Run Full Security Scan" }) })] }));
}
