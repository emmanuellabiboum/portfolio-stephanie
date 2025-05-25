import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
export default function Contact() {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current)
            return;
        emailjs.sendForm("service_q3j7i0h", "template_7l0rktv", form.current, "IQhSjapZCLfCITjc6").then((_result) => {
            alert("Message envoyé avec succès !");
            form.current?.reset();
        }, () => {
            alert("Une erreur est survenue, veuillez réessayer.");
        });
    };
    return (_jsxs("div", { className: "flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100", children: [_jsx("div", { className: "flex-grow flex flex-col items-center justify-center px-4", children: _jsxs("div", { className: "bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md", children: [_jsxs("header", { className: "mb-10 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold text-indigo-700 mb-2 tracking-widest", children: "CONTACTS" }), _jsx("p", { className: "text-gray-500 text-sm", children: "Merci d'avoir visit\u00E9 mon site, \u00E0 tr\u00E8s bient\u00F4t !" })] }), _jsxs("form", { ref: form, onSubmit: sendEmail, className: "space-y-6", children: [_jsx("input", { type: "text", name: "from_name", placeholder: "Votre nom", className: "w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 text-gray-700 placeholder-gray-400 transition", required: true }), _jsx("input", { type: "email", name: "reply_to", placeholder: "Votre email", className: "w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 text-gray-700 placeholder-gray-400 transition", required: true }), _jsx("input", { type: "text", name: "subject", placeholder: "Sujet de la demande", className: "w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 text-gray-700 placeholder-gray-400 transition", required: true }), _jsx("textarea", { name: "message", placeholder: "Votre message", className: "w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 min-h-[100px] resize-none text-gray-700 placeholder-gray-400 transition", required: true }), _jsx("button", { type: "submit", className: "w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-500 shadow-lg transition", children: "SOUMETTRE" })] }), _jsx("div", { className: "text-center mt-8", children: _jsx(Link, { to: "/", className: "inline-block text-indigo-600 font-semibold hover:text-purple-700 transition underline", children: "\u2190 Retour \u00E0 l\u2019accueil" }) })] }) }), _jsx("footer", { className: "bg-indigo-700 text-indigo-100 py-4 text-center mt-10 rounded-t-3xl shadow-inner", children: _jsx("small", { className: "text-xs font-light", children: "\u00A9 2025 St\u00E9phanie.B \u2013 Tous droits r\u00E9serv\u00E9s." }) })] }));
}
