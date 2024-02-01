import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./MyDrawer";
import SignUp from "../screens/authScreens/SignUp";
import AuthStack from "./authStack/AuthStack";
import { useSelector, useDispatch } from "react-redux";
import { restoreToken } from "../features/auth/auth";
import { useEffect } from "react";
import Splash from "../screens/Splash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import { useNavigation } from "@react-navigation/native";

export default function Wrapper(){
    return(
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

 function RootNavigator() {  /**Render the root navigator in App */
   const {userToken, isLoading} = useSelector(state => state.auth);
   const dispatch = useDispatch();
   const navigation = useNavigation();

   useEffect(() => {
    getValue();
   },[]);

   useEffect(() => { 
    const subscription = Notifications.addNotificationResponseReceivedListener(
        (response) => {
            console.log('Notification Response Received: ', response);
            const toRoute = response.notification.request.content.data.route;
            const data = response.notification.request.content.data;
            switch(toRoute){
                case 'Settings' :{ 
                    navigation.navigate('Settings', data);
                    break;
                }
                case 'Navigation' :{ 
                    navigation.navigate('navigation', data);
                    break;
                }
                default: {
                    break;
                }
            }
            
        }
     )
    return  () => subscription.remove();
    //when unmounted cancel subscription to avoid errors with unclean up function
   },[])

   async function getValue() {
    try {
         const value = await AsyncStorage.getItem('@token');
         if(value!== null){
            console.log('data restored', value);
            dispatch(restoreToken(value));
         }else{
            console.log('no data');
            dispatch(restoreToken(null));
         }
    } catch (error) {
        console.log(error);
    }
}
    if(isLoading) return <Splash/>;
    return(
        <> {userToken ? <MyDrawer/> : <AuthStack/>}</>
    );
} 