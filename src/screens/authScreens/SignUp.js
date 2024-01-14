import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import MyInput from "../../components/MyInput";

export default function SignUp(){
    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={'Email'}/>
     </View>
    );
}