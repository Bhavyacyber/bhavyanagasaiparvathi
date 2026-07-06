import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioScreen from './screens/PortfolioScreen';
export const AuthContext = createContext(undefined);
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const handleLogin = (email) => {
        setIsLoggedIn(true);
        setUser({ email, id: 'USR-' + Math.random().toString(36).substr(2, 9) });
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
    };
    return (_jsx(AuthContext.Provider, { value: { isLoggedIn, user, login: handleLogin, logout: handleLogout }, children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(PortfolioScreen, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }) }) }));
}
export default App;
