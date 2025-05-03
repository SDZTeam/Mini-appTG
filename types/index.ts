// Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  type: 'game' | 'bot' | 'website' | 'tool';
  link?: string;
  githubLink?: string;
}

// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

// Game question type
export interface GameQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    title: string;
    imageUrl: string;
    isCorrect: boolean;
    description: string;
  }[];
  fact: string;
}

// FAQ item type
export interface FAQItem {
  question: string;
  answer: string;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  contact: string;
  message: string;
}