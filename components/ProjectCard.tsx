
import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group bg-zinc-900/30 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-sky-400/30 transition-all duration-1000 flex flex-col h-full transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-sky-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>
        <div className="pt-4 mt-auto border-t border-zinc-800/50 flex items-center text-xs font-bold uppercase tracking-wider text-sky-400 group-hover:text-sky-300 transition-colors">
          Zobrazit detaily <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
