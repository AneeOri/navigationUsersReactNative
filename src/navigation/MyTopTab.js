import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Contacts from "../screens/Contacts";
import ContactsRedu from "../screens/ContactsRedu";
import { Colors } from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

export default function MyTopTab(){
    return(
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle:{color: Colors.secondary},
            tabBarIndicatorStyle:{backgroundColor: Colors.secondary},
          }}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Contacts' component={ContactsRedu}/>
        </Tab.Navigator>
    );
}