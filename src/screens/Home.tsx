import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ImageCard } from "../components/ImageCard";

import { api } from "../service/axios";
import { IImage } from "../utils/IImage";

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
      <Text style={styles.logo}>PStudio</Text>
      <Text style={styles.slogan}>A melhor galeria do mundo</Text>

      <ScrollView style={styles.buttons} horizontal showsHorizontalScrollIndicator={false}>
        { categories.map((category) => (
          <TouchableOpacity style={styles.button} onPress={handleNavigateToImages}>
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        )) }

      </ScrollView>

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
  logo: {
    fontWeight: "700",
    fontSize: 32,
    color: "#1c1c1c",
  },
  slogan: {
    fontSize: 14,
    color: "#3a3a3a",
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