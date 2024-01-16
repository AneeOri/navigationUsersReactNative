import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../../screens/authScreens/SignUp";
import Login from "../../screens/authScreens/Login";


const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator
         screenOptions={{
            headerShown:false,
         }}
        >
            <Auth.Screen name='Login' component={Login}/>
            <Auth.Screen name='SignUp' component={SignUp}/>
        </Auth.Navigator>
    );
}