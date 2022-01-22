import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export function Header() {
  const { user, signOut } = useContext(AuthContext)
  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate("Welcoming" as never);
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.logo}>PStudio</Text>
        <Text style={styles.slogan}>A melhor galeria do mundo</Text>
      </View>

      { user ? (
        <TouchableOpacity onPress={handleSignOut}>
          <Image style={styles.avatar} source={{ uri: user?.avatar }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleNavigateToLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      ) }

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "700",
    fontSize: 32,
    color: "#1c1c1c",
  },
  slogan: {
    fontSize: 14,
    color: "#3a3a3a",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
})