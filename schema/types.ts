// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeEvent {
  id: string;
  body: { value: string; summary?: string };
  eventDate: { time: string };
  image: { url: string; alt: string; width: number; height: number };
  location: string;
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuresItems: any[];
  featuresSubtitle: string;
  featuresTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  title: string;
}

export interface ParagraphFeatureItem {
  id: string;
  description: { value: string };
  icon: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProgram {
  id: string;
  ageRange: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  schedule: string;
  title: string;
  tuition: string;
}

export interface NodeStaff {
  id: string;
  body: { value: string; summary?: string };
  certifications: string;
  email: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}
