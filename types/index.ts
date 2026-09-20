export interface CaseStudyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  tagline: string;
  summary: string;
  heroMetric: {
    value: string;
    label: string;
  };
  metrics: CaseStudyMetric[];
  techStack: string[];
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  keyAchievements: string[];
  mockupType: "aura" | "apex" | "nova" | "quantum";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface TechItem {
  name: string;
  role: string;
  badge: string;
  category: string;
  description: string;
  metricsOrHighlight?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: TechItem[];
}

export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  description: string;
  iconName: string;
  change?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyOrWebsite: string;
  scope: string[];
  budget: string;
  projectDetails: string;
}
