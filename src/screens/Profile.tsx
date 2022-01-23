import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export function Profile() {
  const { signOut, isAuthenticated, user } = useContext(AuthContext);
  const { navigate } = useNavigation()

  function handleSignOut() {
    signOut()
  }

  function handleGoToLogin() {
    navigate("Welcoming" as never)
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 }}>
          <Text style={styles.noFavoritesText}>Precisa estar autenticado para ter acesso ao seu perfil.</Text>

          <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
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
  },
  noFavorites: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 38
  },
  noFavoritesText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#14387B",
    borderRadius: 12,
    height: 40,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Ubuntu_500Medium",
  },
});