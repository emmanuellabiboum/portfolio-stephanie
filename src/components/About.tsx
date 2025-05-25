import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Importer toutes les images utilisées
import step2 from "../assets/step2.jpg";
import macCover from "../assets/MAC.jpg";
// Pour les autres images de projets, tu dois les importer aussi :
// import stephynoursCover from "../assets/stephynours-cover.jpg";
// import nissiCover from "../assets/restaurant-nissi.jpg";
// Si tu ne veux pas gérer ces imports, tu peux mettre les images dans "public" et utiliser "/assets/stephynours-cover.jpg" etc.

const About = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const openImage = (src: string) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800">
            {/* Section vidéo */}
            <section className="relative h-64 w-full">
                <div className="absolute inset-0">
                    <video
                        ref={videoRef}
                        muted
                        className="w-full h-full object-cover object-top"
                        loop
                    >
                        <source src="/videos/intro.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/10" />
                </div>
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">À propos de moi</h1>
                    <button
                        onClick={togglePlay}
                        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                        aria-label={isPlaying ? "Pause la vidéo" : "Lire la vidéo"}
                    >
                        {isPlaying ? "Pause la vidéo" : "Lire la vidéo"}
                    </button>
                </div>
            </section>

            {/* Section présentation */}
            <section className="py-16 px-6 md:px-20 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={step2}
                        alt="Stéphanie"
                        className="rounded-2xl shadow-lg w-full"
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Une vision. Un parcours.</h2>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Je suis Stéphanie.B, passionnée par l’entrepreneuriat, la finance et la création de contenu...
                        </p>
                    </div>
                </div>
            </section>

            {/* Section valeurs */}
            <section className="bg-[#f8fafc] py-16 px-6 md:px-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Authenticité</h3>
                        <p className="text-gray-600 text-sm">Fidèle à mes convictions dans tous mes projets.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Leadership</h3>
                        <p className="text-gray-600 text-sm">Esprit d’initiative et vision à long terme.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-800">Foi & Vision</h3>
                        <p className="text-gray-600 text-sm">Mon ancrage spirituel m'inspire au quotidien.</p>
                    </div>
                </div>
            </section>

            {/* Section projets */}
            <section className="py-16 px-6 md:px-20 bg-white">
                <h2 className="text-4xl font-bold mb-10 text-center">Mes projets</h2>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {/* Projet 1 */}
                    <div
                        className="border rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
                        onClick={() => openImage("/path/to/stephynours-cover.jpg")}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-center">STEPHYNOURS</h3>
                        <p className="text-gray-600 mb-4">
                            Un livre de coloriage unique pour enfants, alliant créativité et éducation.
                        </p>
                        <img
                            src="/path/to/stephynours-cover.jpg"
                            alt="STEPHYNOURS - Livre de coloriage"
                            className="rounded-md w-full h-48 object-cover"
                        />
                    </div>

                    {/* Projet 2 */}
                    <div
                        className="border rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
                        onClick={() => openImage("/path/to/restaurant-nissi.jpg")}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-center">RESTAURANT LE NISSI</h3>
                        <p className="text-gray-600 mb-4">
                            Une expérience culinaire d’exception alliant saveurs traditionnelles et modernité.
                        </p>
                        <img
                            src="/path/to/restaurant-nissi.jpg"
                            alt="RESTAURANT NISSI"
                            className="rounded-md w-full h-48 object-cover"
                        />
                    </div>

                    {/* Projet 3 */}
                    <div
                        className="border rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
                        onClick={() => openImage(macCover)}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-center">MAC</h3>
                        <p className="text-gray-600 mb-4">
                            Une émission chrétienne qui inspire, édifie et connecte la communauté.
                        </p>
                        <img
                            src={macCover}
                            alt="MAC émission chrétienne"
                            className="rounded-md w-full h-48 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Modal pour voir l'image en grand */}
            {modalImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
                >
                    <div className="relative">
                        <img
                            src={modalImage}
                            alt="Agrandissement"
                            className="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg"
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                            className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition"
                            aria-label="Fermer la fenêtre"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Citation ou témoignage */}
            <section className="py-10 px-6 bg-white">
                <blockquote className="text-center italic text-gray-500 text-lg max-w-2xl mx-auto">
                    "L'excellence naît de la passion, de l'engagement et de la foi en ce que l’on fait."
                </blockquote>
            </section>

            {/* Bouton retour page d’accueil */}
            <div className="text-center py-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-800 transition"
                >
                    <ArrowLeft size={18} /> Revenir à l’accueil
                </Link>
            </div>
        </div>
    );
};

export default About;
