import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowRight, Bot, AppWindow, Globe, Gamepad2, Settings } from 'lucide-react-native';
import { Service } from '@/types';
import { theme } from '@/constants/colors';
import { useRouter } from 'expo-router';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const router = useRouter();

  const getIcon = () => {
    switch (service.icon) {
      case 'bot':
        return <Bot size={24} color={theme.accent} />;
      case 'app-window':
        return <AppWindow size={24} color={theme.accent} />;
      case 'globe':
        return <Globe size={24} color={theme.accent} />;
      case 'gamepad-2':
        return <Gamepad2 size={24} color={theme.accent} />;
      case 'settings':
        return <Settings size={24} color={theme.accent} />;
      default:
        return <AppWindow size={24} color={theme.accent} />;
    }
  };

  const handlePress = () => {
    router.push({
      pathname: '/contact',
      params: { service: service.title }
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
        
        <View style={styles.examples}>
          <Text style={styles.examplesTitle}>Examples:</Text>
          {service.examples.map((example, index) => (
            <View key={index} style={styles.exampleItem}>
              <View style={styles.bullet} />
              <Text style={styles.exampleText}>{example}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Discuss this service</Text>
          <ArrowRight size={16} color={theme.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(100, 190, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: theme.secondaryText,
    marginBottom: 16,
    lineHeight: 20,
  },
  examples: {
    marginBottom: 16,
  },
  examplesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  exampleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.accent,
    marginTop: 6,
    marginRight: 8,
  },
  exampleText: {
    flex: 1,
    fontSize: 14,
    color: theme.secondaryText,
    lineHeight: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.accent,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
  },
});