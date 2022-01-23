import { useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import TimedSlideshow from 'react-native-timed-slideshow'
import { IImage } from "../../utils/IImage"

interface Props {
  images: IImage[]
}

export function Spotlights({ images }: Props) {
  const [items, setItems] = useState<any>([
    { uri: "https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", title: "Bem vindo", description: "A sua galeria de preferência" }
  ])

  useEffect(() => {
    if (images[0] != undefined) {
      setItems([{
        uri: images[0].imageCDN,
        title: images[0].title,
        text: images[0].description,
      }, {
        uri: images[1].imageCDN,
        title: images[1].title,
        text: images[1].description,
      }, {
        uri: images[2].imageCDN,
        title: images[2].title,
        text: images[2].description,
      }])
    }
  }, [images])

  return (
    <View style={styles.container}>
      <TimedSlideshow
        index={0}
        items={items}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 480,
    width: "100%",
    backgroundColor: "#000",
    marginTop: 24,
    borderRadius: 16
  }
})