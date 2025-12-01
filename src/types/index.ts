// Global type definitions

export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  location?: string;
  images?: string[];
  [key: string]: any;
}

export interface User {
  id: string;
  name: string;
  email: string;
  [key: string]: any;
}

export interface Investment {
  id: string;
  name: string;
  amount: number;
  [key: string]: any;
}

export interface Project {
  id: string;
  title: string;
  status?: string;
  [key: string]: any;
}
