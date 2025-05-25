import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar.js';
export default function Layout() {
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';
    return (_jsxs("div", { className: "relative font-sans", children: [!isContactPage && _jsx(Navbar, {}), _jsx("main", { children: _jsx(Outlet, {}) })] }));
}
