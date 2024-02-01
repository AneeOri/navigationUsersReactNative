import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { useRoute } from "@react-navigation/native";


export default function Settings(){
    const route = useRoute();
    console.log(route);
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={{backgroundColor:'orange'}}>Settings</Text>
        </View>
    )
}