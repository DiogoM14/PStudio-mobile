import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { navigate } = useNavigation();

  function handleNavigateToImages() {
    navigate("Images");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToImages}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});