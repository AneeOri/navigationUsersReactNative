import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";


export default function Settings(){
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={{backgroundColor:'orange'}}>Settings</Text>
        </View>
    )
}