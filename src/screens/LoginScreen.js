import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Fingerprint, Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Input, Button } from '../components/Layout';
export default function LoginScreen() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState('email');
    const [isLoading, setIsLoading] = useState(false);
    const handleEmailSubmit = () => {
        if (email.includes('@')) {
            setStep('password');
        }
    };
    const handlePasswordSubmit = () => {
        if (password.length >= 6) {
            setStep('otp');
        }
    };
    const handleOTPSubmit = () => {
        if (otp.length === 6) {
            setStep('biometric');
        }
    };
    const handleBiometricLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            login(email);
            navigate('/dashboard');
        }, 1500);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 flex items-center justify-center p-4 overflow-hidden", children: [_jsx(motion.div, { className: "absolute w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20", animate: { x: [0, 100, 0] }, transition: { duration: 8, repeat: Infinity } }), _jsx(motion.div, { className: "relative z-10 w-full max-w-md", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: _jsxs("div", { className: "glass p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(motion.div, { className: "w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-accent-emerald rounded-2xl flex items-center justify-center mb-4 shadow-glow", initial: { scale: 0 }, animate: { scale: 1 }, transition: { type: 'spring', delay: 0.1 }, children: _jsx(Shield, { className: "w-8 h-8 text-white" }) }), _jsx("h1", { className: "text-3xl font-bold text-white mb-2", children: "BPAS Login" }), _jsx("p", { className: "text-primary-300 text-sm", children: "Secure Digital Battery Identity" })] }), _jsx("div", { className: "flex gap-2 mb-8", children: ['email', 'password', 'otp', 'biometric'].map((s) => (_jsx(motion.div, { className: `h-1 flex-1 rounded-full ${['email', 'password', 'otp', 'biometric'].indexOf(step) >= ['email', 'password', 'otp', 'biometric'].indexOf(s)
                                    ? 'bg-primary-500'
                                    : 'bg-primary-700'}`, layoutId: `progress-${s}`, transition: { duration: 0.3 } }, s))) }), step === 'email' && (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-primary-300 text-sm font-semibold mb-3", children: "Email Address" }), _jsx(Input, { type: "email", placeholder: "your@email.com", value: email, onChange: (e) => setEmail(e.target.value), icon: _jsx(Mail, { className: "w-5 h-5" }) })] }), _jsx(Button, { variant: "primary", fullWidth: true, onClick: handleEmailSubmit, disabled: !email.includes('@'), children: "Continue" })] })), step === 'password' && (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-primary-300 text-sm font-semibold mb-3", children: "Email" }), _jsx("p", { className: "input-field bg-primary-700/50 text-primary-400 cursor-not-allowed flex items-center", children: email })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-primary-300 text-sm font-semibold mb-3", children: "Password" }), _jsx(Input, { type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), icon: _jsx(Lock, { className: "w-5 h-5" }) })] }), _jsx(Button, { variant: "primary", fullWidth: true, onClick: handlePasswordSubmit, disabled: password.length < 6, children: "Continue" }), _jsx(Button, { variant: "secondary", fullWidth: true, onClick: () => setStep('email'), className: "mt-3", children: "Back" })] })), step === 'otp' && (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, children: [_jsxs("p", { className: "text-primary-300 text-sm mb-6", children: ["Enter the 6-digit OTP sent to ", _jsx("strong", { children: email })] }), _jsx("div", { className: "mb-6", children: _jsx(Input, { type: "text", placeholder: "000000", value: otp, maxLength: 6, onChange: (e) => setOtp(e.target.value.replace(/\D/g, '')), className: "text-center text-2xl tracking-widest" }) }), _jsx(Button, { variant: "primary", fullWidth: true, onClick: handleOTPSubmit, disabled: otp.length !== 6, children: "Verify OTP" }), _jsx(Button, { variant: "secondary", fullWidth: true, onClick: () => setStep('password'), className: "mt-3", children: "Back" })] })), step === 'biometric' && (_jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(motion.div, { animate: { scale: [1, 1.1, 1] }, transition: { duration: 2, repeat: Infinity }, className: "w-20 h-20 mx-auto bg-primary-700 rounded-full flex items-center justify-center mb-4", children: _jsx(Fingerprint, { className: "w-10 h-10 text-primary-400" }) }), _jsx("p", { className: "text-primary-300 mb-2", children: "Biometric Authentication" }), _jsx("p", { className: "text-sm text-primary-400", children: "Place your finger on the sensor" })] }), _jsx(Button, { variant: "primary", fullWidth: true, onClick: handleBiometricLogin, disabled: isLoading, children: isLoading ? 'Authenticating...' : 'Authenticate' }), _jsx(Button, { variant: "secondary", fullWidth: true, onClick: () => setStep('otp'), className: "mt-3", disabled: isLoading, children: "Back" })] })), _jsx("p", { className: "text-center text-primary-400 text-xs mt-6 pt-6 border-t border-primary-700", children: "Enterprise Cybersecurity Platform" })] }) })] }));
}
