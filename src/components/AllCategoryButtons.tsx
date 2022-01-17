import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ICategories } from "../utils/ICategories";

export function AllCategoryButtons({ categories }: ICategories) {

    return (
        <ScrollView style={styles.grid}>
            <Text style={styles.title}>Categorias</Text>

            <View>
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Natureza</Text>
                    <Ionicons name="leaf" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Animais</Text>
                    <MaterialCommunityIcons name="cow" size={24} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>História</Text>
                    <FontAwesome5 name="monument" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>Moda</Text>
                    <Feather name="more-horizontal" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </ScrollView>
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
        height: 60,
        width: "100%",
        marginBottom: 15,
        paddingHorizontal: 10,

        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
    }
})