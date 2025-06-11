import { Stack } from 'expo-router';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';

export default function RootLayout() {
  return (
    <ErrorBoundary>
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
              name="library/[id]"
              options={{
                headerShown: false
              }}
            />
          </Stack>
        </ProtectedRoute>
      </AppProvider>
    </ErrorBoundary>
  );
} 