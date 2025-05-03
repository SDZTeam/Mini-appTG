import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'bot-dev',
    title: 'Bot Development',
    description: 'We create intelligent and responsive Telegram bots that automate tasks, engage users, and provide valuable services.',
    icon: 'bot',
    examples: [
      'Customer support bots with AI capabilities',
      'E-commerce bots for product browsing and purchasing',
      'Community management and moderation bots',
      'Notification and alert systems'
    ]
  },
  {
    id: 'mini-apps',
    title: 'Telegram Mini Apps',
    description: 'Custom web applications that run seamlessly within Telegram, providing rich interactive experiences without leaving the messenger.',
    icon: 'app-window',
    examples: [
      'Interactive product catalogs and stores',
      'Booking and reservation systems',
      'Games and entertainment apps',
      'Productivity and business tools'
    ]
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies and best practices.',
    icon: 'globe',
    examples: [
      'Corporate websites and landing pages',
      'E-commerce platforms',
      'Web portals and dashboards',
      'Progressive Web Apps (PWAs)'
    ]
  },
  {
    id: 'gamification',
    title: 'Gamification',
    description: 'Adding game elements to non-game contexts to increase engagement, motivation, and user satisfaction.',
    icon: 'gamepad-2',
    examples: [
      'Loyalty programs with points and rewards',
      'Interactive onboarding experiences',
      'Educational games and quizzes',
      'Challenges and achievement systems'
    ]
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Custom solutions that automate repetitive tasks, streamline workflows, and increase productivity.',
    icon: 'settings',
    examples: [
      'Business process automation',
      'Data collection and processing',
      'Scheduled reports and notifications',
      'Integration between different platforms and services'
    ]
  }
];