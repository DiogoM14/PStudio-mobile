import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { api } from "../service/axios";
import { ImageCard } from "../components/ImageCard";
import Carousel from 'react-native-snap-carousel';

const screen = Dimensions.get("screen");

export function ForYou() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState<any>("");
  const [dimensions, setDimensions] = useState({ screen });

  useEffect(() => {
    api.get(`/search?tags=${query.replace(/\s/g, "")}`).then((res) => {
      setImages(res.data);
    });

  }, [query]);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ screen }) => {
        setDimensions({ screen });
      }
    );
    return () => subscription?.remove();
  });

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
        <Carousel
          layout="stack"
          data={images}
          renderItem={
            ({ item }) => <ImageCard image={item} />
          }
          sliderWidth={dimensions.screen.width - 32}
          itemWidth={dimensions.screen.width - 32}
        />

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