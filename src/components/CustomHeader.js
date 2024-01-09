import { View, Text, Button } from "react-native";
import { Colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function CustomHeader({title}){

  const navigation = useNavigation();
    return(
        <View
          style={{
            height:80,
            width:'100%',
            backgroundColor:Colors.secondary,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'flex-start',
            paddingTop:30,
            paddingRight:150,
          }}
        >
          <Button
           title="Home"
           onPress={()=> navigation.navigate('Home')}
           />
           <Text
             style={{
                fontSize:20,
                fontWeight:'bold',
                color:Colors.light
             }}
           >
             {title}
           </Text>
        </View>
    );
}