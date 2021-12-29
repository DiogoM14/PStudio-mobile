import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { BottomNavigator } from './BottomNavigator';
import { Images } from '../screens/Images';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={"SignIn"} >
      <Screen name="Images" component={Images} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="BottomNavigator" component={BottomNavigator}  />
    </Navigator>
  )
}
