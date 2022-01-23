import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { api } from "../service/axios";
import { ref, storage, uploadBytesResumable, getDownloadURL } from "../service/firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Controller, useForm } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';


export function Profile() {
  const [image, setImage] = useState<any>();
  const { signOut, isAuthenticated, user } = useContext(AuthContext);
  const { navigate } = useNavigation()
  const [token, setToken] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('@token').then((token: any) => {
      setToken(token)
    })
  }, [])

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
    }
  });

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    setImage(result.uri)
  };

  const onSubmit = async (data: any) => {
    const response = await fetch(image);
    const blob = await response.blob()
    const storageRef = ref(storage, "avatar/" + Math.random().toString())
    await uploadBytesResumable(storageRef, blob)
    await getDownloadURL(storageRef).then(async (res) => {
      const alterUser = {
          avatar: res,
          firstName: data.firstName,
          lastName: data.lastName,
          email: user.email,
      }
      await api.put(`/me/edit`, alterUser, {
          headers: {
              'x-access-token': token
          }
      }).then(res => {
              
      }).catch(err => {
              
      })
  })
}

  function handleSignOut() {
    signOut()
  }

  function handleGoToLogin() {
    navigate("Welcoming" as never)
  }

  return (
    <ScrollView style={{ marginTop: 42 }}>
      { isAuthenticated ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={pickImage}>

            {image ? (
              <Image style={styles.avatar} source={{ uri: image }} />
            ) : (
              <Image
                source={{ uri: user.avatar }}
                style={styles.avatar}
              />
            )}
           
          </TouchableOpacity>

          <Text style={styles.name}>{user.firstName} {user.lastName}</Text>

          <View style={styles.inputGroup}>
              <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.firstInput}
                    placeholder="Primeiro nome" 
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="firstName"
              />

              <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput 
                    style={styles.firstInput}
                    placeholder="Último nome" 
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="lastName"
              />
        </View>
        

          <TouchableOpacity 
            onPress={handleSubmit(onSubmit)}
            style={styles.updateData} 
          >
            <Text style={{ color: '#fff' }}>
              Alterar dados
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.signOutButton} 
            onPress={handleSignOut}
          >
            <Text style={{ color: '#fff' }}>
              Logout
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
    </ScrollView>
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
    marginTop: 42
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
  inputGroup: {
    marginTop: 62,
    width: "100%",
    paddingHorizontal: 16
  },
  input: {
    width: "100%",
    height: 54,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  firstInput: {
    width: "100%",
    height: 54,
    backgroundColor: "#fff",
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  updateData: {
    backgroundColor: "#14387B",
    borderRadius: 12,
    height: 40,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  }
});