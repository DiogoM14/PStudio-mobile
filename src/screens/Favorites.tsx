import { useEffect, useState } from "react"
import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../service/axios"
import { ImageCard } from "../components/ImageCard";

export function Favorites() {
  const [images, setImages] = useState([])
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('@token').then((token: any) => {
      api.get("/me/images/favorites/", {headers:{"x-access-token" : token}})
      .then (
        res => {
          console.log(res.data.flat()[0])
          setImages(res.data.flat()[0].favorites)
        }
      )
    })
  },[])

  const onRefresh = () => {
    setRefreshing(true);

    AsyncStorage.getItem('@token').then((token: any) => {
      api.get("/me/images/favorites/", {headers:{"x-access-token" : token}})
      .then (
        res => {
          console.log(res.data.flat()[0])
          setImages(res.data.flat()[0].favorites)
        }
      )
    })

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.imagesTitle}>Os seus favoritos</Text>

      {images.map((image: any) => (
        <ImageCard key={image.imageCDN} image={image} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F4',
    marginHorizontal: 16,
  },
  imagesTitle: {
    marginBottom: 15,
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
  }
})