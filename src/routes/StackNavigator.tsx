import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { BottomNavigator } from './BottomNavigator';
import { Images } from '../screens/Images';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';

export function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: "#F0F4F4", 
      paddingTop: getStatusBarHeight() + 26,
    }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Images" component={Images} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}