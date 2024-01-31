import { Text, View,Image, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/colors";
import MyButton from "../components/MyButton";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Onboarding(){
  const navigator = useNavigation();

  function handlePress(){
    registerForPushNotifications()
     .then(async token => {
      await AsyncStorage.setItem('@pushToken', token);
      navigator.navigate('Home');
     })
  }

  async function registerForPushNotifications(){
    let token;
    if(Device.isDevice){
      const {status: existingStatus} = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if(existingStatus !== 'granted'){
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if(finalStatus !== 'granted'){
        alert('fail to get token');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('this is the token,', token);
    }else{
      return;
    }

    if(Platform.OS === 'android'){
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0,250,250,250],
        lightColor: '#FF231F7C',
      })
    }
    return token;
  }

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
      <MyButton title={'Continue'} onPress={handlePress}/>
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
        paddingBottom: 150,
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