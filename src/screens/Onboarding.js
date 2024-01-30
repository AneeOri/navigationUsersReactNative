import { Text, View,Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/colors";
import MyButton from "../components/MyButton";

export default function Onboarding(){
 return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App</Text>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require('../../assets/arrows.png')}/>
        <View style={{flex:1}}>
           <Text style={styles.subtitle}>Manage Daily tasks</Text>
           <Text style={styles.subHeadLine}>This is a simple app that helps you to increase your productivity.</Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require('../../assets/bell.png')}/>
        <View style={{flex:1}}>
           <Text style={styles.subtitle}>Notifications</Text>
           <Text style={styles.subHeadLine}>Please allow us to notify you when it's time to do your tasks.</Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require('../../assets/design.png')}/>
        <View style={{flex:1}}>
           <Text style={styles.subtitle}>Minimal Design</Text>
           <Text style={styles.subHeadLine}>Enjoy a simple desing thet allows you to focus only on what you have to do.</Text>
        </View>
      </View>
      <MyButton title={'Continue'}/>
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