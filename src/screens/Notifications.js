import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { useReducer } from "react";

//function reducer(state, action) { //action is an object
function reducer(state, {type, title, body, to}) { 
    switch(type){
      case 'SET_TITLE': {
        return{...state, title};
      }
      case 'SET_BODY' : {
        return {...state, body};
      }
      default:
    }
}

export default function Notifications(){

   const [state, dispatch] = useReducer(reducer, {
    to:'',
    sound:'default',
    title: '',
    body: '',
    data:{}
   })

   async function sendPushNotification(){
    await fetch ('https://exp.host/--/api/v2/push/send', {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(state),
      });
   }

    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Notifications</Text>
      <MyInput label={'Title'} onChangeText={(text) => dispatch({type: 'SET_TITLE', title:text})}/>
      <MyInput label={'Body'} onChangeText={(text) => dispatch({type:'SET_BODY' ,body: text})}/>
      <MyButton title={'Send'} onPress={sendPushNotification}/>
     </View>
    );
}