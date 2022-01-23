import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ICategories } from "../utils/ICategories";
import { AllCategories } from '../utils/allCategories'
import { useNavigation } from "@react-navigation/native";

export function AllCategoryButtons({ categories }: ICategories) {
    const { navigate } = useNavigation()

    function handleGoToCategoryDetail(category: string) {
        navigate({
          name: "CategoryDetail" as never,
          params: {
            categories: category
          } as never
        })
      }

    return (
        <View style={styles.container}>
            { AllCategories.map((category) => (
                <TouchableOpacity key={category.name} style={styles.button} activeOpacity={0.7} onPress={() => handleGoToCategoryDetail(category.name)}>
                    <Text style={styles.buttonText}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "space-between",
        marginBottom: 24
    },
    button: {
        width: "48%",
        height: 100,
        backgroundColor: "#14387B",
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
    },
    buttonText:{
        marginLeft: 6,
        color: "#fff",
        fontFamily: "Roboto_500Medium",
        fontSize: 20,
        textTransform: "capitalize"
    },
})