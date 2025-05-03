import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ChatMaster Bot',
    description: 'An AI-powered Telegram bot that helps manage group conversations and provides useful utilities.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
    tags: ['AI', 'Telegram', 'Node.js'],
    type: 'bot',
    link: 'https://t.me/chatmaster_bot'
  },
  {
    id: '2',
    title: 'TaskFlow',
    description: 'A project management mini-app for Telegram that helps teams organize tasks and track progress.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000',
    tags: ['Project Management', 'React', 'Firebase'],
    type: 'tool',
    githubLink: 'https://github.com/studio/taskflow'
  },
  {
    id: '3',
    title: 'Memory Match',
    description: 'A fun memory card game that can be played directly in Telegram.',
    imageUrl: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1000',
    tags: ['Game', 'JavaScript', 'HTML5'],
    type: 'game',
    link: 'https://t.me/memorymatch_bot'
  },
  {
    id: '4',
    title: 'Creative Agency Website',
    description: 'A modern, responsive website for a creative agency with portfolio showcase and contact forms.',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000',
    tags: ['Website', 'React', 'Tailwind'],
    type: 'website',
    link: 'https://creative-agency.com'
  },
  {
    id: '5',
    title: 'Weather Bot',
    description: 'A Telegram bot that provides accurate weather forecasts and alerts for any location.',
    imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000',
    tags: ['Weather API', 'Node.js', 'Telegram'],
    type: 'bot',
    link: 'https://t.me/weatheralert_bot'
  },
  {
    id: '6',
    title: 'E-commerce Platform',
    description: 'A complete e-commerce solution with product catalog, cart, and payment processing.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000',
    tags: ['E-commerce', 'React', 'Node.js', 'Stripe'],
    type: 'website',
    link: 'https://shop-platform.com'
  },
  {
    id: '7',
    title: 'Quiz Challenge',
    description: 'An educational quiz game with various categories and difficulty levels.',
    imageUrl: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1000',
    tags: ['Education', 'Game', 'JavaScript'],
    type: 'game',
    githubLink: 'https://github.com/studio/quiz-challenge'
  },
  {
    id: '8',
    title: 'Code Analyzer',
    description: 'A tool that analyzes code quality and provides suggestions for improvements.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000',
    tags: ['Developer Tool', 'Python', 'AI'],
    type: 'tool',
    githubLink: 'https://github.com/studio/code-analyzer'
  }
];