import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomNavigator } from './BottomNavigator';
import { Images } from '../screens/Images';

export function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        <Stack.Screen name="Images" component={Images} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}