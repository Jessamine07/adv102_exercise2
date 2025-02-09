import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Platform, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the useNavigation hook
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Logging in with', { email, password });
  };

  return (
    <ThemedView style={styles.container}>

        <ThemedText type="title">Exercise 4 ni sya</ThemedText>
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
});
