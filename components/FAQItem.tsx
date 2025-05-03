import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { theme } from '@/constants/colors';
import { FAQItem as FAQItemType } from '@/types';

interface FAQItemProps {
  item: FAQItemType;
}

export const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.header} 
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
      >
        <Text style={styles.question}>{item.question}</Text>
        {expanded ? (
          <ChevronUp size={20} color={theme.accent} />
        ) : (
          <ChevronDown size={20} color={theme.accent} />
        )}
      </TouchableOpacity>
      
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.card,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginRight: 16,
  },
  content: {
    padding: 16,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  answer: {
    fontSize: 14,
    color: theme.secondaryText,
    lineHeight: 20,
  },
});