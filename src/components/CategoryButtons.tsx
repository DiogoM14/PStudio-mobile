import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICategories } from "../utils/ICategories";

export function CategoryButtons({ categories }: ICategories) {
  return (
    <View style={styles.grid}>
      <Text style={styles.title}>Categorias</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Natureza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Natureza</Text>
        </TouchableOpacity>

      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Natureza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Natureza</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "column",
    width: "100%",
  },
  title: {
    marginTop: 16,
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
  },
  button: {
    backgroundColor: "#14387B",
    borderRadius: 8,
    alignItems: "center",
    height: 84,
    width: "49%",
    marginBottom: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
  }
})