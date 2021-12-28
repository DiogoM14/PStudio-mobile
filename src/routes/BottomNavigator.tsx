import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { UploadImage } from "../screens/UploadImage";

export function BottomNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={focused ? '#14387B' : color} />
              );
            }
          }}
        />
        <Tab.Screen 
          name="UploadImage" 
          component={UploadImage} 
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={32} color={focused ? '#14387B' : color} />
              );
            }
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={focused ? '#14387B' : color} />
              );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}