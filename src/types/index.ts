// Global type definitions

export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  location?: string;
  images?: string[];
  [key: string]: unknown;
}

export interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: unknown;
}

export interface Investment {
  id: string;
  name: string;
  amount: number;
  [key: string]: unknown;
}

export interface Project {
  id: string;
  title: string;
  status?: string;
  [key: string]: unknown;
}

// Property Detail Types
export interface PropertyFeature {
  label: string;
  value: string;
}

export interface PropertyAmenity {
  label: string;
  value: string;
}

export interface FloorPlan {
  title: string;
  image: string;
}

export interface PropertyReview {
  name: string;
  date: string;
  comment: string;
  image?: string;
}

export interface PropertyAgent {
  name: string;
  phone: string;
  email: string;
  image: string;
}

export interface PropertyDetail {
  id: number;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  size: string;
  type: string;
  images: string[];
  description: string;
  videoImage: string;
  features: PropertyFeature[];
  amenities: PropertyAmenity[];
  floorPlans: FloorPlan[];
  mapEmbedUrl: string;
  reviews: PropertyReview[];
  agent: PropertyAgent;
}

// Agent Types
export interface AgentContact {
  type: string;
  value: string;
  icon: string;
}

export interface AgentSocials {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Agent {
  id: string | number;
  name: string;
  avatar: string;
  bio: string;
  propertiesListed: number;
  socials: AgentSocials;
  contacts: AgentContact[];
  languages: string[];
}

// Blog Types
export interface Blog {
  id: string | number;
  title: string;
  image: string;
  author: string;
  date: string;
  excerpt: string;
  content?: string;
}
