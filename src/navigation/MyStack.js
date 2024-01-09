import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "../components/CustomHeader";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import { Text, View } from "react-native";
import { Colors } from "../constants/colors";

const HomeStack = createStackNavigator();

export default function MyStack(){
    /** the name atribute must be unique */
    return(
       <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown:true,
            //title:'something',
            headerTitleAlign:'center',
            presentation: 'card',
            header : ({navigation, route, options, back}) => (
                <CustomHeader title={route.name}/>
            ),
        }}
       >
        <HomeStack.Screen name='Home' component={Home}/> 
        <HomeStack.Screen name='Settings' component={Settings}/>
       </HomeStack.Navigator>
    );
}