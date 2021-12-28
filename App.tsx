import { StatusBar } from 'expo-status-bar';
import { StackNavigator } from './src/routes/StackNavigator';

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
  );
}
