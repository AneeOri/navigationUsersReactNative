import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "../components/CustomHeader";
import Settings from "../screens/Settings";
import { Text, View } from "react-native";
import { Colors } from "../constants/colors";
import MyButtonTab from "./MyButtonTab";

const HomeStack = createStackNavigator();

const myConfig = {
    headerShown:false,
    headerTitleAlign:'center',
    presentation:'card',
    header : ({navigation, route, options, back}) => (
        <CustomHeader title={route.name}/>
    ),
};

export default function MyStack(){
    /** The name atribute must be unique */
    /** Button Tab inside the stack */
    return(
       <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={myConfig}
       >
        <HomeStack.Screen name='Root' component={MyButtonTab}/> 
        <HomeStack.Group screenOptions={{headerShown:true}}>
          <HomeStack.Screen name='Settings' component={Settings}/>
        </HomeStack.Group>
       </HomeStack.Navigator>
    );
}