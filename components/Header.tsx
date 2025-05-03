import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/constants/colors';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: subtitle => subtitle ? 8 : 0,
  },
  subtitle: {
    fontSize: 16,
    color: theme.secondaryText,
    lineHeight: 22,
  },
});