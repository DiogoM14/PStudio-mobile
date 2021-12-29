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
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: "#F0F4F4", 
      paddingTop: getStatusBarHeight() + 26,
    }}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }} initialRouteName={"SignIn"}>
          {/* <Screen name="Images" component={Images} /> */}
          <Screen name="SignIn" component={SignIn} />
          <Screen name="SignUp" component={SignUp} />
          <Screen name="ForgotPassword" component={ForgotPassword} />
          <Screen name="BottomNavigator" component={BottomNavigator}  />
        </Navigator>
      </NavigationContainer>
    </View>
  )
}