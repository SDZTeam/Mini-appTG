import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '@/constants/colors';

interface GameOptionProps {
  id: string;
  title: string;
  imageUrl: string;
  isSelected: boolean;
  isRevealed: boolean;
  isCorrect: boolean;
  onSelect: (id: string) => void;
}

export const GameOption: React.FC<GameOptionProps> = ({
  id,
  title,
  imageUrl,
  isSelected,
  isRevealed,
  isCorrect,
  onSelect,
}) => {
  const getBorderColor = () => {
    if (!isRevealed) {
      return isSelected ? theme.accent : 'transparent';
    }
    return isCorrect ? theme.success : theme.error;
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: getBorderColor() }
      ]}
      onPress={() => !isRevealed && onSelect(id)}
      disabled={isRevealed}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        contentFit="cover"
        transition={200}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        
        {isRevealed && (
          <View style={[
            styles.badge,
            { backgroundColor: isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)' }
          ]}>
            <Text style={[
              styles.badgeText,
              { color: isCorrect ? theme.success : theme.error }
            ]}>
              {isCorrect ? 'Correct' : 'Incorrect'}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
});