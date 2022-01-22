import { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native'

import { ImageCard } from "../components/ImageCard";

import { api } from "../service/axios";
import { IImage } from "../utils/IImage";
import { Header } from "../components/Home/Header";
import { CategoryButtons } from "../components/CategoryButtons";
import { Spotlights } from "../components/Home/Spotlights";

export function Home() {
  const [images, setImages] = useState<IImage[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    api.get("/images")
      .then((response) => setImages(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err)
    })

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err)
      })

    api.get("/images")
      .then((response) => setImages(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro " + err)
      })
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Header />

      <Spotlights />

      <CategoryButtons categories={categories} />

      <Text style={styles.imagesTitle}>Todas as imagens</Text>

      {images.map((image: any) => (
        <ImageCard key={image.imageCDN} image={image} />
      ))}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F4',
    paddingHorizontal: 16,
  },
  imagesTitle: {
    marginBottom: 15,
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
  }
});