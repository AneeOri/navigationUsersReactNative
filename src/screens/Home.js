import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import Card from "../components/Card";

export default function Home(){
   const navigation = useNavigation();
   const isDrawerOpen = useDrawerStatus();

   /** navigation.openDrawer
    *  navigation.closeDrawer
    *  navigation.toggleDrawer
    */
    return(
     <View style={globalStyles.screenContainer}>
       <Card/>
     </View>
    );
}