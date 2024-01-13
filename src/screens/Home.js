import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";

export default function Home(){
   const navigation = useNavigation();
   const isDrawerOpen = useDrawerStatus();

   /** navigation.openDrawer
    *  navigation.closeDrawer
    *  navigation.toggleDrawer
    */
    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      {
        isDrawerOpen === 'open' ? (
          <Button
          title="S"
        />
        ) : (
          <Button
          onPress={() => navigation.navigate('Settings')}
          title="S"
        />
        )
      }
     
     </View>
    );
}