import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import * as Notification from 'expo-notifications';
import MyButton from "../components/MyButton";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Home(){
   const navigation = useNavigation();
   const isDrawerOpen = useDrawerStatus();
   const [date, setDate] = useState(new Date());
   const [notificationType, setNotificationType] = useState('default');
 
   /** navigation.openDrawer
    *  navigation.closeDrawer
    *  navigation.toggleDrawer
    */

   useEffect(() => {
    chackFirstLauch();
   },[]);

   async function handleNotification(){
    const trigger = new Date(date).getTime() +24 *60 *60 *1000;
      try {
        const id = await Notification.scheduleNotificationAsync({
          content:{
            title: 'Code with anee',
            body: 'test',
          },
          trigger,
        //  trigger:{
        //    seconds: 5,
        //    repeats: false,
        //  },
        });
        alert(`Notification scheduled! ${id} `);
      } catch (error) {
        alert('verify date');
      }
   }

   async function chackFirstLauch(){
    const firstLaunch = await AsyncStorage.getItem('@firsiLaunch');
    if(firstLaunch){
      return;
    }else{
      await AsyncStorage.setItem('@firstLauch', 'true');
      navigation.navigate('Onboarding');
    }
   }
   useEffect(() => { //when component is mounted subscription is generated 
    const subscription = Notification.addNotificationResponseReceivedListener(
        (response) => {
            console.log('Notification Response Received: ', response);
            setNotificationType(response.notification.request.content.title);
        }
     )
    return  () => subscription.remove();
    //when unmounted cancel subscription to avoid errors with unclean up function
   },[])

    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>{setNotificationType}</Text>
      <DateTimePicker
        value={date}
        style={{width: '25%'}}
        mode={'time'}
        onChange={(event, selectedDate) => {
          setDate(selectedDate);
        }}
      />
      <MyButton title={'Schedule Notifications'} onPress={handleNotification}/>
       <Card/>
     </View>
    );
}