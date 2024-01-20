import { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import MyInput from './MyInput';
import { Colors } from "../constants/colors";

export default function AddContact(){
    const [name, setName] = useState('');
    
    return(
        <View style={styles.container}>
          <View style={{width:'80%'}}>
            <MyInput/>
          </View>
          <Button title="Add" color={Colors.primary}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        width: '100%',
        paddingVertical:'5%',
        height: '15%'
    },
});