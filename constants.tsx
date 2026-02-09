
import React from 'react';
import { Instagram, Facebook, Mail, Github, Linkedin, Box, Layers, Code2, Layout, Globe, FileCode } from 'lucide-react';
import { Project, SocialLink, Skill } from './types';

export const SOCIAL_LINKS: (SocialLink & { iconComponent: React.ReactNode })[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/martinbucnak',
    icon: 'instagram',
    type: 'link',
    iconComponent: <Instagram size={20} />
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/martinbucnak',
    icon: 'facebook',
    type: 'link',
    iconComponent: <Facebook size={20} />
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/martinbucnak',
    icon: 'linkedin',
    type: 'link',
    iconComponent: <Linkedin size={20} />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/martinbucnak',
    icon: 'github',
    type: 'link',
    iconComponent: <Github size={20} />
  },
  {
    name: 'Email: martin@bucnak.cz',
    url: 'martin@bucnak.cz',
    icon: 'mail',
    type: 'copy',
    iconComponent: <Mail size={20} />
  }
];

export const SKILLS: (Skill & { iconComponent: React.ReactNode })[] = [
  {
    title: '3D Modelování',
    description: 'Vytvářím detailní digitální modely pro vizualizace, architekturu i technické využití.',
    service: 'Nabízím tvorbu modelů na zakázku (Blender, CAD).',
    iconName: 'box',
    iconComponent: <Box size={32} className="text-sky-400" />
  },
  {
    title: '3D Tisk',
    description: 'Realizace vašich nápadů z plastu s důrazem na přesnost a kvalitu povrchu.',
    service: 'Nabízím tisk prototypů, dárků i náhradních dílů.',
    iconName: 'layers',
    iconComponent: <Layers size={32} className="text-sky-400" />
  },
  {
    title: 'Programování (Python)',
    description: 'Vývoj efektivních skriptů, automatizace úloh a analýza dat.',
    service: 'Nabízím tvorbu botů, skriptů pro čištění dat a backend řešení.',
    iconName: 'code',
    iconComponent: <Code2 size={32} className="text-sky-400" />
  }
];

export const TECH_SKILLS: (Skill & { iconComponent: React.ReactNode })[] = [
  {
    title: 'HTML',
    description: 'Strukturování moderních webů podle nejnovějších standardů.',
    service: '',
    iconName: 'layout',
    iconComponent: <Layout size={24} className="text-sky-400" />
  },
  {
    title: 'CSS',
    description: 'Styling s využitím moderních metod (Flexbox, Grid, Tailwind).',
    service: '',
    iconName: 'file-code',
    iconComponent: <FileCode size={24} className="text-sky-400" />
  },
  {
    title: 'JavaScript',
    description: 'Tvorba interaktivních prvků a logiky pro webové aplikace.',
    service: '',
    iconName: 'globe',
    iconComponent: <Globe size={24} className="text-sky-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Moderní Webová Aplikace',
    description: 'Komplexní systém postavený na Reactu pro správu uživatelských dat a vizualizaci statistik v reálném čase.',
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
  },
  {
    id: '2',
    title: 'E-commerce Platforma',
    description: 'Design a vývoj uživatelského rozhraní pro online obchod s důrazem na konverzi a mobilní zařízení.',
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
  },
  {
    id: '3',
    title: 'Mobilní Aplikace "FitTrack"',
    description: 'Návrh intuitivního rozhraní pro fitness aplikaci sledující denní aktivitu a stravu uživatelů.',
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
  },
  {
    id: '4',
    title: 'Branding & Identita',
    description: 'Kompletní vizuální styl pro technologický startup, od loga až po prezentaci značky na sociálních sítích.',
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
  },
  {
    id: '5',
    title: 'UI Design Dashboard',
    description: 'Prototyp administrátorského panelu s pokročilými filtry a interaktivními grafy.',
    imageUrl: 'https://picsum.photos/seed/project5/800/600',
  },
  {
    id: '6',
    title: 'Interaktivní Portfolio',
    description: 'Webová prezentace fotografa s využitím moderních animací a optimalizací pro rychlé načítání.',
    imageUrl: 'https://picsum.photos/seed/project6/800/600',
  }
];
