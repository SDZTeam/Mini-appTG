import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { MessageSquare } from "lucide-react-native";
import { theme } from "@/constants/colors";
import { studioInfo } from "@/mocks/studio-info";
import { faqItems } from "@/mocks/faq";
import { FAQItem } from "@/components/FAQItem";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

export default function SupportTabScreen() {
  const openTelegramSupport = () => {
    Linking.openURL(`https://t.me/${studioInfo.contact.telegram.replace('@', '')}`);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header 
        title="Technical Support" 
        subtitle="Get help with our products and services"
      />
      
      <View style={styles.supportCard}>
        <View style={styles.supportIconContainer}>
          <MessageSquare size={24} color={theme.accent} />
        </View>
        <Text style={styles.supportTitle}>Need assistance?</Text>
        <Text style={styles.supportDescription}>
          Our support team is ready to help you with any questions or issues you might have with our products and services.
        </Text>
        <Button
          title="Contact Support"
          onPress={openTelegramSupport}
          style={styles.supportButton}
        />
      </View>
      
      <View style={styles.supportProcess}>
        <Text style={styles.processTitle}>Our Support Process</Text>
        
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Contact Us</Text>
            <Text style={styles.stepDescription}>
              Reach out through Telegram or email with a description of your issue.
            </Text>
          </View>
        </View>
        
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Initial Response</Text>
            <Text style={styles.stepDescription}>
              We'll acknowledge your request within 24 hours and may ask for additional information.
            </Text>
          </View>
        </View>
        
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Problem Resolution</Text>
            <Text style={styles.stepDescription}>
              Our team will work on your issue and keep you updated on progress.
            </Text>
          </View>
        </View>
        
        <View style={styles.processStep}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>4</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Follow-up</Text>
            <Text style={styles.stepDescription}>
              After resolving the issue, we'll check to ensure everything is working properly.
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.faqSection}>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        
        {faqItems.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  supportCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  supportIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(100, 190, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  supportTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  supportDescription: {
    fontSize: 15,
    color: theme.secondaryText,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  supportButton: {
    minWidth: 200,
  },
  supportProcess: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  processTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
  processStep: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  stepDescription: {
    fontSize: 14,
    color: theme.secondaryText,
    lineHeight: 20,
  },
  faqSection: {
    marginBottom: 16,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
});