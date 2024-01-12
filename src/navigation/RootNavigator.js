import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./MyDrawer";

export default function RootNavigator() {  /**Render the root navigator in App */
    return(
        <NavigationContainer>
           <MyDrawer/>
        </NavigationContainer>
    );
} 