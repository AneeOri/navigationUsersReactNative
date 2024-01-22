import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";
import {contactReducer} from '../Reducers/contactReducer';
import { useReducer } from "react";


export default function ContactsRedu(){

    const [contacts, dispatch] = useReducer(contactReducer,initialContacts);
    
    function handleAddContact(name){
        dispatch({type: 'ADD' ,id: nextId++, name});
    }

    function handleDeleteContact(){
        dispatch({type:'DELETE' , id});
    }

    function handleChangeContact(){
        dispatch({type:'CHANGE', contact});
    }

    return(
        <View style={globalStyles.simpleContainer}>
        <AddContact onAddContact = {handleAddContact}/>
        <ContactList contacts={contacts}
           onChangeContact={handleChangeContact}
           onDeleteContact={handleDeleteContact}
        />
       </View> 
    );
}

let nextId = 3;
const initialContacts = [
    {id:0, name: 'Tato Lee'},
    {id:1, name: 'Hisa Hio'},
    {id:2, name: 'Kanani Lokelani'},
]