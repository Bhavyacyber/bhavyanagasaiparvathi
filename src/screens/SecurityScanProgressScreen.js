import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card, Header } from '../components/Card';
const scanStages = [
    { id: 1, name: 'CAN Bus Analysis', duration: 45 },
    { id: 2, name: 'Firmware Integrity', duration: 60 },
    { id: 3, name: 'Bluetooth Security', duration: 40 },
    { id: 4, name: 'GPS Authenticity', duration: 35 },
    { id: 5, name: 'Encryption Check', duration: 50 },
    { id: 6, name: 'Malware Detection', duration: 70 },
    { id: 7, name: 'Replay Attack', duration: 30 },
    { id: 8, name: 'Certificate Validation', duration: 40 },
];
export default function SecurityScanProgressScreen() {
    const navigate = useNavigate();
    const [currentStage, setCurrentStage] = useState(0);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if (currentStage < scanStages.length) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        setCurrentStage((s) => s + 1);
                        return 0;
                    }
                    return prev + Math.random() * 15;
                });
            }, 500);
            return () => clearInterval(interval);
        }
        else {
            // Scan complete, navigate after delay
            const timer = setTimeout(() => navigate('/security-scan-report'), 2000);
            return () => clearTimeout(timer);
        }
    }, [currentStage, navigate]);
    const totalProgress = ((currentStage + progress / 100) / scanStages.length) * 100;
    return (_jsxs(Layout, { showBack: false, title: "Security Scan Progress", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsx(Header, { title: "Running Security Scan", subtitle: "Analyzing battery security infrastructure...", icon: _jsx(Shield, {}) }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "mb-12", children: _jsxs(Card, { className: "p-12 text-center relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32" }), _jsx("p", { className: "text-primary-400 text-sm font-semibold mb-4", children: "OVERALL PROGRESS" }), _jsx("div", { className: "flex justify-center mb-8", children: _jsxs("div", { className: "w-48 h-48 relative", children: [_jsxs("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 140 140", children: [_jsx("circle", { cx: "70", cy: "70", r: "60", fill: "none", stroke: "#374151", strokeWidth: "8" }), _jsx(motion.circle, { cx: "70", cy: "70", r: "60", fill: "none", stroke: "url(#gradient)", strokeWidth: "8", strokeDasharray: "314", strokeDashoffset: 314 - (totalProgress / 100) * 314, transition: { duration: 0.3 }, strokeLinecap: "round" }), _jsx("defs", { children: _jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", stopColor: "#4f6dff" }), _jsx("stop", { offset: "100%", stopColor: "#10b981" })] }) })] }), _jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("div", { children: [_jsx("span", { className: "text-4xl font-bold text-primary-400", children: Math.round(totalProgress) }), _jsx("span", { className: "text-primary-400", children: "%" })] }) })] }) }), _jsxs("p", { className: "text-primary-300 text-lg", children: ["Estimated time remaining:", ' ', _jsxs("span", { className: "font-bold text-white", children: [Math.max(0, Math.round((scanStages.length - currentStage - progress / 100) * 0.5)), " seconds"] })] })] }) }), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Scan Stages" }), _jsx("div", { className: "space-y-3", children: scanStages.map((stage, idx) => (_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, children: _jsx(Card, { className: `p-4 ${idx <= currentStage ? 'border-primary-600' : 'border-primary-700'}`, children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { children: idx < currentStage ? (_jsx(CheckCircle, { className: "w-6 h-6 text-emerald-500" })) : idx === currentStage ? (_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 2, repeat: Infinity }, className: "w-6 h-6 border-2 border-primary-500 border-t-primary-400 rounded-full" })) : (_jsx("div", { className: "w-6 h-6 border-2 border-primary-700 rounded-full" })) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-semibold text-white", children: stage.name }), _jsxs("p", { className: "text-primary-400 text-xs", children: [stage.duration, "s estimated"] })] }), idx === currentStage && (_jsx("div", { className: "w-24 h-1 bg-primary-700 rounded-full overflow-hidden", children: _jsx(motion.div, { className: "h-full bg-gradient-to-r from-primary-500 to-accent-emerald", initial: { width: 0 }, animate: { width: `${progress}%` }, transition: { duration: 0.1 } }) })), idx < currentStage && _jsx(CheckCircle, { className: "w-5 h-5 text-emerald-500" })] }) }) }, stage.id))) })] })] }));
}
