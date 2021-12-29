import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function SignIn() {
  const { navigate } = useNavigation()

  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      {/* <Image 
        source={require("../assets/images/login.png")}
        style={styles.image}
      /> */}

      <Text style={styles.title}>Efetuar autenticação</Text>

      <TextInput 
        style={styles.input}
        placeholder="E-mail" 
      />
      <TextInput 
        style={styles.input}
        placeholder="Palavra-passe" 
      />

      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.goToRegister}>Ainda não tem conta?</Text>
      <Text style={styles.goToRegister}>Clique aqui para registar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F4", 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    marginBottom: 62
  },
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#14387B",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
  },
  goToRegister: {
    color: "#3a3a3a",
  }
})