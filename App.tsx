
import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import SocialLinkButton from './components/SocialLinkButton';
import ProjectCard from './components/ProjectCard';
import { SOCIAL_LINKS, PROJECTS, SKILLS, TECH_SKILLS } from './constants';

const App: React.FC = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);

    const observerOptions = { threshold: 0.1 };
    
    const skillsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSkillsVisible(true);
    }, observerOptions);

    const projectsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProjectsVisible(true);
    }, observerOptions);

    if (skillsRef.current) skillsObserver.observe(skillsRef.current);
    if (projectsRef.current) projectsObserver.observe(projectsRef.current);

    return () => {
      skillsObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-sky-500/30">
      <Navbar />

      {/* Hero & Contact Section */}
      <section id="home" className="relative min-h-screen flex flex-col md:flex-row overflow-hidden pt-16">
        {/* Background Layer */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-20 md:opacity-40 grayscale"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(9, 9, 11, 0.95), rgba(9, 9, 11, 0.7)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Left Side Banner Photo */}
        <div 
          className={`relative z-10 w-full md:w-2/5 lg:w-1/4 h-[400px] md:h-auto bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-800 flex items-end transition-all duration-1000 transform ${
            heroVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}
        >
           <img 
            src="https://picsum.photos/seed/portrait/800/1200" 
            alt="Martin Bucňák" 
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent">
            <h2 className="text-2xl md:text-3xl font-black text-white leading-none mb-1">MARTIN</h2>
            <p className="text-sky-400 font-bold uppercase tracking-widest text-xs md:text-sm">Design & Vývoj</p>
          </div>
        </div>

        {/* Right Side Content & Linktree */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-20">
          <div className="max-w-2xl w-full text-center md:text-left">
            <div className={`transition-all duration-1000 delay-300 transform ${
              heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="inline-block px-3 py-1 bg-sky-400/10 text-sky-400 text-[10px] md:text-xs font-bold rounded-full mb-6 tracking-widest uppercase border border-sky-400/20">
                Portfolio & Kontakty
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                Vítej na stránce <br className="hidden md:block" />
                <span className="text-sky-400 inline-block mt-1">Martina Bucňáka</span>
              </h1>
              <p className="text-zinc-400 text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 mb-12">
                Programátor a 3D tvůrce se zálibou v technologiích a funkčním designu.
              </p>
            </div>

            <div 
              id="contact" 
              className={`flex flex-col items-center md:items-start space-y-4 w-full transition-all duration-1000 delay-500 transform ${
                heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {SOCIAL_LINKS.map((link) => (
                <SocialLinkButton key={link.name} link={link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Services Section */}
      <section 
        id="skills" 
        ref={skillsRef}
        className="bg-zinc-900/20 py-24 md:py-32 px-6 border-y border-zinc-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center md:text-left mb-20 transition-all duration-1000 transform ${
            skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
              Co dokážu
            </h2>
            <div className="w-20 h-1 bg-sky-400 rounded-full mb-10 md:mx-0 mx-auto" />
            
            {/* Main Skills (Full Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {SKILLS.map((skill, idx) => (
                <div 
                  key={skill.title}
                  className={`bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-3xl hover:border-sky-400/30 transition-all duration-700 transform ${
                    skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="mb-6 p-4 bg-zinc-800/50 rounded-2xl inline-block">
                    {skill.iconComponent}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{skill.description}</p>
                  <div className="p-4 bg-sky-400/5 rounded-xl border border-sky-400/10">
                    <p className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">Co nabízím:</p>
                    <p className="text-zinc-300 text-sm italic">{skill.service}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack (Compact Horizontal Fields) */}
            <div className={`transition-all duration-1000 delay-500 transform ${
              skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
               <h3 className="text-xl md:text-2xl font-bold text-zinc-100 mb-8 tracking-tight">Technologie & Nástroje</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                 {TECH_SKILLS.map((skill, idx) => (
                   <div 
                    key={skill.title}
                    className="flex items-center space-x-5 bg-zinc-900/30 border border-zinc-800/40 p-5 rounded-2xl hover:border-sky-400/20 transition-all duration-300 group"
                   >
                     <div className="p-3 bg-zinc-800/60 rounded-xl group-hover:bg-sky-400/10 transition-colors">
                       {skill.iconComponent}
                     </div>
                     <div>
                       <h4 className="text-white font-bold text-base mb-0.5">{skill.title}</h4>
                       <p className="text-zinc-500 text-xs leading-snug">{skill.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={projectsRef}
        className="bg-zinc-950 py-24 md:py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-1000 transform ${
            projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                Moje Projekty
              </h2>
              <p className="text-zinc-400 max-w-md">
                Průřez mou dosavadní tvorbou, kde kombinuji estetiku s technickou precizností.
              </p>
            </div>
            <div className="flex space-x-2">
              <span className="w-12 h-1 bg-sky-400 rounded-full" />
              <span className="w-3 h-1 bg-zinc-800 rounded-full" />
              <span className="w-3 h-1 bg-zinc-800 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900/50 border-t border-zinc-800 py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-10 text-sky-400">
            <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Máte zájem o spolupráci?</h2>
          <div className="flex space-x-4 mb-10">
            {SOCIAL_LINKS.slice(0, 4).map((link) => (
              <a 
                key={link.name} 
                href={link.type === 'link' ? link.url : `mailto:${link.url}`}
                className="p-3 bg-zinc-800/50 border border-zinc-800 rounded-2xl hover:bg-sky-400 hover:border-sky-300 hover:text-white hover:-translate-y-1 transition-all duration-300"
                title={link.name}
              >
                {link.iconComponent}
              </a>
            ))}
          </div>
          <p className="text-zinc-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Martin Bucňák. Vytvořeno s vášní pro design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
