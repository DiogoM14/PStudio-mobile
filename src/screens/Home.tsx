import { useEffect, useState } from "react";
import { RefreshControl } from 'react-native'
import { FlatList, StyleSheet, View } from "react-native";

import { ImageCard } from "../components/ImageCard";

import { api } from "../service/axios";
import { IImage } from "../utils/IImage";
import { Header } from "../components/Home/Header";
import { CategoryButtons } from "../components/CategoryButtons";

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
    <View style={styles.container}>
      <Header />

      <CategoryButtons categories={categories} />

      <FlatList 
        refreshControl={
          <RefreshControl refreshing={refreshing} 
            onRefresh={onRefresh} 
          />
        }
        style={{ marginBottom: 140 }}
        showsVerticalScrollIndicator={false}
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
  }
});