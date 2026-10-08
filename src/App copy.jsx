import React, { useState } from 'react';
import { Menu, X, Terminal, Layout, Code2, ChevronRight, Mail, User, Send, MousePointerClick } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Competencias', id: 'competencias' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Contacto', id: 'contacto' },
];

/* 
  Aquí he actualizado tus proyectos para que acepten un arreglo de 'images'.
  He puesto URLs de relleno (placehold.co). 
  PARA USAR TUS IMÁGENES: 
  Solo cambia esas URLs por las rutas de tus imágenes locales (ej: '/assets/fasto1.png')
*/
const PROJECTS = [
  {
    id: 1,
    title: 'Ecosistema FASTO',
    description: 'Sistema administrativo web y app Android para gestión de etiquetas, consulta de precios y publicidad. Resolviendo retos logísticos y operativos a medida (como adaptación de estructuras de códigos de barras).',
    tags: ['React', 'Android', 'APIs', 'UI/UX'],
    images: [
      './public/img/MENU_FASTO.PNG',
      './public/img/CONSULTOR.PNG',
      './public/img/HABLADORES.PNG',
      './public/img/EXISTENCIAS.PNG',
      './public/img/TASADIA.PNG',
      './public/img/CONSULTOR.PNG'
    ],
  },
  {
    id: 2,
    title: 'NOTILAB',
    description: 'Aplicación web para gestionar personal y monitorear actividades en laboratorios. UI moderna y optimizada para la organización eficiente de áreas de trabajo y responsabilidades.',
    tags: ['Angular 17', 'Nest.js', 'TypeScript', 'HTML/CSS'],
    images: [
      'https://placehold.co/800x450/312e81/ffffff?text=NOTILAB+Dashboard',
      'https://placehold.co/800x450/3730a3/ffffff?text=NOTILAB+Personal',
      'https://placehold.co/800x450/4338ca/ffffff?text=NOTILAB+Reportes'
    ],
  },
  {
    id: 3,
    title: 'GESTLAB & LABCLEANER',
    description: 'Software de escritorio para automatizar la gestión remota de laboratorios (optimizando tiempos) y herramientas de seguridad para la detección de amenazas en dispositivos USB.',
    tags: ['Python', 'MySQL', 'Desktop App'],
    images: [
      'https://placehold.co/800x450/0f172a/ffffff?text=GESTLAB+Inicio',
      'https://placehold.co/800x450/1e293b/ffffff?text=LABCLEANER+Scan',
      'https://placehold.co/800x450/334155/ffffff?text=GESTLAB+Ajustes'
    ],
  },
  {
    id: 4,
    title: 'Crónicas del Catatumbo',
    description: 'Videojuego educativo diseñado para explorar interactivamente la historia local de Maracaibo. Diseño visual, mecánicas de NPCs, inventario y arte pixel art a medida.',
    tags: ['Unity', 'C#', 'Aseprite', 'Pixel Art'],
    images: [
      'https://placehold.co/800x450/881337/ffffff?text=Catatumbo+Gameplay',
      'https://placehold.co/800x450/9f1239/ffffff?text=Catatumbo+Inventario',
      'https://placehold.co/800x450/be123c/ffffff?text=Catatumbo+PixelArt'
    ],
  }
];

const SKILLS = [
  'Angular', 'React', 'TypeScript', 'JavaScript', 
  'Python', 'C#', 'Java', 'MySQL', 'PostgreSQL', 
  'Git', 'Unity', 'Aseprite', 'HTML5', 'CSS3', 'Tailwind'
];

const SERVICES = [
  {
    title: 'Sistemas Administrativos',
    description: 'Paneles de control y dashboards a medida para gestionar inventarios, personal y métricas de tu empresa.',
    icon: <Terminal className="w-8 h-8 text-emerald-500" />
  },
  {
    title: 'Landing Pages de Alto Impacto',
    description: 'Diseño e implementación de páginas web rápidas y modernas para captar clientes y destacar tu marca.',
    icon: <Layout className="w-8 h-8 text-emerald-500" />
  },
  {
    title: 'Herramientas a Medida',
    description: 'Aplicaciones de escritorio y soluciones específicas para resolver cuellos de botella operativos (como lectores de precios o seguridad).',
    icon: <Code2 className="w-8 h-8 text-emerald-500" />
  }
];

// Este componente crea el efecto cascada/isométrico interactivo
const Project3DViewer = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="relative w-full max-w-lg mx-auto pt-12 pb-8 px-4 md:px-0">
      
      {/* Indicador de interacción */}
      <div className="absolute -top-4 right-0 flex items-center gap-2 text-emerald-400 text-xs font-bold bg-slate-800/80 px-3 py-1.5 rounded-full border border-emerald-900/50 z-40 animate-bounce">
        <MousePointerClick size={14} />
        <span>Haz clic para interactuar</span>
      </div>

      {/* Contenedor de las pantallas flotantes */}
      <div className="relative w-full aspect-video mb-4 preserve-3d">
        {images.map((img, i) => {
          // Calculamos la posición relativa de la imagen respecto a la activa
          const pos = (i - activeIdx + images.length) % images.length;
          
          // Definimos las clases de Tailwind para cada posición (Frente, Medio, Atrás)
          let transformClasses = '';
          if (pos === 0) {
            transformClasses = 'translate-x-0 translate-y-0 z-30 scale-100 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-2';
          } else if (pos === 1) {
            transformClasses = '-translate-x-4 -translate-y-6 md:-translate-x-12 md:-translate-y-12 z-20 scale-95 opacity-85 shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-8 md:hover:-translate-y-14';
          } else {
            transformClasses = '-translate-x-8 -translate-y-12 md:-translate-x-24 md:-translate-y-24 z-10 scale-90 opacity-60 shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:-translate-y-14 md:hover:-translate-y-26';
          }

          return (
            <img
              key={i}
              src={img}
              alt={`Vista del proyecto ${i + 1}`}
              onClick={() => setActiveIdx(i)}
              className={`absolute inset-0 w-full h-full object-cover rounded-xl border border-slate-600 transition-all duration-700 ease-out cursor-pointer ${transformClasses}`}
            />
          );
        })}
      </div>

      {/* Base de la Laptop construida con CSS */}
      <div className="relative z-0 opacity-90 transition-transform duration-500 hover:scale-[1.02]">
        {/* Bisagra */}
        <div className="w-1/3 h-2 bg-slate-700 mx-auto rounded-t-sm shadow-inner"></div>
        {/* Cuerpo de la laptop */}
        <div className="w-[110%] -ml-[5%] h-5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-2xl border-t border-slate-200 shadow-xl relative overflow-hidden">
          {/* Sombra interna para dar profundidad al teclado */}
          <div className="absolute top-1 left-2 right-2 h-2 bg-slate-500/20 rounded-full blur-[2px]"></div>
        </div>
        {/* Borde frontal / Trackpad */}
        <div className="w-[110%] -ml-[5%] h-3 bg-gradient-to-b from-slate-400 to-slate-500 rounded-b-3xl border-b-[3px] border-slate-600 flex justify-center items-start shadow-2xl">
          <div className="w-1/6 h-1.5 bg-slate-600 rounded-b-md shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-bold tracking-tighter text-white cursor-pointer hover:text-emerald-400 transition-colors"
            onClick={() => scrollToSection('inicio')}
          >
            DINGO<span className="text-emerald-500">.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  activeSection === link.id ? 'text-emerald-500' : 'text-slate-400'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contacto')}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(5,150,105,0.3)] hover:shadow-[0_0_25px_rgba(5,150,105,0.5)]"
            >
              Hablemos
            </button>
          </div>

          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700 p-6 absolute w-full flex flex-col space-y-4 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-medium text-slate-300 hover:text-emerald-400"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="w-full pt-20">
        
        {}
        <section id="inicio" className="max-w-6xl mx-auto px-6 min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Disponible para nuevos proyectos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              ¡Qlq! <br />
              Soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Dingo</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
              Desarrollo Web y Soluciones Administrativas.
            </h2>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Transformo problemas operativos complejos en aplicaciones eficientes. 
              Automatizo procesos, optimizo tiempos y construyo herramientas a medida para que tu negocio fluya sin interrupciones.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(5,150,105,0.3)] flex items-center space-x-2 group"
              >
                <span>Ver mis proyectos</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
              >
                Contactar
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md flex justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 border-2 border-dashed border-slate-700 group-hover:border-emerald-500/50 transition-colors duration-500 rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-4 shadow-2xl">
                <User size={64} className="text-slate-600 group-hover:text-emerald-500 transition-colors duration-500" />
                <div>
                  <h3 className="text-xl font-bold text-slate-300 mb-2">Avatar Pixel Art</h3>
                  <p className="text-sm text-slate-500">
                    Aquí irá la ilustración personalizada tuya junto a Milo y Toño 🐕
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-rose-900/20 rounded-full blur-xl"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-900/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="proyectos" className="py-24 border-t border-slate-800/50 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-24 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="space-y-32">
              {PROJECTS.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={project.id} 
                    className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Contenedor del Mockup 3D */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <Project3DViewer images={project.images} />
                    </div>

                    {/* Información del Proyecto */}
                    <div className="w-full lg:w-1/2 space-y-6 px-4 md:px-0">
                      <div className="inline-flex items-center space-x-2 bg-emerald-900/30 border border-emerald-900/50 px-3 py-1 rounded-full mb-2">
                        <Code2 size={14} className="text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Caso de Estudio {project.id}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-lg text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="pt-4">
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Tecnologías implementadas</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-4 py-2 bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {}
        <section id="competencias" className="py-24 border-t border-slate-800/50 max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full mb-8"></div>
              <p className="text-slate-400 mb-8">
                Herramientas y lenguajes con los que construyo soluciones robustas y escalables.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.map(skill => (
                  <div 
                    key={skill}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-xl font-medium transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div id="servicios" className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4">¿Qué puedo construir?</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full mb-8"></div>
              
              <div className="space-y-4">
                {SERVICES.map((service, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-slate-800/30 border border-slate-800 hover:border-slate-600 rounded-2xl flex gap-6 items-start transition-colors"
                  >
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-700 shadow-inner">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="contacto" className="py-24 border-t border-slate-800/50 flex flex-col items-center bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hagamos equipo</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-400">
                ¿Tienes un proyecto, un "tigrito" o una necesidad operativa en tu empresa? Escríbeme y diseñemos la solución.
              </p>
            </div>

            <div className="w-full max-w-xl bg-slate-800/60 p-8 border border-slate-700 rounded-2xl backdrop-blur-md shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre o empresa"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Correo electrónico</label>
                  <input 
                    type="email" 
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Mensaje</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-[0_0_15px_rgba(5,150,105,0.2)] hover:shadow-[0_0_25px_rgba(5,150,105,0.4)]"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

            <div className="mt-16 flex space-x-6">
              
              <a href="#" className="p-3 bg-slate-800 border border-slate-700 rounded-full text-slate-400 hover:text-emerald-500 hover:bg-slate-700 hover:border-emerald-500/50 transition-all shadow-lg hover:shadow-xl">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 text-center py-8">
        <p className="text-slate-500 text-sm">
          Diseñado y desarrollado con dedicación por <span className="font-bold text-emerald-600">Dingo</span> &copy; 2026.
        </p>
      </footer>
    </div>
  );
}