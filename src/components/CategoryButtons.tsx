import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ICategories } from "../utils/ICategories";
import { useNavigation } from "@react-navigation/native";

export function CategoryButtons({ categories }: ICategories) {

  const { navigate, goBack } = useNavigation()

  function handleGoToAllCategories() {
    navigate("AllCategories" as never)
  }

  return (
    <View style={styles.grid}>
      <Text style={styles.title}>Categorias</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Natureza</Text>
          <Ionicons name="leaf" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Animais</Text>
          <MaterialCommunityIcons name="cow" size={24} color="white" />
        </TouchableOpacity>

      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>História</Text>
          <FontAwesome5 name="monument" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleGoToAllCategories}>
          <Text style={styles.buttonText}>Ver mais</Text>
          <Feather name="more-horizontal" size={24} color="white" />
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
    marginBottom: 15,
    marginTop: 16,
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
  },
  button: {
    display: "flex",
    backgroundColor: "#14387B",
    borderRadius: 8,
    height: 45,
    width: "47%",
    marginBottom: 8,
    paddingHorizontal: 10,

    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
  }
})