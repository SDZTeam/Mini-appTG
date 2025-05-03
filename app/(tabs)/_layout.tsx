import React from "react";
import { Tabs } from "expo-router";
import { Home, Briefcase, MessageSquare, HelpCircle } from "lucide-react-native";
import { theme } from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.secondaryText,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
        },
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="portfolio-tab"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color }) => <Briefcase size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact-tab"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => <MessageSquare size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support-tab"
        options={{
          title: "Support",
          tabBarIcon: ({ color }) => <HelpCircle size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}