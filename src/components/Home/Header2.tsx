import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export function Header2() {
    const { user, signOut } = useContext(AuthContext)
    const { navigate } = useNavigation();

    function handleNavigateToLogin() {
        navigate("SignIn" as never);
    }

    function handleSignOut() {
        signOut()
    }

    return (
        <View style={styles.header}>

            {user ? (
                <TouchableOpacity onPress={handleSignOut}>
                    <Image style={styles.avatar} source={{ uri: user?.avatar }} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleNavigateToLogin}>
                    <Text>Faça login</Text>
                </TouchableOpacity>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    logo: {
        fontWeight: "700",
        fontSize: 32,
        color: "#1c1c1c",
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
})