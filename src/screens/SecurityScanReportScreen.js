import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Share2, CheckCircle, AlertTriangle } from 'lucide-react';
import { Layout, Button } from '../components/Layout';
import { Card, Header } from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const reportData = [
    { test: 'CAN Bus', score: 98, status: 'PASS' },
    { test: 'Firmware', score: 96, status: 'PASS' },
    { test: 'Bluetooth', score: 94, status: 'PASS' },
    { test: 'GPS', score: 92, status: 'PASS' },
    { test: 'Encryption', score: 97, status: 'PASS' },
    { test: 'Malware', score: 99, status: 'PASS' },
    { test: 'Replay', score: 95, status: 'PASS' },
    { test: 'Certificates', score: 98, status: 'PASS' },
];
const findings = [
    { severity: 'INFO', message: 'Firmware version 2.4.1 is latest available' },
    { severity: 'INFO', message: 'All cryptographic keys are properly managed' },
    { severity: 'WARNING', message: 'Certificate expires in 45 days - recommend renewal' },
    { severity: 'INFO', message: 'No active security threats detected' },
];
export default function SecurityScanReportScreen() {
    const navigate = useNavigate();
    return (_jsxs(Layout, { title: "Scan Report", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Header, { title: "Security Scan Report", subtitle: `Scan completed at ${new Date().toLocaleTimeString()}`, icon: _jsx(CheckCircle, {}) }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "mb-12", children: _jsxs(Card, { className: "p-12 text-center relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32" }), _jsx(CheckCircle, { className: "w-24 h-24 mx-auto text-emerald-500 mb-6" }), _jsx("h1", { className: "text-4xl font-bold text-white mb-2", children: "All Systems Secure" }), _jsx("p", { className: "text-xl text-primary-300 mb-6", children: "No critical vulnerabilities detected" }), _jsxs("div", { className: "inline-block", children: [_jsx("div", { className: "text-5xl font-bold text-emerald-500", children: "96" }), _jsx("div", { className: "text-primary-400 text-lg", children: "Security Score" })] })] }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Test Results" }), _jsx(Card, { className: "p-6", children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: reportData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "#374151" }), _jsx(XAxis, { dataKey: "test", stroke: "#9ca3af", angle: -45, textAnchor: "end", height: 100 }), _jsx(YAxis, { stroke: "#9ca3af", domain: [0, 100] }), _jsx(Tooltip, { contentStyle: {
                                            backgroundColor: '#1f2937',
                                            border: '1px solid #374151',
                                            borderRadius: '8px',
                                        } }), _jsx(Bar, { dataKey: "score", fill: "#10b981", radius: [8, 8, 0, 0] })] }) }) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Detailed Results" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: reportData.map((result, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 * idx }, children: _jsxs(Card, { className: "p-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-emerald-500" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-white", children: result.test }), _jsxs("p", { className: "text-sm text-primary-400", children: ["Status: ", result.status] })] })] }), _jsx("span", { className: "text-2xl font-bold text-emerald-500", children: result.score })] }) }, idx))) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 }, className: "mb-12", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Findings & Recommendations" }), _jsx("div", { className: "space-y-3", children: findings.map((finding, idx) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.05 * idx }, children: _jsxs(Card, { className: "p-4 flex items-center gap-4", children: [finding.severity === 'WARNING' ? (_jsx(AlertTriangle, { className: "w-6 h-6 text-yellow-500 flex-shrink-0" })) : (_jsx(CheckCircle, { className: "w-6 h-6 text-primary-400 flex-shrink-0" })), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-white", children: finding.message }), _jsx("p", { className: "text-xs text-primary-400 mt-1", children: finding.severity })] })] }) }, idx))) })] }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6 }, className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx(Button, { variant: "primary", fullWidth: true, icon: _jsx(Download, { className: "w-5 h-5" }), children: "Download Report" }), _jsx(Button, { variant: "secondary", fullWidth: true, icon: _jsx(Share2, { className: "w-5 h-5" }), children: "Share Report" }), _jsx(Button, { variant: "secondary", fullWidth: true, onClick: () => navigate('/dashboard'), children: "Done" })] })] }));
}
