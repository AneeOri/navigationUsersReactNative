import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
   const navigation = useNavigation();
    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      <Button
        onPress={() => navigation.navigate('Settings')}
        title="S"
      />
     </View>
    );
}