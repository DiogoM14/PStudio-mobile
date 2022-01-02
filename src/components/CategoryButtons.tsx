import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICategories } from "../utils/ICategories";

export function CategoryButtons({ categories }: ICategories) {
  return (
    <View>
      <ScrollView style={styles.buttons} horizontal showsHorizontalScrollIndicator={false}>
        { categories.map((category) => (
          <TouchableOpacity key={category} style={styles.button} activeOpacity={0.7}>
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        )) }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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
})