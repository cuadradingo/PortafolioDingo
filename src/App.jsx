import React, { useState } from 'react';
import { Menu, X, Terminal, Layout, Code2, ChevronRight, Mail, User, MousePointerClick, MessageCircle } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89C18.81 3.5 18.71 2 18 2s-2.5.8-4 2a13.38 13.38 0 0 0-7 0C5.5 2.8 4 2 4 2s-.1 1.5.3 2.11A5.5 5.5 0 0 0 3 8c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const NAV_LINKS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Competencias', id: 'competencias' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Contacto', id: 'contacto' },
];

const PROJECTS = [
 {
    id: 1,
    title: 'Ecosistema RetailPro (Web & Kiosco)',
    description: 'Suite escalable diseñada para agilizar operaciones en supermercados y retail. Incluye un panel administrativo para monitoreo de existencias, control histórico de tasas de cambio y automatización en la impresión de etiquetas/habladores. Se complementa con una App Android (Kiosco) para consulta pública de precios.',
    tags: ['React', 'Android', 'APIs', 'Sistemas Retail'],
    // Imágenes para la laptop (App administrativa)
    images: [
      '/img/MENU_FASTO.PNG',
      '/img/CONSULTOR.PNG',
      '/img/HABLADORES.PNG',
      '/img/EXISTENCIAS.PNG',
      '/img/TASADIA.PNG',
      '/img/CONSULTOR.PNG'
    ],
    // Video para el lector de pared (APK Kiosco)
    videoSrc: '/img/lector.mp4' 
  },
  {
    id: 2,
    title: 'NOTILAB',
    description: 'Aplicación web para gestionar personal y monitorear actividades en laboratorios. UI moderna y optimizada para la organización eficiente de áreas de trabajo y responsabilidades.',
    tags: ['Angular 17', 'Nest.js', 'TypeScript', 'HTML/CSS'],
    images: [
      '/img/notilab.PNG',
      '/img/1.PNG',
      '/img/2.PNG',
      '/img/3.PNG'
    ],
  },
  {
    id: 3,
    title: 'GESTLAB & LABCLEANER',
    description: 'Software de escritorio para automatizar la gestión remota de laboratorios (optimizando tiempos) y herramientas de seguridad para la detección de amenazas en dispositivos USB.',
    tags: ['Python', 'MySQL', 'Desktop App'],
    images: [
      '/img/gestlab.PNG',
      '/img/gestorlab.PNG',
      '/img/lab.PNG',
      '/img/labcleaner.PNG',
      '/img/labcleaner2.PNG'
    ],
  },
  {
    id: 4,
    title: 'Crónicas del Catatumbo',
    description: 'Videojuego educativo diseñado para explorar interactivamente la historia local de Maracaibo. Diseño visual, mecánicas de NPCs, inventario y arte pixel art a medida.',
    tags: ['Unity', 'C#', 'Aseprite', 'Pixel Art'],
    images: [
      '/img/CC5.PNG',
      '/img/CC.PNG',
      '/img/CC2.PNG',
      '/img/CC3.PNG',
      '/img/CC4.PNG',
      '/img/CC6.PNG',
      '/img/CC7.PNG',
      '/img/CC8.PNG',
      '/img/CC9.PNG',
      '/img/CC10.PNG',
      '/img/CC11.PNG',
      '/img/CC12.PNG',
      '/img/CC13.PNG',
      '/img/CC14.PNG',
      '/img/CC15.PNG',
      '/img/CC16.PNG',

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

// Componente para la Laptop 3D (Efecto cascada de imágenes)
const Project3DViewer = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="relative w-full max-w-lg mx-auto pt-12 pb-8 px-4 md:px-0">
      
      <div className="absolute -top-4 right-0 flex items-center gap-2 text-emerald-400 text-xs font-bold bg-slate-800/80 px-3 py-1.5 rounded-full border border-emerald-900/50 z-40 animate-bounce">
        <MousePointerClick size={14} />
        <span>Haz clic para interactuar</span>
      </div>

      <div className="relative w-full aspect-video mb-4 preserve-3d">
        {images.map((img, i) => {
          const pos = (i - activeIdx + images.length) % images.length;
          
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

      <div className="relative z-0 opacity-90 transition-transform duration-500 hover:scale-[1.02]">
        <div className="w-1/3 h-2 bg-slate-700 mx-auto rounded-t-sm shadow-inner"></div>
        <div className="w-[110%] -ml-[5%] h-5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-2xl border-t border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-1 left-2 right-2 h-2 bg-slate-500/20 rounded-full blur-[2px]"></div>
        </div>
        <div className="w-[110%] -ml-[5%] h-3 bg-gradient-to-b from-slate-400 to-slate-500 rounded-b-3xl border-b-[3px] border-slate-600 flex justify-center items-start shadow-2xl">
          <div className="w-1/6 h-1.5 bg-slate-600 rounded-b-md shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

// Componente NUEVO para el Lector de Pared con Video
const ScannerMockup = ({ videoSrc }) => {
  return (
    <div className="relative w-full max-w-md mx-auto pt-8 pb-4 px-4 md:px-0 flex flex-col items-center">
      {/* Etiqueta decorativa sobre el hardware */}
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">APK - Fasto Kiosco</span>
      
      {/* Chasis principal del lector */}
      <div className="relative w-full bg-[#111] p-5 md:p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-4 border-[#222]">
        
        {/* Pantalla y Video */}
        {/* Pantalla y Video */}
        <div className="relative aspect-video bg-black rounded overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-slate-800 flex items-center justify-center">
          <video 
            src={videoSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        
        {/* Logo Solux */}
        <div className="w-full text-center mt-4">
          <span className="text-slate-500 font-sans tracking-widest text-xs font-bold uppercase opacity-80">solux</span>
        </div>
      </div>

      {/* Módulo inferior del escáner de código de barras */}
      <div className="relative w-1/3 h-10 bg-[#151515] rounded-b-xl border-b-2 border-l-2 border-r-2 border-[#2a2a2a] shadow-[0_15px_20px_rgba(0,0,0,0.5)] flex flex-col justify-end pb-2 items-center z-10 -mt-1">
        {/* Simulación del láser infrarrojo titilando */}
        <div className="w-4/5 h-[2px] bg-red-500 shadow-[0_0_12px_3px_rgba(239,68,68,0.8)] animate-pulse rounded-full"></div>
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
        
        <section id="inicio" className="max-w-6xl mx-auto px-6 min-h-[90vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Disponible para nuevos proyectos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Desarrollador de Software.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Dingo</span>
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
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden group shadow-2xl border-2 border-slate-700 hover:border-emerald-500/50 transition-colors duration-500 bg-slate-800/30 flex items-center justify-center">
              
              {/* Luces de fondo (se verán si tu png tiene fondo transparente) */}
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-900/40 rounded-full blur-3xl z-0"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-900/40 rounded-full blur-3xl z-0"></div>

              <img 
                src="/img/DINGO.PNG" 
                alt="Avatar Dingo" 
                className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
              
            </div>
          </div>
        </section>

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
                    {/* Contenedor Gráfico (Renderiza Laptop y/o Lector de pared dependiendo de lo que haya en la data) */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center gap-16">
                      {project.images && project.images.length > 0 && (
                        <Project3DViewer images={project.images} />
                      )}
                      
                      {project.videoSrc && (
                        <ScannerMockup videoSrc={project.videoSrc} />
                      )}
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

        <section id="contacto" className="py-24 border-t border-slate-800/50 flex flex-col items-center bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hagamos equipo</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-400">
                ¿Tienes un proyecto o una necesidad operativa en tu empresa? Escríbeme directamente por cualquiera de estos canales.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tarjeta WhatsApp */}
              <a href="https://wa.me/584246412988" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-slate-800/40 border border-slate-700 hover:border-emerald-500 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] group">
                <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">WhatsApp</h4>
                  <p className="text-slate-400 text-sm">Respuesta rápida</p>
                </div>
              </a>

              {/* Tarjeta LinkedIn */}
              <a href="https://linkedin.com/in/jordan-diego" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-slate-800/40 border border-slate-700 hover:border-blue-500 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] group">
                <div className="p-4 bg-blue-500/10 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <LinkedinIcon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">LinkedIn</h4>
                  <p className="text-slate-400 text-sm">Mi perfil profesional</p>
                </div>
              </a>

              {/* Tarjeta Correo */}
              <a href="mailto:diegojordan.rif@gmail.com" className="flex items-center gap-6 p-6 bg-slate-800/40 border border-slate-700 hover:border-rose-500 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)] group">
                <div className="p-4 bg-rose-500/10 text-rose-500 rounded-xl group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Correo Electrónico</h4>
                  <p className="text-slate-400 text-sm">Para propuestas detalladas</p>
                </div>
              </a>

              {/* Tarjeta GitHub */}
              <a href="https://github.com/cuadradingo" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-slate-800/40 border border-slate-700 hover:border-slate-300 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] group">
                <div className="p-4 bg-slate-600/20 text-slate-300 rounded-xl group-hover:bg-slate-200 group-hover:text-slate-900 transition-colors duration-300">
                  <GithubIcon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">GitHub</h4>
                  <p className="text-slate-400 text-sm">Repositorios y código</p>
                </div>
              </a>

            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 text-center py-8">
        <p className="text-slate-500 text-sm">
          <span className="font-bold text-emerald-600">Dingo</span> &copy; 2026.
        </p>
      </footer>
    </div>
  );
}