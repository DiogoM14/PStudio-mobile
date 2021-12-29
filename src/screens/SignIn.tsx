import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Controller, useForm } from "react-hook-form";

interface FormProps {
  email: string
  password: string
}

export function SignIn() {
  const { navigate } = useNavigation()
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

  function handleGoToRegister() {
    navigate("SignUp" as never)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Efetuar autenticação</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.goToRegister}>Ainda não tem conta?</Text>
      <TouchableOpacity onPress={handleGoToRegister}>
        <Text style={styles.goToRegister}>Clique aqui para registar</Text>
      </TouchableOpacity>
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