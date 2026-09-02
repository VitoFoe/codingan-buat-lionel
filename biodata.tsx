import { ScrollView, Text, View, Image } from "react-native";
import { globalStyles } from "../styles/globalStyle";

export default function app() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={globalStyles.containright}>
                <Text>My Bio</Text>
                <Image source={require('./vkkvkdvksdfkvskdfvksdfkvsdfv.jpg')} style={{ width: 200, height: 200 }} />
            </View>
        </ScrollView>
    )
}