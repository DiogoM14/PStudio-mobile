import { useContext, useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ImageCard } from "../components/ImageCard";

import { api } from "../service/axios";
import { IImage } from "../utils/IImage";
import { AuthContext } from "../context/AuthContext";

export function Home() {
  const [images, setImages] = useState<IImage[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const { navigate } = useNavigation();

  const { user, signOut } = useContext(AuthContext)

  function handleNavigateToLogin() {
    navigate("SignIn" as never);
  }

  function handleSignOut() {
    signOut()
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

        <TouchableOpacity style={styles.user} onPress={handleSignOut}>
          <Image style={styles.avatar} source={{ uri: user?.avatar }} />
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView style={styles.buttons} horizontal showsHorizontalScrollIndicator={false}>
          { categories.map((category) => (
            <TouchableOpacity key={category} style={styles.button} activeOpacity={0.7}>
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableOpacity>
          )) }
        </ScrollView>
      </View>

      <FlatList 
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
    borderRadius: 8,
    width: 130,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
  }
});