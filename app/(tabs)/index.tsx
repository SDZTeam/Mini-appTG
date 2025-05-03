import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight, Gamepad2, Briefcase, Wrench, MessageSquare } from "lucide-react-native";
import { theme } from "@/constants/colors";
import { studioInfo } from "@/mocks/studio-info";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export default function HomeScreen() {
  const router = useRouter();

  const navigateTo = (screen: string) => {
    router.push(screen);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Hero Section */}
      <LinearGradient
        colors={['rgba(100, 190, 255, 0.2)', 'rgba(169, 135, 255, 0.1)', 'transparent']}
        style={styles.heroGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.hero}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.studioName}>{studioInfo.name}</Text>
          <Text style={styles.tagline}>
            Creating digital experiences since {studioInfo.founded}
          </Text>
          
          <View style={styles.heroButtons}>
            <Button 
              title="Play Our Game" 
              onPress={() => navigateTo('/game')}
              style={styles.primaryButton}
            />
            <Button 
              title="Explore Portfolio" 
              variant="outline" 
              onPress={() => navigateTo('/portfolio')}
              style={styles.secondaryButton}
            />
          </View>
        </View>
      </LinearGradient>

      {/* About Section */}
      <View style={styles.section}>
        <Header 
          title="Who We Are" 
          subtitle="A creative technology studio specializing in Telegram bots, mini apps, and web development."
        />
        
        <Text style={styles.description}>
          {studioInfo.longDescription}
        </Text>
      </View>

      {/* Values Section */}
      <View style={styles.section}>
        <Header title="Our Values" />
        
        <View style={styles.valuesGrid}>
          {studioInfo.values.map((value, index) => (
            <View key={index} style={styles.valueCard}>
              <Text style={styles.valueTitle}>{value.title}</Text>
              <Text style={styles.valueDescription}>{value.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Navigation Cards */}
      <View style={styles.section}>
        <Header title="Explore More" />
        
        <View style={styles.navCards}>
          <TouchableOpacity 
            style={styles.navCard}
            onPress={() => navigateTo('/game')}
          >
            <View style={styles.navCardIcon}>
              <Gamepad2 size={24} color={theme.accent} />
            </View>
            <Text style={styles.navCardTitle}>Play Our Game</Text>
            <Text style={styles.navCardDescription}>
              Test your knowledge about our projects in a fun quiz
            </Text>
            <View style={styles.navCardAction}>
              <ArrowRight size={16} color={theme.accent} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navCard}
            onPress={() => navigateTo('/portfolio')}
          >
            <View style={styles.navCardIcon}>
              <Briefcase size={24} color={theme.accent} />
            </View>
            <Text style={styles.navCardTitle}>Portfolio</Text>
            <Text style={styles.navCardDescription}>
              Explore our past projects and success stories
            </Text>
            <View style={styles.navCardAction}>
              <ArrowRight size={16} color={theme.accent} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navCard}
            onPress={() => navigateTo('/services')}
          >
            <View style={styles.navCardIcon}>
              <Wrench size={24} color={theme.accent} />
            </View>
            <Text style={styles.navCardTitle}>Services</Text>
            <Text style={styles.navCardDescription}>
              Discover what we can do for your business
            </Text>
            <View style={styles.navCardAction}>
              <ArrowRight size={16} color={theme.accent} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.navCard}
            onPress={() => navigateTo('/contact')}
          >
            <View style={styles.navCardIcon}>
              <MessageSquare size={24} color={theme.accent} />
            </View>
            <Text style={styles.navCardTitle}>Contact Us</Text>
            <Text style={styles.navCardDescription}>
              Get in touch to discuss your project ideas
            </Text>
            <View style={styles.navCardAction}>
              <ArrowRight size={16} color={theme.accent} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Achievements Section */}
      <View style={styles.section}>
        <Header title="Our Achievements" />
        
        <View style={styles.achievements}>
          {studioInfo.achievements.map((achievement, index) => (
            <View key={index} style={styles.achievementItem}>
              <View style={styles.achievementBullet} />
              <Text style={styles.achievementText}>{achievement}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to start your project?</Text>
        <Text style={styles.ctaDescription}>
          Let's create something amazing together. Our team is ready to bring your ideas to life.
        </Text>
        <Button 
          title="Contact Us Now" 
          size="large"
          onPress={() => navigateTo('/contact')}
          style={styles.ctaButton}
        />
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
  heroGradient: {
    borderRadius: 20,
    marginBottom: 24,
    overflow: 'hidden',
  },
  hero: {
    padding: 24,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: theme.secondaryText,
    marginBottom: 8,
  },
  studioName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: theme.secondaryText,
    marginBottom: 24,
    textAlign: 'center',
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    minWidth: 140,
  },
  secondaryButton: {
    minWidth: 140,
  },
  section: {
    marginBottom: 32,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.secondaryText,
  },
  valuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  valueCard: {
    backgroundColor: theme.card,
    borderRadius: 12,
    padding: 16,
    width: '48%',
    flex: 1,
    minWidth: 150,
  },
  valueTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  valueDescription: {
    fontSize: 14,
    color: theme.secondaryText,
    lineHeight: 20,
  },
  navCards: {
    gap: 12,
  },
  navCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  navCardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(100, 190, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  navCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  navCardDescription: {
    fontSize: 14,
    color: theme.secondaryText,
    marginBottom: 12,
    lineHeight: 20,
  },
  navCardAction: {
    alignSelf: 'flex-end',
  },
  achievements: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  achievementBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.accent,
    marginTop: 6,
    marginRight: 12,
  },
  achievementText: {
    flex: 1,
    fontSize: 15,
    color: theme.secondaryText,
    lineHeight: 22,
  },
  ctaSection: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 15,
    color: theme.secondaryText,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  ctaButton: {
    minWidth: 200,
  },
});