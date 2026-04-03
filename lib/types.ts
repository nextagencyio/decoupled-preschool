// Shared types
export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalFeatureItem {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeatureItem[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Program
export interface DrupalProgram extends DrupalNode {
  ageRange?: string
  schedule?: string
  tuition?: string
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Staff Member
export interface DrupalStaff extends DrupalNode {
  position?: string
  email?: string
  photo?: DrupalImage
  certifications?: string
}

export interface StaffData {
  nodeStaffItems: {
    nodes: DrupalStaff[]
  }
}

// Event
export interface DrupalEvent extends DrupalNode {
  eventDate?: {
    timestamp: number
  }
  location?: string
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
