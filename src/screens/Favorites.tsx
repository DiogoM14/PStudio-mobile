import { useContext, useEffect, useState } from "react"
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../service/axios"
import { ImageCard } from "../components/ImageCard";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export function Favorites() {
  const [images, setImages] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const { isAuthenticated } = useContext(AuthContext)
  const { navigate } = useNavigation()

  useEffect(() => {
    isAuthenticated && (
      AsyncStorage.getItem('@token').then((token: any) => {
        api.get("/me/images/favorites/", {headers:{"x-access-token" : token}})
        .then (
          res => {
            console.log(res.data.flat()[0])
            setImages(res.data.flat()[0].favorites)
          }
        )
      })
    )
  },[])

  function handleGoToLogin() {
    navigate("Welcoming" as never)
  }

  const onRefresh = () => {
    setRefreshing(true);

    isAuthenticated && (
      AsyncStorage.getItem('@token').then((token: any) => {
        api.get("/me/images/favorites/", {headers:{"x-access-token" : token}})
        .then (
          res => {
            console.log(res.data.flat()[0])
            setImages(res.data.flat()[0].favorites)
          }
        )
      })
    )

    setTimeout(() => {
      setRefreshing(false);
    }, 500);
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

      { isAuthenticated ? (
        images.map((image: any) => (
          <ImageCard key={image.imageCDN} image={image} />
        ))
      ) : (
        <View style={styles.noFavorites}>
          <Text style={styles.noFavoritesText}>Precisa estar autenticado para ver seus favoritos.</Text>

          <TouchableOpacity style={styles.button} onPress={handleGoToLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F4F4',
    marginHorizontal: 16,
    flex: 1
  },
  imagesTitle: {
    marginBottom: 15,
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
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
})