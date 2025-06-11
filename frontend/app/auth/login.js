import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import Input from '../components/Input';
import Button from '../components/Button';
import useForm from '../hooks/useForm';

const validationRules = {
  email: [
    {
      required: true,
      message: 'Email is required',
    },
    {
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
    },
    {
      minLength: 6,
      message: 'Password must be at least 6 characters',
    },
  ],
};

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useApp();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    setFieldError,
  } = useForm(
    {
      email: '',
      password: '',
    },
    validationRules
  );

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      await login(values);
      router.replace('/(tabs)');
    } catch (error) {
      if (error.message.includes('email')) {
        setFieldError('email', error.message);
      } else if (error.message.includes('password')) {
        setFieldError('password', error.message);
      } else {
        Alert.alert('Error', error.message || 'Failed to login. Please try again.');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}>
        <View style={styles.header}>
          <Button
            variant="secondary"
            size="small"
            title="Back"
            onPress={() => router.back()}
            style={styles.backButton}
          />
          <View style={styles.titleContainer}>
            <Ionicons name="book" size={32} color="#007AFF" />
            <Text style={styles.title}>Welcome Back</Text>
          </View>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.form}>
          <Input
            label="Email"
            value={values.email}
            onChangeText={(value) => handleChange('email', value)}
            onBlur={() => handleBlur('email')}
            error={touched.email && errors.email}
            icon="mail-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          <Input
            label="Password"
            value={values.password}
            onChangeText={(value) => handleChange('password', value)}
            onBlur={() => handleBlur('password')}
            error={touched.password && errors.password}
            icon="lock-closed-outline"
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
          />

          <Button
            variant="secondary"
            title="Forgot Password?"
            onPress={() => router.push('/auth/forgot-password')}
            style={styles.forgotPassword}
          />

          <Button
            title="Login"
            onPress={handleLogin}
            style={styles.loginButton}
          />

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <Button
              variant="secondary"
              size="small"
              title="Sign Up"
              onPress={() => router.push('/auth/register')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    width: 80,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  placeholder: {
    width: 80,
  },
  form: {
    padding: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  loginButton: {
    marginBottom: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
}); 