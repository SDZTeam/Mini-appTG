import { useColorScheme } from 'react-native';
import { colors } from '@/constants/colors';

export function useTheme() {
  const colorScheme = useColorScheme();
  
  // Default to dark theme if system preference is not available
  const theme = colorScheme === 'light' ? colors.light : colors.dark;
  
  return {
    theme,
    isDark: colorScheme !== 'light',
  };
}