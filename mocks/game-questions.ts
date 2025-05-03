import { GameQuestion } from '@/types';

export const gameQuestions: GameQuestion[] = [
  {
    id: '1',
    question: 'Which of these chat bots was created by our studio?',
    options: [
      {
        id: '1a',
        title: 'ChatMaster',
        imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000',
        isCorrect: true,
        description: 'ChatMaster is our flagship AI-powered bot that helps manage group conversations with smart moderation features.'
      },
      {
        id: '1b',
        title: 'TalkBot',
        imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1000',
        isCorrect: false,
        description: 'A popular bot, but not one of ours. We focus on more advanced AI capabilities in our solutions.'
      },
      {
        id: '1c',
        title: 'ConvoAI',
        imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000',
        isCorrect: false,
        description: 'While we admire this bot, it was developed by another team. Our bots offer more customization options.'
      }
    ],
    fact: 'Our ChatMaster bot processes over 10,000 messages daily and uses advanced NLP to detect context and sentiment.'
  },
  {
    id: '2',
    question: 'Which game was developed by our studio?',
    options: [
      {
        id: '2a',
        title: 'Puzzle Quest',
        imageUrl: 'https://images.unsplash.com/photo-1628483368890-4f4b8f3c5b5c?q=80&w=1000',
        isCorrect: false,
        description: 'A popular puzzle game, but not one of our creations. Our games focus more on social interaction.'
      },
      {
        id: '2b',
        title: 'Memory Match',
        imageUrl: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?q=80&w=1000',
        isCorrect: true,
        description: 'Memory Match is our in-Telegram card matching game that has been played over 1 million times!'
      },
      {
        id: '2c',
        title: 'Word Master',
        imageUrl: 'https://images.unsplash.com/photo-1626787462332-d2c05ae5c26c?q=80&w=1000',
        isCorrect: false,
        description: 'A word game with a large following, but not from our studio. We specialize in more visual games.'
      }
    ],
    fact: 'Our games are designed to be playable directly in Telegram, with no downloads required, making them instantly accessible to over 700 million users.'
  },
  {
    id: '3',
    question: 'Which website was built by our development team?',
    options: [
      {
        id: '3a',
        title: 'Travel Explorer',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000',
        isCorrect: false,
        description: 'A beautiful travel site, but not one of ours. Our websites typically have more interactive elements.'
      },
      {
        id: '3b',
        title: 'Food Delivery',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000',
        isCorrect: false,
        description: 'While we have experience with food delivery platforms, this particular one is not our work.'
      },
      {
        id: '3c',
        title: 'Creative Agency',
        imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000',
        isCorrect: true,
        description: 'This modern agency website showcases our ability to create sleek, responsive designs with advanced animations.'
      }
    ],
    fact: 'Our websites are built with performance in mind - the Creative Agency site loads in under 2 seconds and scores 98/100 on Google PageSpeed Insights.'
  },
  {
    id: '4',
    question: 'Which productivity tool was created by our team?',
    options: [
      {
        id: '4a',
        title: 'TaskFlow',
        imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000',
        isCorrect: true,
        description: 'TaskFlow is our project management mini-app that helps teams organize tasks right inside Telegram.'
      },
      {
        id: '4b',
        title: 'WorkTracker',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
        isCorrect: false,
        description: 'A popular time tracking tool, but not one of our products. Our tools focus more on collaboration.'
      },
      {
        id: '4c',
        title: 'MeetingPlanner',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000',
        isCorrect: false,
        description: 'While we admire this scheduling tool, it was developed by another company.'
      }
    ],
    fact: 'Our TaskFlow tool is used by over 500 teams worldwide and has helped complete more than 50,000 projects on time.'
  },
  {
    id: '5',
    question: 'Which e-commerce solution was developed by our studio?',
    options: [
      {
        id: '5a',
        title: 'Fashion Store',
        imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000',
        isCorrect: false,
        description: 'A stylish fashion store, but not one of our implementations. Our e-commerce solutions offer more advanced features.'
      },
      {
        id: '5b',
        title: 'E-commerce Platform',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000',
        isCorrect: true,
        description: 'Our comprehensive e-commerce platform that includes product catalog, cart, and secure payment processing.'
      },
      {
        id: '5c',
        title: 'Gadget Shop',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000',
        isCorrect: false,
        description: 'An electronics store with a large inventory, but not built by our team.'
      }
    ],
    fact: 'Our e-commerce platform processes over $2 million in transactions monthly and has a cart abandonment rate 15% lower than industry average.'
  }
];