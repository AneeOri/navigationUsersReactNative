import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "../constants/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyTopTab from "./MyTopTab";

const MyTab = createBottomTabNavigator();

export default function MyButtonTab() {
  const navigation = useNavigation();
    return(
        <MyTab.Navigator
        initialRouteName="TopTab"
         screenOptions={{
            headerTitleAlign:'center',
            tabBarInactiveTintColor: Colors.secondary,
         }}
        >
            <MyTab.Screen 
              name="TopTab" 
              component={MyTopTab} 
              options={{
                headerLeft: () => (
                <Pressable onPress={() => navigation.openDrawer()}>
                   <AntDesign name="menuunfold" style={{marginLeft:15}} size={31} color={Colors.secondary} />
                </Pressable>),
                headerRight: () => (
                  <Pressable onPress={() => navigation.navigate('Settings')}>
                     <AntDesign name="setting" style={{marginRight:15}} size={31} color={Colors.secondary} />
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