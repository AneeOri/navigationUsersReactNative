import { Text, View,Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/colors";

export default function Onboarding(){
 return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App</Text>
    </View>
 );
}

const androidHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.light,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        marginBottom: androidHeight > 800 ? 70 : 50,
        marginTop:100,
        color: Colors.secondary,
    },
    subtitle:{
         fontSize:15,
         fontWeight:'bold',
         lineHeight:22,
         color: Colors.secondary,
    },
    subHeadLine:{
         fontSize:15,
         fontWeight:'400',
         lineHeight:20,
         color: Colors.dark,
    },
    featureContainer:{
          flexDirection:'row',
          alignItems:'center',
          paddingHorizontal:20,
          marginBottom:30,
    },
    icon:{
        width:42,
        height:42,
        marginRight:20,
        resizeMode:'contain',
    },
})