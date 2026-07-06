import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import { Layout, Input, Button } from '../components/Layout';
import { Card } from '../components/Card';
const initialMessages = [
    { id: 1, sender: 'bot', text: 'Hello! I\'m BPAS AI Assistant. How can I help you with your battery today?' },
    { id: 2, sender: 'bot', text: 'I can help with battery health, security scans, ownership transfers, and more.' },
];
export default function ChatbotScreen() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState('');
    const handleSendMessage = () => {
        if (!input.trim())
            return;
        const userMessage = { id: messages.length + 1, sender: 'user', text: input };
        setMessages([...messages, userMessage]);
        setInput('');
        // Simulate bot response
        setTimeout(() => {
            const botResponses = [
                'Your battery health is excellent with an SOH of 94%.',
                'The latest firmware update is v2.5.0. Would you like me to help you update?',
                'You can enable MFA in the Settings page for enhanced security.',
                'Your battery has 3,500+ charge cycles remaining.',
                'I can help you with any questions about your BPAS account.',
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            const botMessage = { id: messages.length + 2, sender: 'bot', text: randomResponse };
            setMessages((prev) => [...prev, botMessage]);
        }, 800);
    };
    return (_jsx(Layout, { title: "AI Assistant", children: _jsxs("div", { className: "flex flex-col h-[calc(100vh-200px)]", children: [_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "mb-8", children: _jsxs("div", { className: "flex items-center gap-3 mb-2", children: [_jsx("div", { className: "text-primary-400", children: _jsx(MessageSquare, { className: "w-8 h-8" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold text-white", children: "AI Assistant" }), _jsx("p", { className: "text-primary-300", children: "24/7 battery support and guidance" })] })] }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, className: "flex-1 overflow-y-auto mb-6 space-y-4 pr-4", children: messages.map((message, idx) => (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: idx * 0.1 }, className: `flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`, children: [message.sender === 'bot' && (_jsx("div", { className: "w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0", children: _jsx(MessageSquare, { className: "w-4 h-4 text-primary-400" }) })), _jsx("div", { className: `max-w-xs px-4 py-3 rounded-2xl ${message.sender === 'user'
                                    ? 'bg-primary-500 text-white rounded-br-none'
                                    : 'bg-primary-700 text-primary-100 rounded-bl-none'}`, children: _jsx("p", { children: message.text }) })] }, message.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: _jsx(Card, { className: "p-4", children: _jsxs("div", { className: "flex gap-3", children: [_jsx(Input, { type: "text", placeholder: "Ask me anything about your battery...", value: input, onChange: (e) => setInput(e.target.value), onKeyPress: (e) => {
                                        if (e.key === 'Enter')
                                            handleSendMessage();
                                    } }), _jsx(Button, { variant: "primary", onClick: handleSendMessage, disabled: !input.trim(), icon: _jsx(Send, { className: "w-5 h-5" }), children: "Send" })] }) }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 }, className: "text-center mt-4", children: _jsx(Button, { variant: "secondary", onClick: () => navigate('/dashboard'), children: "Back to Dashboard" }) })] }) }));
}
