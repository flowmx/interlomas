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
    Instagram
} from 'lucide-react';

// --- CONFIGURACIÓN DE COLORES ---
// Primario: #2B2C5A (Azul Oscuro)
// Secundario: #4F5F38 (Verde Olivo)
// Acento: #D1BBA2 (Arena/Beige)

// Array de imágenes para el slider del Hero
const heroImages = [
    'interlomas_accesos.jpg', // Imagen del acceso proporcionada
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Imagen de la piscina anterior
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Otra imagen de arquitectura moderna
    'https://images.unsplash.com/photo-1532323544230-7191fd510c59?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'  // Imagen de atardecer/paisaje
];

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Estado del Formulario
    const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulación de envío de datos
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ nombre: '', email: '', telefono: '' });
            setTimeout(() => setIsSubmitted(false), 5000); // Vuelve al formulario después de 5s
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Manejo del scroll para el Navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Manejo del slider automático
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Cambia cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-['Inter',sans-serif] bg-gray-50 text-gray-800 antialiased selection:bg-[#D1BBA2] selection:text-[#2B2C5A]">
            {/* Importar tipografía Inter */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        /* Eliminada la clase .bg-hero-pattern, se maneja en línea */
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

            {/* --- NAVBAR --- */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2B2C5A] shadow-lg py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Logo Placeholder */}
                        <span className="text-2xl font-bold tracking-wider text-[#D1BBA2]">INTERLOMAS</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#concepto" className="text-white hover:text-[#D1BBA2] transition-colors text-sm font-medium tracking-wide">Concepto</a>
                        <a href="#amenidades" className="text-white hover:text-[#D1BBA2] transition-colors text-sm font-medium tracking-wide">Amenidades</a>
                        <a href="#seguridad" className="text-white hover:text-[#D1BBA2] transition-colors text-sm font-medium tracking-wide">Seguridad</a>
                        <a href="#contacto" className="bg-[#D1BBA2] text-[#2B2C5A] px-6 py-2 rounded-full font-semibold hover:bg-white transition-all transform hover:scale-105 shadow-md">
                            Agendar Visita
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#D1BBA2] focus:outline-none">
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#2B2C5A] shadow-xl border-t border-white/10 flex flex-col items-center py-6 space-y-4 animate-fade-in">
                        <a href="#concepto" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg w-full text-center py-2 hover:bg-white/5">Concepto</a>
                        <a href="#amenidades" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg w-full text-center py-2 hover:bg-white/5">Amenidades</a>
                        <a href="#seguridad" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg w-full text-center py-2 hover:bg-white/5">Seguridad</a>
                        <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#D1BBA2] text-[#2B2C5A] px-8 py-3 rounded-full font-semibold mt-4">
                            Agendar Visita
                        </a>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION CON SLIDER --- */}
            <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
                {/* Background Slider Images */}
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                ))}

                {/* Overlay Gradient más oscuro para mejor contraste */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2B2C5A]/60 via-[#2B2C5A]/40 to-[#2B2C5A]/80"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Hero Text */}
                    <div className="text-left animate-slide-up text-white">
                        <span className="uppercase tracking-[0.2em] text-[#D1BBA2] font-semibold text-sm mb-4 block">
                            Bienvenido a la exclusividad
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 shadow-sm">
                            El nivel de vida <br />que tu familia <span className="text-[#D1BBA2]">merece</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg font-light shadow-sm">
                            Descubre un entorno diseñado meticulosamente para trascender. El espacio ideal para construir el patrimonio y las historias que definirán tu futuro.
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-[2px] bg-[#D1BBA2]"></div>
                            <p className="text-sm uppercase tracking-widest text-[#D1BBA2]">Lanzamiento Exclusivo</p>
                        </div>
                    </div>

                    {/* Contact Form Rediseñado - Fondo sólido para resaltar */}
                    <div className="w-full max-w-md mx-auto md:ml-auto md:mr-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        {/* Cambio: Fondo blanco sólido, sombra más pronunciada, texto oscuro */}
                        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
                            <h3 className="text-2xl font-bold text-[#2B2C5A] mb-2">Da el primer paso</h3>
                            <p className="text-gray-600 text-sm mb-6">Regístrate para recibir información privilegiada y disponibilidad.</p>

                            {isSubmitted ? (
                                <div className="bg-[#4F5F38]/10 border border-[#4F5F38]/20 rounded-xl p-6 text-center animate-fade-in my-8 shadow-sm">
                                    <div className="w-16 h-16 bg-[#4F5F38] rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#2B2C5A] mb-2">¡Gracias por tu interés!</h4>
                                    <p className="text-gray-600 text-sm">Nuestros asesores se pondrán en contacto contigo a la brevedad.</p>
                                </div>
                            ) : (
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        {/* Etiquetas oscuras y semibold */}
                                        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1 font-semibold">Nombre Completo</label>
                                        {/* Inputs con fondo claro, borde y state transitions */}
                                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D1BBA2] focus:bg-white focus:ring-2 focus:ring-[#D1BBA2]/30 transition-all shadow-sm" placeholder="Juan Pérez" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1 font-semibold">Correo Electrónico</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D1BBA2] focus:bg-white focus:ring-2 focus:ring-[#D1BBA2]/30 transition-all shadow-sm" placeholder="juan@correo.com" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wide text-gray-500 mb-1 font-semibold">Teléfono</label>
                                        <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D1BBA2] focus:bg-white focus:ring-2 focus:ring-[#D1BBA2]/30 transition-all shadow-sm" placeholder="(555) 123-4567" required />
                                    </div>
                                    {/* Botón con mejor shadow, disabled states, cursor not allowed */}
                                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#D1BBA2] text-[#2B2C5A] hover:bg-[#bba084] font-bold text-lg py-4 rounded-lg mt-6 transition-all flex justify-center items-center shadow-[0_8px_20px_rgb(209,187,162,0.3)] hover:shadow-[0_8px_25px_rgb(209,187,162,0.5)] active:scale-[0.98] group disabled:opacity-70 disabled:cursor-not-allowed">
                                        {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
                                        {!isSubmitting && <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />}
                                    </button>
                                    <p className="text-xs text-center text-gray-400 mt-4">
                                        Tus datos están protegidos y seguros con nosotros.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CONCEPTO SECTION --- */}
            <section id="concepto" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                {/* Se usa la imagen del acceso aquí también para mantener el look and feel */}
                                <img
                                    src="interlomas_accesos.jpg"
                                    alt="Acceso principal de Interlomas"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Elemento decorativo */}
                            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square bg-[#4F5F38]/10 rounded-3xl -z-0"></div>
                        </div>

                        <div>
                            <h2 className="text-[#4F5F38] font-semibold tracking-widest uppercase text-sm mb-3">La Visión</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#2B2C5A] mb-6 leading-tight">
                                Mucho más que un espacio, un estilo de vida.
                            </h3>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Interlomas ha sido concebido para familias que no se conforman. Un desarrollo de autor donde la naturaleza y la arquitectura moderna conviven en perfecta armonía, brindándote el lienzo ideal para materializar tus sueños.
                            </p>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Cada detalle ha sido planeado para ofrecerte privacidad, estatus y un entorno donde cada día se siente como unas vacaciones interminables.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['Entorno planificado', 'Alta plusvalía', 'Comunidad selecta'].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-[#2B2C5A] font-medium">
                                        <span className="w-6 h-6 rounded-full bg-[#D1BBA2] text-[#2B2C5A] flex items-center justify-center mr-3 text-sm">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- AMENIDADES SECTION --- */}
            <section id="amenidades" className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[#4F5F38] font-semibold tracking-widest uppercase text-sm mb-3">Experiencias Interlomas</h2>
                        <h3 className="text-4xl font-bold text-[#2B2C5A] mb-6">Amenidades de Clase Mundial</h3>
                        <p className="text-gray-600 text-lg">
                            Disfruta de instalaciones diseñadas para elevar cada aspecto de tu día a día. Todo lo que necesitas para el esparcimiento, la salud y la convivencia, a unos pasos de tu hogar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Amenidad 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <Waves size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Alberca tipo resort</h4>
                            <p className="text-gray-600">Un oasis cristalino diseñado para la relajación total, con áreas de poca profundidad y carriles de nado.</p>
                        </div>

                        {/* Amenidad 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <Wind size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Pool Deck & Terraza</h4>
                            <p className="text-gray-600">Asoleaderos confortables y mobiliario premium para disfrutar del clima perfecto rodeado de paisajismo.</p>
                        </div>

                        {/* Amenidad 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <Coffee size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Salón social climatizado</h4>
                            <p className="text-gray-600">El escenario ideal para tus eventos más importantes, equipado y diseñado con un gusto exquisito.</p>
                        </div>

                        {/* Amenidad 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <TreePine size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Parque central endémico</h4>
                            <p className="text-gray-600">Extensos jardines con flora local, senderos para caminar y espacios de contemplación que te conectan con la naturaleza.</p>
                        </div>

                        {/* Amenidad 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <Target size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Cancha de pádel</h4>
                            <p className="text-gray-600">Instalaciones deportivas de primer nivel para mantenerte activo y fomentar la convivencia comunitaria.</p>
                        </div>

                        {/* Amenidad 6 (Complementaria - Niños) */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <Baby size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Área infantil interactiva</h4>
                            <p className="text-gray-600">Juegos seguros y estimulantes donde los más pequeños podrán crear sus propias aventuras en un entorno protegido.</p>
                        </div>

                        {/* Amenidad 7 (Complementaria - Mascotas) */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group md:col-start-2 lg:col-start-auto">
                            <div className="w-14 h-14 bg-[#4F5F38]/10 rounded-xl flex items-center justify-center text-[#4F5F38] mb-6 group-hover:bg-[#4F5F38] group-hover:text-white transition-colors">
                                <Dog size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-[#2B2C5A] mb-3">Pet Park exclusivo</h4>
                            <p className="text-gray-600">Porque ellos también son familia, un espacio diseñado especialmente para la diversión y socialización de tus mascotas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEGURIDAD Y OPERACIÓN SECTION --- */}
            <section id="seguridad" className="py-24 bg-[#2B2C5A] text-white relative overflow-hidden">
                {/* Abstract background shape */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#36376c] rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[#D1BBA2] font-semibold tracking-widest uppercase text-sm mb-3">Tranquilidad Absoluta</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Operación inteligente y seguridad de alto nivel.
                            </h3>
                            <p className="text-gray-300 text-lg mb-10">
                                Tu paz mental es nuestra prioridad. Hemos integrado tecnología de vanguardia y protocolos estrictos para garantizar un entorno completamente seguro y de funcionamiento impecable 24/7.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <ShieldCheck className="text-[#D1BBA2]" size={32} />
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold mb-2">Caseta Monumental</h4>
                                        <p className="text-gray-400">Control de acceso estricto con personal capacitado, asegurando que solo residentes e invitados autorizados ingresen a la comunidad.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Video className="text-[#D1BBA2]" size={32} />
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold mb-2">Videovigilancia CCTV</h4>
                                        <p className="text-gray-400">Sistema de cámaras HD perimetrales y en puntos de acceso, con monitoreo constante desde la caseta principal.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Smartphone className="text-[#D1BBA2]" size={32} />
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="text-xl font-bold mb-2">Acceso Inteligente</h4>
                                        <p className="text-gray-400">Portón automatizado con sistema de apertura remota vía app móvil y telefonía, brindándote comodidad sin sacrificar seguridad.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt=""
                                    className="w-full h-full object-cover opacity-80"
                                />
                                {/* Overlay gradient para que combine mejor con el azul */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2C5A] via-transparent to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-slide-up" style={{ animationDelay: '0.5s' }}>
                                <div className="flex items-center space-x-4 mb-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[#2B2C5A] font-bold">Monitoreo 24/7</span>
                                </div>
                                <p className="text-gray-500 text-sm">Sistemas activos y operando para tu seguridad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GALLERY / LIFESTYLE --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#2B2C5A] mb-4">La Vida en Interlomas</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Imagina tus días rodeado de belleza, confort y momentos inolvidables.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative shadow-md">
                            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sala de estar de lujo con vista panorámica" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h4 className="text-xl font-bold">Interiores de Autor</h4>
                                <p className="text-sm text-gray-200">Espacios diseñados para inspirar</p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden group relative aspect-square shadow-sm">
                            <img src="https://images.unsplash.com/photo-1576013551627-11971f366185?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Detalles de acabados premium en cocina" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="rounded-2xl overflow-hidden group relative aspect-square shadow-sm">
                            <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Área de comedor iluminada naturalmente" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="rounded-2xl overflow-hidden group relative aspect-square shadow-sm">
                            <img src="https://images.unsplash.com/photo-1555529733-0e670560f4e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Baño principal estilo spa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="rounded-2xl overflow-hidden group relative aspect-square shadow-sm">
                            <img src="https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Paisajismo y vista nocturna" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA BOTTOM --- */}
            <section id="contacto" className="py-20 bg-[#D1BBA2] text-[#2B2C5A]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
                    <p className="text-lg md:text-xl mb-10 text-[#2B2C5A]/80">
                        Agenda una cita con nuestros asesores y descubre personalmente por qué Interlomas es la inversión de vida que estabas buscando.
                    </p>
                    <button className="bg-[#2B2C5A] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl">
                        Agendar un recorrido VIP
                    </button>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-[#1a1b38] text-white py-16 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">

                    <div>
                        <h3 className="text-2xl font-bold tracking-wider text-[#D1BBA2] mb-6">INTERLOMAS</h3>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Desarrollando entornos extraordinarios para familias extraordinarias. El nuevo estándar en exclusividad.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D1BBA2] hover:text-[#2B2C5A] hover:scale-110 transform cursor-pointer transition-all duration-300 shadow-md">
                                <Facebook size={18} />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D1BBA2] hover:text-[#2B2C5A] hover:scale-110 transform cursor-pointer transition-all duration-300 shadow-md">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="#concepto" className="text-gray-400 hover:text-[#D1BBA2] transition-colors">Nuestro Concepto</a></li>
                            <li><a href="#amenidades" className="text-gray-400 hover:text-[#D1BBA2] transition-colors">Amenidades Premium</a></li>
                            <li><a href="#seguridad" className="text-gray-400 hover:text-[#D1BBA2] transition-colors">Seguridad</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#D1BBA2] transition-colors">Aviso de Privacidad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-[#D1BBA2] mr-3 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-400">Av. Principal Interlomas 123, Zona Exclusiva.</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-[#D1BBA2] mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">+52 (55) 1234 5678</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-[#D1BBA2] mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">hola@interlomas.com</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Interlomas Residencial Premium. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
}