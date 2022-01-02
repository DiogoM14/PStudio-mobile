import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/context/AuthContext';
import { Routes } from './src/routes';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto"
import { Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu"


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <Routes />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
