import { createDrawerNavigator } from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';

const {Navigator} = createDrawerNavigator();
export const Drawer = withLayoutContext(Navigator);
export default function LayoutDrawer() {
    return (
        <Drawer>
            <Drawer.Screen name="index" options={{ title: 'Home'}} />
            <Drawer.Screen name="biodata" options={{ title: 'My Bio'}} />
            <Drawer.Screen name="viewdata" options={{ title: 'Stationery Data'}} />
            <Drawer.Screen name="province" options={{ title: 'Provinces'}} />
        </Drawer>
    )
}