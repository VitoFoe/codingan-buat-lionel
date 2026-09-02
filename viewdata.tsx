import { ItemData } from "./data";
import { View, Text, FlatList } from "react-native";
import { globalStyles } from "../styles/globalStyle";
import { dataStyle } from "@/styles/dataStyle";

export default function Data() {
    const renderItemData = ( {item} : {item:any} ) => (
        <View style={dataStyle.card}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
            <Text style={dataStyle.desc}>Rp.{item.price}</Text>
            <Text style={dataStyle.desc}>{item.desc ? "Available" : "Not Available"}</Text>
        </View>
    )

    return (
        <View style={globalStyles.containData}>
            <Text style={dataStyle.headerTxt}>Stationery Data</Text>
            <FlatList
                data={ItemData}
                renderItem={renderItemData}
                keyExtractor={item => item.id}
            />
        </View>
    )
}