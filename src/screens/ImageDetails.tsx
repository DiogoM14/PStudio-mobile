import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IImage } from "../utils/IImage";

export function ImageDetails() {
  const [image, setImage] = useState<IImage>()
  const { params } = useRoute()

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.detailHeader}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image 
            source={{ uri: params.image.author.avatar }}
            style={styles.authorImage}
          />

          <View>
            <Text style={styles.detailAuthor}>Diogo Sousa</Text>
            <Text>Designer</Text>
          </View>
        </View>

        <Text style={styles.price}>{params.image.price} €</Text>
      </View>
      
      <Image 
        source={{uri: params.image.imageCDN }}
        style={styles.image}
      />

      <View style={styles.imageContent}>
        <Text style={styles.detailTitle}>{params.image.title}</Text>

        <TouchableOpacity style={styles.favoriteButton}>
          <MaterialIcons name="star-outline" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ marginVertical: 8, marginRight: 16 }}>Descrição</Text>
        <View style={styles.divider}></View>
      </View>

      <Text style={styles.description}>{params.image.description}</Text>

      <ScrollView style={styles.categoryContent} horizontal showsHorizontalScrollIndicator={false}>
        <Text style={styles.category}>Categoria:</Text>

        { params.image.category.map((cate: string)  => (
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.buttonText}>{cate}</Text>
          </TouchableOpacity>
        )) }
      </ScrollView>
      
      <View style={styles.divider}></View>

      <Text style={{textTransform: "capitalize", marginBottom: 4}}>Tipo de imagem: {params.image.imageType}</Text>
      <Text>Ano: {params.image.year}</Text>

      <ScrollView style={[styles.categoryContent, { marginBottom: 8 }]} horizontal showsHorizontalScrollIndicator={false}>
        <Text style={styles.category}>Tags:</Text>

        { params.image.tags.map((tags: string)  => (
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.buttonText}>{tags}</Text>
          </TouchableOpacity>
        )) }
      </ScrollView>  

      <View style={styles.divider}></View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16, 
  },
  detailHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 8,
  },
  detailAuthor: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10
    // resizeMode: "contain",
  },
  price: {
    fontFamily: "Roboto_500Medium",
    fontSize: 18
  },
  imageContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },
  detailTitle:{
    fontFamily: "Ubuntu_500Medium",
    fontSize: 18,
    textTransform: "capitalize",
  },
  favoriteButton:{
    backgroundColor: "#14387B",
    padding: 4,
    borderRadius: 4
  },
  description:{
    
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#aaaaaa",
    marginVertical: 16
  },
  categoryContent: {
    flexDirection: "row",
    // alignItems: "center",
    marginTop: 16
  },
  category: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16
  },
  categoryButton:{
    width: 100,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#14387B",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8
  },
  buttonText:{
    color: "#fff",
    textTransform: "capitalize",
  }
})