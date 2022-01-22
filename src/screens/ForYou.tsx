import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { api } from "../service/axios";
import { ImageCard } from "../components/ImageCard";

export function ForYou() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState<any>([]);

  useEffect(() => {
    api.get(`/search?tags=${query.replace(/\s/g, "")}`).then((res) => {
      setImages(res.data);
    });

  }, [query]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchWrapper}>
        <Ionicons name="search" size={24} color="#696969" />

        <TextInput 
          style={styles.search}
          placeholder="Pesquisar..."
          onChangeText={(text) => setQuery(text.toLowerCase())}
        />
      </View>

      { images.length > 0 ? (
        images.map((image: any) => (
          <ImageCard key={image.imageCDN} image={image} />
        ))
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={styles.noImages}>Sem imagens</Text>
        </View>
      ) }

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F4F4",
    flex: 1,
    marginHorizontal: 16
  },
  searchWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 16
  },
  search: {
    width: "100%",
    height: 40,
    marginLeft: 16,
  },
  noImages: {
    fontSize: 18,
    fontFamily: "Roboto_500Medium",
    marginTop: 16
  }
})