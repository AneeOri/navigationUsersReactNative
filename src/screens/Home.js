import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";
import { useEffect } from "react";

export default function Home(){
   const navigation = useNavigation();
   const isDrawerOpen = useDrawerStatus();

   /** navigation.openDrawer
    *  navigation.closeDrawer
    *  navigation.toggleDrawer
    */

   useEffect(() => {
    chackFirstLauch();
   },[])

   async function chackFirstLauch(){
    const firstLaunch = await AsyncStorage.getItem('@firsiLaunch');
    if(firstLaunch){
      return;
    }else{
      await AsyncStorage.setItem('@firstLauch', 'true');
      navigation.navigate('Onboarding');
    }
   }

    return(
     <View style={globalStyles.screenContainer}>
       <Card/>
     </View>
    );
}