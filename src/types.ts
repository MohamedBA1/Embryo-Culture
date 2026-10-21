export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: { en: string; ar: string };
  href: string;
}

export interface MetricItem {
  value: string;
  label: { en: string; ar: string };
  subtext: { en: string; ar: string };
}

export interface SolutionItem {
  id: string;
  number: string;
  title: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  features: { en: string[]; ar: string[] };
  impactMetric: { en: string; ar: string };
  icon: string;
  badge: { en: string; ar: string };
}

export interface GrowthStage {
  step: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  scientificParam: { en: string; ar: string };
  duration: { en: string; ar: string };
  viability: string;
}

export interface ValueItem {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  iconName: string;
}

export interface ShowcaseImage {
  id: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  description: { en: string; ar: string };
  src: string;
  stats: { en: string; ar: string };
}
