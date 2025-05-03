import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Linking,
  Alert,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Send, MessageSquare, Mail, ExternalLink } from "lucide-react-native";
import { theme } from "@/constants/colors";
import { studioInfo } from "@/mocks/studio-info";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { ContactFormData } from "@/types";

export default function ContactTabScreen() {
  const params = useLocalSearchParams<{ service?: string }>();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    contact: "",
    message: params.service ? `I'm interested in your ${params.service} service.` : "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);

    // Simulate sending the form
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Message Sent",
        "Thank you for contacting us! We'll get back to you soon.",
        [
          { 
            text: "OK", 
            onPress: () => {
              setFormData({
                name: "",
                contact: "",
                message: "",
              });
            }
          }
        ]
      );
    }, 1500);
  };

  const openTelegram = () => {
    Linking.openURL(`https://t.me/${studioInfo.contact.telegram.replace('@', '')}`);
  };

  const sendEmail = () => {
    Linking.openURL(`mailto:${studioInfo.contact.email}`);
  };

  const openWebsite = () => {
    Linking.openURL(`https://${studioInfo.contact.website}`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Header 
          title="Contact Us" 
          subtitle="Get in touch with our team to discuss your project ideas"
        />
        
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor={theme.secondaryText}
              value={formData.name}
              onChangeText={(text) => handleChange("name", text)}
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email or Telegram</Text>
            <TextInput
              style={styles.input}
              placeholder="How can we reach you?"
              placeholderTextColor={theme.secondaryText}
              value={formData.contact}
              onChangeText={(text) => handleChange("contact", text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell us about your project or question"
              placeholderTextColor={theme.secondaryText}
              value={formData.message}
              onChangeText={(text) => handleChange("message", text)}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
          </View>
          
          <Button
            title="Send Message"
            onPress={handleSubmit}
            loading={loading}
            style={styles.submitButton}
          />
        </View>
        
        <View style={styles.directContactContainer}>
          <Text style={styles.directContactTitle}>Or reach us directly:</Text>
          
          <TouchableOpacity style={styles.contactOption} onPress={openTelegram}>
            <View style={styles.contactIconContainer}>
              <MessageSquare size={20} color={theme.accent} />
            </View>
            <Text style={styles.contactText}>{studioInfo.contact.telegram}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactOption} onPress={sendEmail}>
            <View style={styles.contactIconContainer}>
              <Mail size={20} color={theme.accent} />
            </View>
            <Text style={styles.contactText}>{studioInfo.contact.email}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.contactOption} onPress={openWebsite}>
            <View style={styles.contactIconContainer}>
              <ExternalLink size={20} color={theme.accent} />
            </View>
            <Text style={styles.contactText}>{studioInfo.contact.website}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  formContainer: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 12,
    color: theme.text,
    borderWidth: 1,
    borderColor: theme.border,
  },
  textArea: {
    minHeight: 120,
  },
  submitButton: {
    marginTop: 8,
  },
  directContactContainer: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  directContactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(100, 190, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    color: theme.secondaryText,
  },
});