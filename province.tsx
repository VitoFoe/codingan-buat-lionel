import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';

export default function app() {
    const [ data, setData ] = useState([])

    const getData = async () => {
        try {
            const response = await fetch('https://alamat.thecloudalert.com/api/provinsi/get/');
            const json = await response.json();
            setData(json.result || []);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            <Text>This is province text</Text>
        </View>
    )
}