import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { IImage } from "../utils/IImage";

export function ImageDetails() {
  const [image, setImage] = useState<IImage>()
  const { params } = useRoute()

  useEffect(() => {
    setImage(params)
  }, [])

  return (
    <View style={styles.container}>
      {/* <Image 
        source={{ uri: params }}
        style={styles.image}
      /> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  image: {}
})