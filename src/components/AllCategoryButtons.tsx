import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ICategories } from "../utils/ICategories";

export function AllCategoryButtons({ categories }: ICategories) {

    const category = [
        {
            name: "nature",
            icon: "leaf"
        },
        {
            name: "wallpaper",
            icon: "leaf"
        },
        {
            name: "landscape",
            icon: "leaf"
        },
        {
            name: "architecture",
            icon: "leaf"
        },
        {
            name: "fashion",
            icon: "leaf"
        },
        {
            name: "foods & drinks",
            icon: "leaf"
        },
        {
            name: "experimental",
            icon: "leaf"
        },
        {
            name: "film",
            icon: "leaf"
        },
        {
            name: "people",
            icon: "leaf"
        },
        {
            name: "travel",
            icon: "leaf"
        },
        {
            name: "animals",
            icon: "leaf"
        },
        {
            name: "arts & culture",
            icon: "leaf"
        },
        {
            name: "history",
            icon: "leaf"
        },
        {
            name: "athletics",
            icon: "leaf"
        },
    ]

    return (
        <ScrollView style={styles.grid}>
            <Text style={styles.title}>Categorias</Text>
            {category.map((category: any) => (
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>{category.name}</Text>
                    <FontAwesome5 name={category.icon} size={20} color="white" />
                </TouchableOpacity>
            ))}

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