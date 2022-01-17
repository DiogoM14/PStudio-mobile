import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Controller, useForm } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

interface FormProps {
  email: string
  password: string
}

export function SignIn() {
  const { navigate, goBack } = useNavigation()
  const { signIn } = useContext(AuthContext)

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  function onSubmit({ email, password }: FormProps) {
    signIn({ email, password }).then(() => {
      navigate("BottomNavigator" as never)
    })
  }

  function handleGoToForgot() {
    navigate("ForgotPassword" as never)
  }

  function handleGoToHome() {
    navigate("BottomNavigator" as never)
  }

  function handleGoBack() {
    goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color="#303030" style={{ marginBottom: 16 }} />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>Vamos entrar.</Text>
        <Text style={styles.subtitle}>Bem vindo de volta.</Text>
        <Text style={styles.subtitle}>Sentimos a tua falta!</Text>
      </View>

      <View style={styles.inputGroup}>
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              keyboardType="email-address"
              style={styles.input}
              placeholder="E-mail" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              style={styles.input}
              placeholder="Palavra-passe" 
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.bottomSection}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.goToRegister}>Esqueceu-se da palavra passe?</Text>
          <TouchableOpacity onPress={handleGoToForgot}>
            <Text style={[styles.goToRegister, { fontFamily: "Roboto_500Medium" }]}>Recuperar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <Text>ou</Text>
        </View>

        <TouchableOpacity style={styles.guestButton} onPress={handleGoToHome}>
          <Text style={styles.guestButtonText}>Entrar como convidado</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F4", 
    paddingHorizontal: 24,
    flex: 1
  },
  title: {
    fontSize: 32,
    fontFamily: "Ubuntu_500Medium",
    marginBottom: 12
  },
  subtitle: {
    fontSize: 28,
    fontFamily: "Ubuntu_400Regular",
  },
  inputGroup: {
    marginTop: 62
  },
  input: {
    width: "100%",
    height: 54,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    margin: 24,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#14387B",
    borderRadius: 12,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Ubuntu_500Medium",
  },
  goToRegister: {
    color: "#303030",
    marginRight: 8,
    fontFamily: "Roboto_400Regular",
    marginBottom: 12
  },
  guestButton: {
    backgroundColor: "#fff",
    borderColor: "#14387B",
    borderWidth: 2,
    borderRadius: 12,
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  guestButtonText: {
    color: "#303030",
    fontWeight: "500",
    fontFamily: "Ubuntu_500Medium",
  },
  divider: {
    backgroundColor: "#6b6b6b",
    height: 1,
    marginVertical: 8,
    width: 100
  }
})