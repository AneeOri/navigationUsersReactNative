import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "../screens/Notifications";
import MyStack from "../navigation/MyStack";
import { useWindowDimensions } from "react-native";
import { Colors } from "../constants/colors";

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
  const {width} = useWindowDimensions();

    return(
        <Drawer.Navigator
         screenOptions={{
          drawerActiveTintColor: Colors.secondary,
          drawerType: width >= 768 ? 'permanent' : 'front',
         }}
        >
          <Drawer.Screen
            name="Stack"
            component={MyStack}
            options={{
            headerShown: false,
            }}
          />
          <Drawer.Screen name="notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}