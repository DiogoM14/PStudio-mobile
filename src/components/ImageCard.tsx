import { Image, StyleSheet, Text, View } from "react-native"
import { IImage } from "../utils/IImage"

interface Props {
  image: IImage
}

export function ImageCard({ image }: Props) {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: image.imageCDN }}
        style={styles.image}
      />

      <View style={styles.category}>
        <Text>{image.category}</Text>
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
    </View>
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