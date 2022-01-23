import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";

import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Ionicons } from '@expo/vector-icons'

import { ref, storage, uploadBytesResumable, getDownloadURL } from '../service/firebase'
import { api } from "../service/axios";
import { AuthContext } from "../context/AuthContext";
import { Categories } from '../utils/DropdownCategories'

// import DropDownPicker from 'react-native-dropdown-picker'
import SelectDropdown from 'react-native-select-dropdown'

export function UploadImage() {  
  const { navigate } = useNavigation()
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState<any>();
  const [token, setToken] = useState<any>(null);
  const [imageType, setImageType] = useState()
  const [imageCategory, setImageCategory] = useState<any>([])
  
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
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

  useEffect(() => {
    AsyncStorage.getItem('@token').then(token => {
      setToken(token)
    }).catch(err => console.log("Dá login" + err))
  },[])

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
  };

  function deleteCategory(category: string) {
    imageCategory.splice(imageCategory.indexOf(category), 1)
    setImageCategory(imageCategory)
  }

  async function onSubmit(data: any) {
    const response = await fetch(image);
    const blob = await response.blob()
    const storageRef = ref(storage, 'images/' + data.title);
    await uploadBytesResumable(storageRef, blob);
    await getDownloadURL(storageRef).then(async (res) => {

      const tags = data.tags.split(",").map((tag: string) => tag.trim().toLowerCase());
      const imageType = data.imageType.toLowerCase()

      const newImage = {
        title: data.title,
        description: data.description,
        category: imageCategory,
        tags: tags,
        price: data.price,
        year: data.year,
        imageType: imageType,
        imageCDN: res,
        author: user._id
      } 

      console.log(newImage)
          
      await api.post('/admin/images', newImage, {
        headers: {
          'x-access-token': token
        }
      }).then(() => {
        navigate('Home' as never)
      })
      .catch(err => {
        console.log("Erro ao dar upload para a api" + err)
      })
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Images</Text>

      {image && <Image style={styles.uploadedImage} source={{ uri: image }} />}

      <ScrollView style={styles.scrollList}>
        <TouchableOpacity onPress={() => reset()} style={styles.resetFields}>
          <Text style={styles.buttonText}>
            <Ionicons name="trash" size={18} color="#fff" />
          </Text>
        </TouchableOpacity>

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
              keyboardType="numeric"
            />
          )}
          name="price"
        />

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
              keyboardType="numeric"
            />
          )}
          name="year"
        />

        <Controller
          control={control}
          rules={{
          maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <SelectDropdown
              data={["Real", "Digital"]}
              buttonStyle={{ 
                width: "100%",
                height: 44,
                backgroundColor: "#fff",
                marginBottom: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
               }}
              onSelect={(selectedItem, index) => {
                setImageType(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          )}
          name="imageType"
        />

        <Controller
          control={control}
          rules={{
          maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <SelectDropdown
              data={Categories}
              
              buttonStyle={{ 
                width: "100%",
                height: 44,
                backgroundColor: "#fff",
                marginBottom: 16,
                paddingHorizontal: 12,
                borderRadius: 8,
               }}

              onSelect={(selectedItem, index) => {
                setImageCategory([...imageCategory, selectedItem])
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return "Adicione categoria"
              }} 
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
          )}
          name="category"
        />

        { imageCategory && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {imageCategory.map((category: string) => (
              <TouchableOpacity style={styles.categoriesBox} onPress={() => deleteCategory(category)}>
                <Text>{category}</Text>
                <Text>  x</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) }

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Escolher imagem</Text>
          <Ionicons name="cloud-upload" size={24} color="white" style={{ marginLeft: 16 }} />
        </TouchableOpacity>

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
  resetFields: {
    alignSelf: "flex-end",
    marginBottom: 16,
    backgroundColor: "#14387B",
    padding: 8,
    width: 35,
    borderRadius: 8
  },
  scrollList: {
    width: "100%"
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
  uploadButton: {
    backgroundColor: "#14387B",
    borderRadius: 8,
    paddingVertical: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#14387B",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 16,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 24
  },
  buttonText: {
    color: "#FFF",
  },
  uploadedImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  categoriesBox: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 16
  }
})