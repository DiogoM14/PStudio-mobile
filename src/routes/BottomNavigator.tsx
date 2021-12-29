import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { UploadImage } from "../screens/UploadImage";

export function BottomNavigator() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <>
      <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
        <Screen 
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
        <Screen 
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
        <Screen 
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
      </Navigator>
    </>
  );
}