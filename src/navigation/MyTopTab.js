import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import ContactsCont from "../screens/ContactsCont";
import { Colors } from "../constants/colors";
import ContactsRedux from "../screens/ContactsRedux";

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
            <Tab.Screen name='Contacts' component={ContactsCont}/>
            <Tab.Screen name='Redux' component={ContactsRedux}/>
        </Tab.Navigator>
    );
}