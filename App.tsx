import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { Routes } from './src/routes';
import { SignUp } from './src/screens/SignUp';
import { ForgotPassword } from './src/screens/ForgotPassword';
import { UploadImage } from './src/screens/UploadImage';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <UploadImage />
      <StatusBar style="auto" />
    </>
  );
}
