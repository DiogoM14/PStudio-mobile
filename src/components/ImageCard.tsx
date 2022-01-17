import { useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { IImage } from "../utils/IImage"

interface Props {
  image: IImage
}

export function ImageCard({ image }: Props) {
  const { navigate } = useNavigation()

  function handleGoToImage() {
    navigate({
      name: "ImageDetails" as never, 
      params: { 
        image: image
      } as never})
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={0.7}
      onPress={handleGoToImage}
    >
      <Image 
        source={{uri: image.imageCDN }}
        style={styles.image}
      />

      <View style={styles.category}>
        <Text>{image.category[0]} + {image.category.length - 1}</Text>
      </View>

      <View style={styles.description}>
        <View style={styles.leftSide}>
          <Text numberOfLines={1} style={styles.title}>{image.title}</Text>
          <Text numberOfLines={1} style={styles.descriptionText}>{image.description}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.price}>{image.price}€</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 16,
  },
  category: {
    position: "absolute",
    backgroundColor: "#fff",
    right: 0,
    marginTop: 12,
    marginRight: 12,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  image: {
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  description: {
    width: "100%",
    backgroundColor: "#fff",
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  leftSide: {
    maxWidth: "70%",
    overflow: "hidden",

  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  descriptionText: {
    color: "#3a3a3a",
  },
  rightSide: {

  },
  price: {
    fontSize: 16,
    fontWeight: "500",
  }
})