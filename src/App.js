import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./components/Hero.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import './App.css';
function App() {
    return (_jsxs(BrowserRouter, { basename: "/portfolio-stephanie", children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] })] }));
}
export default App;
