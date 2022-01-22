import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export function Profile() {
  const { signOut, isAuthenticated, user } = useContext(AuthContext);

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      { isAuthenticated ? (
        <View style={styles.container}>
          <Image
            source={{ uri: user.avatar }}
            style={styles.avatar}
          />

          <Text style={styles.name}>{user.firstName} {user.lastName}</Text>

          <TouchableOpacity 
            style={styles.signOutButton} 
            onPress={handleSignOut}
          >
            <Text style={{ color: '#fff' }}>
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity 
            style={styles.signOutButton} 
            onPress={handleSignOut}
          >
            <Text style={{ color: '#fff' }}>
              Fazer login
            </Text>
          </TouchableOpacity>
        </View>
      ) }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    fontFamily: 'Ubuntu_500Medium',
    fontSize: 24
  },
  signOutButton: {
    backgroundColor: "#14387B",
    borderRadius: 12,
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32
  }
});