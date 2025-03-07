export interface TechItem {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  name: string;
  internalPage: boolean;
  logo?: string;
  siteName?: string;
  description?: string;
  images?: string[];
  techStack?: TechItem[];
}
