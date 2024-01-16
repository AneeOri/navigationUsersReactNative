import { View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <MyInput label={'Email'}/>
      <MyInput label={'Password'} secureTextEntry/>
      <MyButton title={'Sign In'}/>
      <MyButton title={'Sign Up'} onPress={() => navigation.navigate('SignUp')}/>
     </View>
    );
}