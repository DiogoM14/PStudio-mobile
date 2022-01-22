import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ICategories } from "../utils/ICategories";
import { AllCategories } from '../utils/allCategories'

export function AllCategoryButtons({ categories }: ICategories) {
    return (
        <View style={styles.container}>
            { AllCategories.map((category) => (
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
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