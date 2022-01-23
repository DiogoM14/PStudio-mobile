import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ICategories } from "../utils/ICategories";
import { useEffect, useState } from "react";
import { api } from "../service/axios";
import { ImageCard } from "../components/ImageCard";

export function CategoryDetail() {
    const [images, setImages] = useState<IImage[]>([])
    const { params } = useRoute()

    useEffect(() => {
        api.get(`/category/${params.categories}`)
          .then(res => {
              setImages(res.data)
          })
      }, [params])

    return (
        <ScrollView style={styles.container}>
            {images.map((image: any) => (
                <ImageCard key={image.imageCDN} image={image} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F4F4',
        paddingHorizontal: 16,
        paddingTop: 24
      },
})