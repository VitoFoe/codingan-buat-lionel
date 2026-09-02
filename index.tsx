import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyle";

export default function app() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={globalStyles.container}>
                <Text>Home Screen</Text>
            </View>
        </ScrollView>
    )
}