import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useForm, Controller } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

import { api } from "../service/axios";

export function SignUp() {
  const { navigate, goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    }
  });

  const onSubmit = async (data: any) => {
      const newUser = {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password
      }
      await api.post('/auth/register', newUser)
          .then(res => {
            navigate("SignIn" as never)
          })
          .catch(err => console.log(err))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="#303030" style={{ marginBottom: 16 }} />
        </TouchableOpacity>

        <View>
          <Text style={styles.title}>Vamos entrar.</Text>
          <Text style={styles.subtitle}>Bem vindo de volta.</Text>
          <Text style={styles.subtitle}>Sentimos a tua falta!</Text>
        </View>

        <ScrollView style={styles.inputGroup}>
          <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Primeiro Nome"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Apelido"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="E-mail"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.firstName && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
            maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Registar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    marginTop: 38,
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#14387B",
    borderRadius: 12,
    height: 60,
    width: "100%",
    alignItems: "center",
    margin: 24,
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Ubuntu_500Medium",
  }
})