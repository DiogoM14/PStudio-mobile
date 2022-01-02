import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export function Profile() {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut()
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    
  }
});