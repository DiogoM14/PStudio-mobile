import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ICategories } from "../utils/ICategories";
import { useEffect, useState } from "react";

export function CategoryDetail() {
    const [categories, setCategories] = useState<ICategories>()
    const { params } = useRoute()

    return (
        <View>
            <Text>cheguei</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})