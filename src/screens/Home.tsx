import { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ImageCard } from "../components/ImageCard";

import { api } from "../service/axios";
import { IImage } from "../utils/IImage";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  const [images, setImages] = useState<IImage[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const { navigate } = useNavigation();

  function handleNavigateToImages() {
    // navigate("Images" as never);
  }

  useEffect(() => {
    api
      .get("/images")
      .then((response) => setImages(response.data))
      .catch((err) => {
          console.error("ops! ocorreu um erro " + err)
      })

    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => {
          console.error("ops! ocorreu um erro " + err)
      })
  }, []);

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>PStudio</Text>
          <Text style={styles.slogan}>A melhor galeria do mundo</Text>
        </View>

        <View style={styles.user}>
          <Image style={styles.avatar} source={{ uri: "http://github.com/diogom14.png" }} />
        </View>
      </View>

      <View>
        <ScrollView style={styles.buttons} horizontal showsHorizontalScrollIndicator={false}>
          { categories.map((category) => (
            <TouchableOpacity style={styles.button} onPress={handleNavigateToImages} activeOpacity={0.7}>
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableOpacity>
          )) }
        </ScrollView>
      </View>

      <FlatList 
        data={images}
        keyExtractor={(item) => item.imageCDN}
        renderItem={({ item }) => <ImageCard key={item.imageCDN} image={item} />}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F4',
    paddingHorizontal: 24,
  },
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
  user: {

  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  buttons: {
    marginTop: 28,
    marginBottom: 16,
  },
  button: {
    marginRight: 8,
    backgroundColor: "#14387B",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 8,
    
  },
  buttonText: {
    color: "#FFF",
  }
});