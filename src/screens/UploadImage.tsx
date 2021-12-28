import { StyleSheet, Text, View } from "react-native";

export function UploadImage() {
  return (
    <View style={styles.container}>
      <Text>Upload image</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});