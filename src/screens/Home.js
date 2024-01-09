import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home(){
    return(
     <View style={globalStyles.screenContainer}>
      <Text>Home</Text>
     </View>
    );
}