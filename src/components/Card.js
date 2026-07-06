import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function Header({ title, subtitle, icon }) {
    return (_jsxs("div", { className: "mb-8 max-w-3xl", children: [_jsxs("div", { className: "mb-3 flex items-center gap-3", children: [icon && _jsx("div", { className: "rounded-full border border-primary-500/20 bg-primary-500/10 p-2 text-primary-300", children: icon }), _jsx("h1", { className: "text-3xl font-semibold tracking-tight text-white sm:text-4xl", children: title })] }), subtitle && _jsx("p", { className: "text-base leading-7 text-slate-400 sm:text-lg", children: subtitle })] }));
}
export function Card({ children, className = '', hover = false }) {
    return (_jsx(motion.div, { className: `card ${hover ? 'cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30' : ''} ${className}`, whileHover: hover ? { y: -4, scale: 1.01 } : undefined, transition: { duration: 0.25 }, children: children }));
}
export function Metric({ label, value, unit, icon, status = 'info' }) {
    const statusColors = {
        success: 'text-emerald-400',
        warning: 'text-yellow-400',
        danger: 'text-red-400',
        info: 'text-primary-400',
    };
    return (_jsxs(Card, { className: "p-6 text-center", children: [icon && _jsx("div", { className: "flex justify-center mb-3", children: icon }), _jsx("p", { className: "text-primary-300 text-sm mb-2", children: label }), _jsxs("p", { className: `text-3xl font-bold ${statusColors[status]}`, children: [value, unit && _jsx("span", { className: "text-xl ml-1", children: unit })] })] }));
}
export function StatBadge({ label, value, variant = 'info' }) {
    const variants = {
        success: 'badge-success',
        warning: 'badge-warning',
        danger: 'badge-danger',
        info: 'badge-info',
    };
    return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("span", { className: `badge ${variants[variant]} mb-2`, children: label }), _jsx("span", { className: "text-2xl font-bold text-white", children: value })] }));
}
