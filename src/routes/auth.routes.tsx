import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator, Screen } = createStackNavigator()

import { BottomNavigator } from './BottomNavigator';
import { Images } from '../screens/Images';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';
import { AuthContext } from '../context/AuthContext';


export function AuthRoutes() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={isAuthenticated ? "BottomNavigator" : 'SignIn'} >
      <Screen name="Images" component={Images} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="BottomNavigator" component={BottomNavigator}  />
    </Navigator>
  )
}
