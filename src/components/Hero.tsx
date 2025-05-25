import { Instagram, Facebook, Mail, YoutubeIcon } from "lucide-react";
import profileImage from "../assets/stephan1.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">
      {/* Image de fond bien cadrée */}
      <div className="absolute inset-0 flex justify-center items-start">
        <img
          src={profileImage}
          alt="Stéphanie"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 shadow-xl"
          style={{
            objectPosition: "center 20%", // Ajuste pour bien voir le visage
            marginTop: 0
          }}
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 md:px-20 py-10 pt-24">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-xl w-full space-y-6 bg-white/80 rounded-lg p-8 shadow-lg backdrop-blur-sm">
            <h2 className="text-lg text-gray-600 tracking-wide">Enchantée, je suis</h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 leading-tight drop-shadow-sm">
              Stéphanie.B
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Directrice Générale Adjointe chez{" "}
              <span className="font-semibold text-blue-700">RENAPROV Finance S.A</span>,<br />
              créatrice de contenu et entrepreneure.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto mb-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 pt-6">
            <div className="flex gap-6">
              <a href="https://www.instagram.com/stephy_bissai?igsh=MWExNTVtYTEwejIwbw==" aria-label="Instagram">
                <Instagram size={24} className="text-gray-800 hover:text-pink-500 transition" />
              </a>
              <a href="#" aria-label="Mail">
                <Mail size={24} className="text-gray-800 hover:text-blue-500 transition" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573837800433&__tn__=-UC*F" aria-label="Facebook">
                <Facebook size={24} className="text-gray-800 hover:text-blue-700 transition" />
              </a>
              <a href="http://www.youtube.com/@MarcherAvecChrist" aria-label="YouTube">
                <YoutubeIcon size={24} className="text-gray-800 hover:text-red-600 transition" />
              </a>
            </div>
            <p className="text-sm text-gray-800 text-center md:text-right">
              © 2025 Stéphanie.B – Tous droits réservés
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
