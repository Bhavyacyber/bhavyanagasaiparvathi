import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
export function Layout({ children, showBack = true, onBack, showLogout = false, title }) {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleBack = () => {
        if (onBack) {
            onBack();
        }
        else {
            navigate(-1);
        }
    };
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (_jsxs("div", { className: "min-h-screen bg-primary-900", children: [_jsx(motion.div, { className: "sticky top-0 z-50 glass border-b border-primary-700 px-6 py-4", initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.3 }, children: _jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [showBack && (_jsx("button", { onClick: handleBack, className: "p-2 hover:bg-primary-700 rounded-lg transition-colors", children: _jsx(ArrowLeft, { className: "w-6 h-6" }) })), title && _jsx("h2", { className: "text-2xl font-bold", children: title })] }), showLogout && (_jsx("button", { onClick: handleLogout, className: "p-2 hover:bg-primary-700 rounded-lg transition-colors text-red-400", children: _jsx(LogOut, { className: "w-6 h-6" }) }))] }) }), _jsx("main", { className: "max-w-7xl mx-auto px-6 py-8", children: children }), _jsx("footer", { className: "border-t border-primary-700 px-6 py-6 mt-12", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("p", { className: "text-center text-primary-400 text-sm", children: "BPAS v1.0 \u2022 Battery Pack Aadhaar System \u2022 \u00A9 2024 EV Security" }) }) })] }));
}
export function Button({ children, variant = 'primary', size = 'md', onClick, disabled = false, className = '', icon, fullWidth = false, }) {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        danger: 'px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };
    const sizeClass = sizes[size];
    return (_jsxs(motion.button, { onClick: onClick, disabled: disabled, className: `${variants[variant]} ${sizeClass} ${fullWidth ? 'w-full' : ''} flex items-center justify-center gap-2 ${className}`, whileHover: !disabled ? { scale: 1.02 } : undefined, whileTap: !disabled ? { scale: 0.98 } : undefined, children: [icon && _jsx("span", { children: icon }), children] }));
}
export function Input({ type = 'text', placeholder, value, onChange, disabled = false, icon, className = '', }) {
    return (_jsxs("div", { className: "relative", children: [icon && _jsx("div", { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400", children: icon }), _jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, disabled: disabled, className: `input-field ${icon ? 'pl-12' : ''} ${className}` })] }));
}
export function Select({ options, value, onChange, placeholder, disabled = false }) {
    return (_jsxs("select", { value: value, onChange: onChange, disabled: disabled, className: "input-field", children: [placeholder && _jsx("option", { value: "", children: placeholder }), options.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value)))] }));
}
