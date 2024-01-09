import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const HomeStack = createStackNavigator();

export default function MyStack(){
    /** the name atribute must be unique */
    return(
       <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home}/> 
        <HomeStack.Screen name='Settings' component={Settings}/>
       </HomeStack.Navigator>
    );
}