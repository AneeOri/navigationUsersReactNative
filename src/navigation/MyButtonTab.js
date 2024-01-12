import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "../constants/colors";

const MyTab = createBottomTabNavigator();

export default function MyButtonTab() {
    return(
        <MyTab.Navigator
        initialRouteName="Home"
         screenOptions={{
            headerTitleAlign:'center',
            tabBarInactiveTintColor: Colors.secondary,
         }}
        >
            <MyTab.Screen 
              name="Home" 
              component={Home} 
              options={{
                tabBarIcon: ({color}) => <AntDesign name="home" size={31} color={color} />
              }}
            />
            <MyTab.Screen 
              name="Profile" 
              component={Profile}
              options={{
                tabBarIcon: ({color}) => <AntDesign name="user" size={27} color={color} />
              }}
            />
        </MyTab.Navigator>
    );
}