import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "../constants/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyTab = createBottomTabNavigator();

export default function MyButtonTab() {
  const navigation = useNavigation();
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
                headerLeft: () => (
                <Pressable onPress={() => navigation.openDrawer()}>
                   <AntDesign name="menuunfold" style={{marginLeft:15}} size={31} color={Colors.secondary} />
                </Pressable>),
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