import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";

export default function RootNavigator() {  /**Render the root navigator in App */
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
} 