import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { ICategories } from "../utils/ICategories";

import { Header } from "../components/Home/Header";
import { AllCategoryButtons } from "../components/AllCategoryButtons";

export function AllCategories() {
    const [categories, setCategories] = useState<string[]>([])

    return (
        <ScrollView
            style={styles.container}>

            <Header />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F4F4',
        paddingHorizontal: 24,
    },
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
});