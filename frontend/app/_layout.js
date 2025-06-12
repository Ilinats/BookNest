import { Stack } from 'expo-router';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

export default function RootLayout() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AppProvider>
          <ProtectedRoute>
            <Stack
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerShadowVisible: false,
              }}
            >
              <Stack.Screen
                name="index"
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="library"
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="friends/index"
                options={{
                  title: 'Friends'
                }}
              />
              <Stack.Screen
                name="friends/profile/[id]"
                options={{
                  title: 'Friend Profile'
                }}
              />
              <Stack.Screen
                name="auth/login"
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="auth/register"
                options={{
                  headerShown: false
                }}
              />
            </Stack>
          </ProtectedRoute>
        </AppProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
} 