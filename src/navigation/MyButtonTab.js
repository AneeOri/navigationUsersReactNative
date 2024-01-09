import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const MyTab = createBottomTabNavigator();

export default function MyButtonTab() {
    return(
        <MyTab.Navigator
         screenOptions={{
            headerTitleAlign:'center'
         }}
        >
            <MyTab.Screen name="Home" component={Home}/>
            <MyTab.Screen name="Profile" component={Profile}/>
        </MyTab.Navigator>
    );
}