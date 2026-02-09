
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  type: 'link' | 'copy';
}

export interface Skill {
  title: string;
  description: string;
  service: string;
  iconName: string;
}
