import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { projects } from "@/mocks/projects";
import { theme } from "@/constants/colors";
import { ProjectCard } from "@/components/ProjectCard";
import { Header } from "@/components/Header";

type ProjectType = 'all' | 'game' | 'bot' | 'website' | 'tool';

export default function PortfolioScreen() {
  const [selectedType, setSelectedType] = useState<ProjectType>('all');

  const filteredProjects = selectedType === 'all' 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header 
        title="Our Portfolio" 
        subtitle="Explore our past projects and success stories"
      />
      
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
          <TouchableOpacity
            style={[styles.filterButton, selectedType === 'all' && styles.activeFilter]}
            onPress={() => setSelectedType('all')}
          >
            <Text style={[styles.filterText, selectedType === 'all' && styles.activeFilterText]}>
              All
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, selectedType === 'game' && styles.activeFilter]}
            onPress={() => setSelectedType('game')}
          >
            <Text style={[styles.filterText, selectedType === 'game' && styles.activeFilterText]}>
              Games
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, selectedType === 'bot' && styles.activeFilter]}
            onPress={() => setSelectedType('bot')}
          >
            <Text style={[styles.filterText, selectedType === 'bot' && styles.activeFilterText]}>
              Bots
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, selectedType === 'website' && styles.activeFilter]}
            onPress={() => setSelectedType('website')}
          >
            <Text style={[styles.filterText, selectedType === 'website' && styles.activeFilterText]}>
              Websites
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, selectedType === 'tool' && styles.activeFilter]}
            onPress={() => setSelectedType('tool')}
          >
            <Text style={[styles.filterText, selectedType === 'tool' && styles.activeFilterText]}>
              Tools
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      <View style={styles.projectsContainer}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        
        {filteredProjects.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No projects found for this category.</Text>
          </View>
        )}
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
  filterContainer: {
    marginBottom: 16,
  },
  filters: {
    flexDirection: 'row',
    paddingVertical: 8,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: theme.card,
  },
  activeFilter: {
    backgroundColor: theme.accent,
  },
  filterText: {
    fontSize: 14,
    color: theme.secondaryText,
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  projectsContainer: {
    marginBottom: 16,
  },
  emptyState: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.card,
    borderRadius: 16,
  },
  emptyStateText: {
    fontSize: 16,
    color: theme.secondaryText,
    textAlign: 'center',
  },
});