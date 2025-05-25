/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      "service_q3j7i0h",
      "template_7l0rktv",
      form.current,
      "IQhSjapZCLfCITjc6"
    ).then(
      (result) => { // Ici, result n'est pas utilisé, mais tu peux le garder pour le typage
        alert("Message envoyé avec succès !");
        form.current?.reset();
      },
      (error) => { // Ici, error n'est pas utilisé, mais tu peux le garder pour le typage
        alert("Une erreur est survenue, veuillez réessayer.");
      }
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <header className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2 tracking-widest">CONTACTS</h2>
            <p className="text-gray-500 text-sm">
              Merci d'avoir visité mon site, à très bientôt !
            </p>
          </header>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Votre nom"
              className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 text-gray-700 placeholder-gray-400 transition"
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Votre email"
              className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 text-gray-700 placeholder-gray-400 transition"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Sujet de la demande"
              className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 text-gray-700 placeholder-gray-400 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="w-full border-b-2 border-indigo-300 focus:border-indigo-600 outline-none py-3 min-h-[100px] resize-none text-gray-700 placeholder-gray-400 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-500 shadow-lg transition"
              aria-label="Envoyer le message"
            >
              SOUMETTRE
            </button>
          </form>

          {/* Bouton retour */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-block text-indigo-600 font-semibold hover:text-purple-700 transition underline"
            >
              ← Retour à l’accueil
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-indigo-700 text-indigo-100 py-4 text-center mt-10 rounded-t-3xl shadow-inner">
        <small className="text-xs font-light">
          &copy; 2025 Stéphanie.B – Tous droits réservés.
        </small>
      </footer>
    </div>
  );
}
