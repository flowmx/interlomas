import React, { useState, useEffect } from 'react';
import {
    Waves,
    Wind,
    Coffee,
    TreePine,
    Target,
    Baby,
    Dog,
    ShieldCheck,
    Video,
    Smartphone,
    ChevronRight,
    Menu,
    X,
    MapPin,
    Mail,
    Phone,
    Facebook,
    Instagram,
    ArrowRight
} from 'lucide-react';

const heroImages = [
    'hero_img1.jpg',
    'hero_img2.jpg',
    'hero_img3.jpg'
];

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ nombre: '', email: '', telefono: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-['Inter',sans-serif] bg-white text-[#1a1b38] antialiased selection:bg-[#F4F1EA] selection:text-[#1a1b38]">
            {/* Global Styles for clean animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        .animate-fade-in { animation: fadeIn 1.2s ease-out forwards; }
        .animate-slide-up { animation: slideUp 1s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

            {/* --- NAVBAR --- */}
            <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white border-gray-100 py-4 shadow-sm' : 'bg-transparent border-transparent py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src={isScrolled ? 'interlomas_logo_color.svg' : 'interlomas_logo_blanco.svg'}
                            alt="Interlomas"
                            className="h-6 md:h-8 w-auto transition-opacity duration-500"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12 items-center">
                        <a href="#concepto" className={`text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity ${isScrolled ? 'text-[#1a1b38]' : 'text-white'}`}>Concepto</a>
                        <a href="#amenidades" className={`text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity ${isScrolled ? 'text-[#1a1b38]' : 'text-white'}`}>Amenidades</a>
                        <a href="#seguridad" className={`text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity ${isScrolled ? 'text-[#1a1b38]' : 'text-white'}`}>Seguridad</a>
                        <a href="#contacto" className={`text-xs tracking-[0.15em] uppercase px-8 py-3 border transition-all duration-500 ${isScrolled ? 'border-[#1a1b38] text-[#1a1b38] hover:bg-[#1a1b38] hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#1a1b38]'}`}>
                            Agendar Visita
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`focus:outline-none transition-colors duration-500 ${isScrolled ? 'text-[#1a1b38]' : 'text-white'}`}>
                            {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 flex flex-col items-center py-10 space-y-8 animate-fade-in shadow-xl">
                        <a href="#concepto" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a1b38] text-sm tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">Concepto</a>
                        <a href="#amenidades" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a1b38] text-sm tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">Amenidades</a>
                        <a href="#seguridad" onClick={() => setIsMobileMenuOpen(false)} className="text-[#1a1b38] text-sm tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">Seguridad</a>
                        <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="border border-[#1a1b38] text-[#1a1b38] px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#1a1b38] hover:text-white transition-colors mt-4">
                            Agendar Visita
                        </a>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION --- (Clean, Typographic, Full Screen Image) */}
            <section className="relative h-screen flex items-end pb-24 md:pb-32 overflow-hidden">
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                        style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                ))}

                {/* Subtle dark gradient only at bottom for white text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b38]/80 via-[#1a1b38]/10 to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                    <div className="max-w-3xl animate-slide-up">
                        <p className="uppercase tracking-[0.3em] text-white/90 text-xs md:text-sm font-medium mb-6">
                            Lanzamiento Exclusivo
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-10">
                            Vive el nivel que <br />mereces.
                        </h1>
                        <a href="#contacto" className="inline-flex items-center space-x-4 text-white hover:text-white/70 transition-colors group">
                            <span className="text-sm tracking-[0.15em] uppercase">Descubrir más</span>
                            <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-500"></div>
                        </a>
                    </div>
                </div>
            </section>

            {/* --- CONTACT / ENQUIRE SECTION --- (Moved down for a cleaner hero) */}
            <section id="contacto" className="py-24 bg-[#F8F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-light text-[#1a1b38] mb-8 leading-[1.2]">
                            Comienza tu historia en Interlomas.
                        </h2>
                        <p className="text-gray-500 font-light text-lg leading-relaxed mb-6">
                            Regístrate para asegurar tu lugar en nuestra próxima visita guiada. Recibe atención personalizada, planos detallados y opciones de financiamiento VIP.
                        </p>
                    </div>

                    <div className="bg-white p-10 md:p-14 border border-gray-100 shadow-sm relative">
                        {isSubmitted ? (
                            <div className="text-center animate-fade-in py-12">
                                <div className="w-16 h-16 border border-[#1a1b38] rounded-full flex items-center justify-center mx-auto mb-6 text-[#1a1b38]">
                                    <ShieldCheck strokeWidth={1} size={32} />
                                </div>
                                <h4 className="text-2xl font-light text-[#1a1b38] mb-3">Gracias por tu interés</h4>
                                <p className="text-gray-500 text-sm font-light">Nuestro concierge exclusivo se pondrá en contacto pronto.</p>
                            </div>
                        ) : (
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Nombre Completo</label>
                                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1a1b38] font-light placeholder-gray-300 focus:outline-none focus:border-[#1a1b38] transition-colors" placeholder="Ej. Ana García" required />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Correo Electrónico</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1a1b38] font-light placeholder-gray-300 focus:outline-none focus:border-[#1a1b38] transition-colors" placeholder="ana@ejemplo.com" required />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Teléfono</label>
                                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full bg-transparent border-b border-gray-200 py-3 text-[#1a1b38] font-light placeholder-gray-300 focus:outline-none focus:border-[#1a1b38] transition-colors" placeholder="(555) 123-4567" required />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="w-full bg-[#1a1b38] text-white hover:bg-black font-light tracking-[0.15em] text-sm uppercase py-5 mt-6 transition-all flex justify-between items-center px-8 border border-transparent disabled:opacity-60 group">
                                    <span>{isSubmitting ? 'Enviando...' : 'Solicitar Información'}</span>
                                    {!isSubmitting && <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} strokeWidth={1} />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* --- CONCEPTO SECTION --- (Premium Whitespace, Clean Photo alignment) */}
            <section id="concepto" className="py-32 md:py-48 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden bg-gray-100">
                            <img
                                src="interlomas_accesos.jpg"
                                alt="Acceso principal Interlomas"
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                            />
                        </div>
                        {/* Asymmetrical soft block under image for depth */}
                        <div className="hidden lg:block absolute -right-12 -bottom-16 w-1/2 aspect-square bg-[#F8F7F5] -z-10"></div>
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-gray-400 tracking-[0.2em] uppercase text-xs mb-8 font-medium">La Visión</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1b38] mb-10 leading-[1.2]">
                            Un estilo de vida, <br />redefinido.
                        </h3>
                        <div className="text-gray-500 font-light text-lg space-y-6 leading-relaxed mb-12">
                            <p>
                                Interlomas ha sido concebido para familias que no se conforman con lo ordinario. Un desarrollo arquitectónico de autor donde la naturaleza y la modernidad conviven en perfecta armonía.
                            </p>
                            <p>
                                Cada línea de su diseño y cada espacio de sus amenidades han sido planeados para ofrecerte un santuario de privacidad y estatus inigualable.
                            </p>
                        </div>
                        <ul className="space-y-5">
                            {['Entorno planificado', 'Alta plusvalía en la zona', 'Comunidad selecta asegurada'].map((item, idx) => (
                                <li key={idx} className="flex items-center text-[#1a1b38] font-light">
                                    <div className="w-1 h-1 rounded-full bg-[#1a1b38] mr-5"></div>
                                    <span className="text-sm tracking-wide">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- AMENIDADES SECTION --- (Clean Typography layout instead of boxes) */}
            <section id="amenidades" className="py-32 md:py-48 bg-[#F8F7F5]">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="mb-24 lg:mb-32">
                        <h2 className="text-gray-400 tracking-[0.2em] uppercase text-xs mb-6 font-medium">Experiencias</h2>
                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1a1b38] leading-[1.1] max-w-2xl">
                            Amenidades<br />de Clase Mundial.
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
                        {[
                            { icon: Waves, title: "Alberca Resort", desc: "Oasis de relajación total con diseño minimalista, carriles de nado y baja profundidad." },
                            { icon: Wind, title: "Pool Deck", desc: "Asoleaderos de diseñador con exquisito confort y vistas impresionantes al paisajismo." },
                            { icon: Coffee, title: "Salón Social", desc: "Escenario climatizado diseñado para tus eventos más selectos con mobiliario premium." },
                            { icon: TreePine, title: "Parque Endémico", desc: "Extensos jardines con flora nativa y senderos que fomentan la conexión con la naturaleza." },
                            { icon: Target, title: "Cancha de Pádel", desc: "Instalaciones deportivas de alto estándar que elevan tu actividad física comunitaria." },
                            { icon: Baby, title: "Área Infantil", desc: "Juegos interactivos de primer nivel donde la seguridad y el diseño estimulan su creatividad." },
                            { icon: Dog, title: "Pet Park VIP", desc: "Exclusivos espacios abiertos con equipamiento especializado para la convivencia de tus mascotas." }
                        ].map((amenity, idx) => (
                            <div key={idx} className="group pr-8">
                                <amenity.icon size={40} strokeWidth={0.8} className="text-[#1a1b38] mb-8 transition-transform duration-500 group-hover:-translate-y-2" />
                                <h4 className="text-2xl font-light text-[#1a1b38] mb-4">{amenity.title}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{amenity.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SEGURIDAD Y OPERACIÓN --- (Light Version, Elegant) */}
            <section id="seguridad" className="py-32 md:py-48 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <h2 className="text-gray-400 tracking-[0.2em] uppercase text-xs mb-6 font-medium">Seguridad Privada</h2>
                            <h3 className="text-4xl md:text-5xl font-light text-[#1a1b38] mb-10 leading-[1.2]">
                                Paz mental absoluta.
                            </h3>
                            <p className="text-gray-500 font-light text-lg mb-16 leading-relaxed">
                                Hemos integrado tecnología residencial de vanguardia y protocolos estrictos para garantizar un entorno completamente libre de preocupaciones, operando 24/7.
                            </p>

                            <div className="space-y-12">
                                <div className="flex gap-6 items-start group">
                                    <ShieldCheck size={32} strokeWidth={0.8} className="text-[#1a1b38] shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-medium text-[#1a1b38] mb-3">Caseta Monumental</h4>
                                        <p className="text-gray-500 font-light leading-relaxed">Personal estrictamente capacitado verificando cada acceso.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <Video size={32} strokeWidth={0.8} className="text-[#1a1b38] shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-medium text-[#1a1b38] mb-3">Sistema CCTV</h4>
                                        <p className="text-gray-500 font-light leading-relaxed">Circuito cerrado de alta definición protegiendo todo el perímetro municipal.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start group">
                                    <Smartphone size={32} strokeWidth={0.8} className="text-[#1a1b38] shrink-0 mt-1 transition-transform group-hover:scale-110" />
                                    <div>
                                        <h4 className="text-xl font-medium text-[#1a1b38] mb-3">Acceso Smart</h4>
                                        <p className="text-gray-500 font-light leading-relaxed">App exclusiva para residentes. Permite control remoto y alertas instantáneas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2 relative">
                            <div className="bg-gray-100 aspect-[4/5] object-cover md:aspect-auto md:h-[800px] overflow-hidden">
                                <img
                                    src="interlomas_seguridad.jpg"
                                    alt="Estética Arquitectónica Segura"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-6 md:bottom-24 md:-left-12 bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 max-w-xs">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[#1a1b38] font-medium tracking-widest text-xs uppercase">Conectado 24/7</span>
                                </div>
                                <p className="text-gray-400 font-light text-sm">Monitoreo activo para garantizar tu confort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GALLERY (Editorial Masonry Layout) --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-light text-[#1a1b38] mb-6 leading-tight">La vida en perspectivas exclusivas.</h2>
                        </div>
                        <a href="#contacto" className="hidden md:flex items-center space-x-4 text-[#1a1b38] group">
                            <span className="text-xs uppercase tracking-[0.2em] font-medium">Ver Galería</span>
                            <ArrowRight size={18} strokeWidth={1} className="transition-transform group-hover:translate-x-2" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="md:col-span-8 aspect-[16/10] bg-gray-100 flex overflow-hidden group">
                            <img src="interlomas_amenidades1.jpg" alt="Sala panorámica" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        <div className="md:col-span-4 aspect-square md:aspect-auto bg-gray-100 flex overflow-hidden group">
                            <img src="interlomas_amenidades2.jpg" alt="Acabados cocina" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        <div className="md:col-span-5 aspect-square bg-gray-100 flex overflow-hidden group">
                            <img src="interlomas_amenidades3.jpg" alt="Detalle balcón/baño" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        <div className="md:col-span-7 aspect-[16/10] md:aspect-auto bg-gray-100 flex overflow-hidden group">
                            <img src="interlomas_amenidades4.jpg" alt="Exteriores noche" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-100 pb-20">
                    <div className="md:col-span-2">
                        <img src="interlomas_logo_color.svg" alt="Interlomas" className="h-8 md:h-10 w-auto mb-6" />
                        <p className="text-gray-500 font-light text-lg mb-8 max-w-md leading-relaxed">
                            Desarrollando los entornos más extraordinarios para el estándar más exigente. Un nivel de exclusividad que debes experimentar.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-[#1a1b38] transition-colors"><Facebook strokeWidth={1.5} size={22} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#1a1b38] transition-colors"><Instagram strokeWidth={1.5} size={22} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#1a1b38] font-medium tracking-[0.15em] text-xs uppercase mb-8">Navegación</h4>
                        <ul className="space-y-4">
                            <li><a href="#concepto" className="text-gray-500 font-light hover:text-[#1a1b38] transition-colors">Nuestro Concepto</a></li>
                            <li><a href="#amenidades" className="text-gray-500 font-light hover:text-[#1a1b38] transition-colors">Experiencias</a></li>
                            <li><a href="#seguridad" className="text-gray-500 font-light hover:text-[#1a1b38] transition-colors">Tranquilidad 24/7</a></li>
                            <li><a href="#contacto" className="text-gray-500 font-light hover:text-[#1a1b38] transition-colors">Agendar Recorrido</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#1a1b38] font-medium tracking-[0.15em] text-xs uppercase mb-8">Contacto</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <MapPin className="text-[#1a1b38] shrink-0 mr-4 mt-0.5" strokeWidth={1} size={20} />
                                <span className="text-gray-500 font-light text-sm">Av. Interlomas 123, Zona Exclusiva.</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-[#1a1b38] shrink-0 mr-4" strokeWidth={1} size={20} />
                                <span className="text-gray-500 font-light text-sm">+52 (55) 1234 5678</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-[#1a1b38] shrink-0 mr-4" strokeWidth={1} size={20} />
                                <span className="text-gray-500 font-light text-sm">hola@interlomas.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 font-light text-xs mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Interlomas Residencial. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6 text-xs text-gray-400 font-light">
                        <a href="#" className="hover:text-[#1a1b38] transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-[#1a1b38] transition-colors">Términos de Uso</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}