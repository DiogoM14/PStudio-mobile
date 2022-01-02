import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Img from '../assets/images/welcome.png'

export function WelcomingScreen() {
  const { navigate } = useNavigation()

  function handleGoToLogin() {
    navigate('SignIn' as never)
  }

  function handleGoToSignUp() {
    navigate('SignUp' as never)
  }

  return (
    <View style={styles.container}>
      <Image source={Img} style={{ width: "100%", height: 300 }} />

      <Text style={styles.biggerText}>As melhores imagens aqui.</Text>
      <Text style={styles.smallerText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia alias unde perspiciatis quod repellat officia.</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleGoToLogin} activeOpacity={0.7}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn} onPress={handleGoToSignUp} activeOpacity={0.7}>
          <Text style={{ fontFamily: "Ubuntu_500Medium" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F4", 
    flex: 1,
    paddingHorizontal: 24
  },
  biggerText: {
    fontSize: 38,
    textAlign: "center",
    lineHeight: 50,
    marginVertical: 16,
    fontFamily: "Roboto_500Medium",
    color: "#303030"
  },
  smallerText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Ubuntu_400Regular",
    color: "#797979",
    
  },
  buttons: {
    backgroundColor: "#fff",
    flexDirection: "row",
    borderRadius: 12,
    position: "absolute",
    bottom: 0,
    margin: 24
  },
  loginBtn: {
    width: 170,
    backgroundColor: "#14387B",
    height: 54,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  registerBtn: {
    height: 60,
    width: 170,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Ubuntu_500Medium",
  }
})