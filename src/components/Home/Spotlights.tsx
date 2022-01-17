import { useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import TimedSlideshow from 'react-native-timed-slideshow'

export function Spotlights() {
  const [items, setItems] = useState<any>([
    {
      uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
      title: "Michael Malik",
      text: "Minnesota, USA",
    },
    {
      uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
      title: "Victor Fallon",
      text: "Val di Sole, Italy",
      duration: 3000
    },
    {
        uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
        title: "Mary Gomes",
        text: "Alps",
        fullWidth: true
    }
  ])

  return (
    <View style={styles.container}>
      <TimedSlideshow
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