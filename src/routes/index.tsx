import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: "#F0F4F4", 
      paddingTop: getStatusBarHeight() + 26,
    }}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  )
}