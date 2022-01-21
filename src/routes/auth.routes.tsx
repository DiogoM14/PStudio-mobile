import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator, Screen } = createStackNavigator()

import { BottomNavigator } from './BottomNavigator';
import { ImageDetails } from '../screens/ImageDetails';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';
import { AuthContext } from '../context/AuthContext';
import { WelcomingScreen } from '../screens/WelcomingScreen';
import { AllCategories } from '../screens/AllCategories';
import { CategoryDetail } from '../screens/CategoryDetail';


export function AuthRoutes() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName={"BottomNavigator"} >
      <Screen name="Welcoming" component={WelcomingScreen} />
      <Screen name="ImageDetails" component={ImageDetails} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="BottomNavigator" component={BottomNavigator} />
      <Screen name="AllCategories" component={AllCategories} options={{
        headerShown: true,
        title: "Categorias",
        headerStyle: {
          backgroundColor: '#F0F4F4',
        },
      }} />
      <Screen name="CategoryDetail" component={CategoryDetail} />
    </Navigator>
  )
}
