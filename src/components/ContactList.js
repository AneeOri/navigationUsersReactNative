import { useContext, useMemo, useState } from "react";
import { ScrollView, View,Text, StyleSheet, Image, Button, Pressable } from "react-native";
import MyInput from "./MyInput";
import {getRandomPhoto} from '../utils/randomPhotos'
import { Colors } from "../constants/colors";
import { AntDesign } from '@expo/vector-icons';
import { contactsStore } from "../context/contactsContext";

export default function ContactList(){
    const {contacts} = useContext(contactsStore);
    return(
        <ScrollView >
            {contacts.map((contact, index) => (
                <Contact
                 key={index}
                 contact={contact}
                />
            ))}
        </ScrollView>
    );
}

function Contact({contact}){
    const {handleChangeContact, handleDeleteContact} = useContext(contactsStore);
    const [isEditing, setIsEditing] = useState(false);
    let contactContainer;
    const memoPhoto = useMemo(()=>getRandomPhoto(),[]);
    if(isEditing){
        contactContainer = (
            <View>
                <MyInput value={contact.name}
                onChangeText={text => handleChangeContact({...contact, name: text})}/>
            </View>
        );
    }else{
        contactContainer = (
            <View>
                <Text style={styles.name}>{contact.name}</Text>
            </View>
        );
    }
    return(
        <View style={styles.contactContainer}>
          <View style={styles.row}>
            <Image source={memoPhoto} style={styles.image}/>
             {contactContainer}
          </View>
          <View>
            {isEditing ? (
                <Button title="Save" onPress={() => setIsEditing(false)}/>
            ):(
               <View style={styles.row}>
                <Pressable  onPress={() => setIsEditing(true)} style={styles.pressable}>
                   <AntDesign name="edit" size={24} color={Colors.secondary}  /> 
                </Pressable>
                <Pressable onPress={() => handleDeleteContact(contact.id)} style={styles.pressable}>
                   <AntDesign name="delete" size={24} color={Colors.secondary} /> 
                </Pressable>
                </View>
    
            )}
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contactContainer:{
      width:'100%',
      flexDirection:'row',
      padding:10,
      borderColor:Colors.gray,
      borderBottomWidth: StyleSheet.hairlineWidth,
      paddingRight:100,
    },
    image:{
       width:50,
       height:50,
       borderRadius:25,
       marginRight:10,
    },
    row:{
        flexDirection:'row',
        width:'100%',
    },
    name:{
        fontSize:17,
        fontWeight:'bold',
        color:Colors.dark,
    },
    pressable:{
        padding:10,
    }
});
