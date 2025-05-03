import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { services } from "@/mocks/services";
import { ServiceCard } from "@/components/ServiceCard";
import { Header } from "@/components/Header";

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header 
        title="Our Services" 
        subtitle="Discover what we can do for your business"
      />
      
      <View style={styles.servicesContainer}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
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
  servicesContainer: {
    marginBottom: 16,
  },
});