import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { ref, storage, uploadBytesResumable, getDownloadURL, getBlob } from '../service/firebase'
import { api } from "../service/axios";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from "../context/AuthContext";

export function UploadImage() {  
  const { user } = useContext(AuthContext);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      description: '',
      tags: '',
      price: '',
      year: '',
      imageType: '',
      category: ''
    }
  });

  const [image, setImage] = useState();
  const [token, setToken] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })

    setImage(result.uri)
  };

  useEffect(() => {
    AsyncStorage.getItem('@token').then(token => {
      setToken(token)
    }).catch(err => console.log("Dá login" + err))
  },[])

  async function onSubmit(data: any) {
    const response = await fetch(image);
    const blob = await response.blob()
    console.log(token)
    const storageRef = ref(storage, 'images/' + data.title);
        await uploadBytesResumable(storageRef, blob);
        await getDownloadURL(storageRef)
            .then(async (res) => {
              const newImage = {
                title: data.title,
                description: data.description,
                category: [data.category],
                tags: data.tags,
                price: data.price,
                year: data.year,
                imageType: data.imageType,
                imageCDN: res,
                author: user._id
              }
              
              console.log(newImage)

                await api.post('/admin/images', newImage, {
                    headers: {
                      'x-access-token': token
                    }
                })
                    .then(res => {

                    })
                    .catch(err => {
                      console.log("Ardeu de vez" + err)
                    })
            })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Images</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <ScrollView>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Titulo"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Descrição"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Tags"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="tags"
      />
      {errors.tags && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Preço"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="price"
      />
      {errors.price && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Ano"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="year"
      />
      {errors.year && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Tipo de Imagem"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="imageType"
      />
      {errors.imageType && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Categoria"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="category"
      />
      {errors.category && <Text>This is required.</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Registo</Text>
      </TouchableOpacity>
      </ScrollView>
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