// Color palette for the app
export const colors = {
  // Base colors
  dark: {
    background: '#17212B',
    card: '#242F3D',
    text: '#FFFFFF',
    secondaryText: '#8A96A3',
    border: '#3A4A5B',
    accent: '#64BEFF', // Primary accent - pastel blue
    secondary: '#A987FF', // Secondary accent - pastel purple
    success: '#4CAF50',
    error: '#F44336',
    overlay: 'rgba(23, 33, 43, 0.8)',
  },
  light: {
    background: '#FFFFFF',
    card: '#F5F5F5',
    text: '#222222',
    secondaryText: '#6D7885',
    border: '#E1E3E6',
    accent: '#0088CC', // Primary accent - Telegram blue
    secondary: '#8B5CF6', // Secondary accent - purple
    success: '#4CAF50',
    error: '#F44336',
    overlay: 'rgba(255, 255, 255, 0.8)',
  }
};

// Default to dark theme as it matches Telegram's default
export const theme = colors.dark;