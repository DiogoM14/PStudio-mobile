import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { ICategories } from "../utils/ICategories";

import { AllCategoryButtons } from "../components/AllCategoryButtons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather, Ionicons } from "@expo/vector-icons";
import { api } from "../service/axios";
import { useNavigation } from "@react-navigation/native";

export function AllCategories() {
    const [categories, setCategories] = useState<string[]>([])
    const { navigate } = useNavigation()

    useEffect(() => {
        api
        .get("/categories")
        .then((response) => setCategories(response.data))
        .catch((err) => {
        console.error("ops! ocorreu um erro " + err)
        })
    }, []);

    function handleGoToForYou() {
        navigate('ForYou' as never)
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.bigButton} activeOpacity={0.7} onPress={handleGoToForYou}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="layers" size={42} color="#fff" />
                    <Text style={styles.bigButtonText}>Destaques</Text>
                </View>

                <View style={styles.bigButtonDecorator}>
                    <Feather name="chevron-right" size={24} color="#fff" />
                </View>
            </TouchableOpacity>

            <AllCategoryButtons categories={categories} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F4F4',
        paddingHorizontal: 24,
    },
    bigButton: {
        width: "100%",
        height: 100,
        backgroundColor: "#14387B",
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 36,
        marginTop: 24,
    },
    bigButtonText:{
        marginLeft: 6,
        color: "#fff",
        fontFamily: "Roboto_500Medium",
        fontSize: 20
    },
    bigButtonDecorator:{
        backgroundColor: "#3159a5",
        borderRadius: 11,
        padding: 4
    }
});