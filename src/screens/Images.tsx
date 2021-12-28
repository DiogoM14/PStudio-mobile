import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

export function Images() {
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }
  
  return (
    <View style={styles.container}>
      <Text onPress={handleGoBack}>Go back</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
});