import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./MyDrawer";
import SignUp from "../screens/authScreens/SignUp";
import AuthStack from "./authStack/AuthStack";

export default function RootNavigator() {  /**Render the root navigator in App */
   const user = true;
    return(
        <NavigationContainer>
           {user ? <MyDrawer/> : <AuthStack/>}
        </NavigationContainer>
    );
} 