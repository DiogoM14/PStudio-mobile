import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
