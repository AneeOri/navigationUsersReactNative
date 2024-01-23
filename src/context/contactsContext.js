import { createContext, useEffect, useReducer } from "react";
import { contactReducer } from "../Reducers/contactReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialContacts = [
    {id:0, name:'konta prado'},
    {id:1, name:'karoline ambrosi'},
    {id:2, name:'karlo ferdin'},
];

const contactsStore = createContext([]);
const {Provider} = contactsStore;

function ContactsProvider({children}){
    const [contacts, dispatch] = useReducer(contactReducer, []);

    useEffect(() => {
      getContacts();
    },[]);

    async function getContacts(){
        const contacts = await AsyncStorage.getItem('@Contacts');
        if(contacts === null){
            await AsyncStorage.setItem('@contacts', JSON.stringify(initialContacts));
            dispatch({type:'SET_CONTACTS', contacts: initialContacts})
        }else{
            dispatch({type: 'SET_CONTACTS', contacts: JSON.parse(contacts)});
        }
    }

    function handleAddContact(name){
        dispatch({type: 'ADD' ,id: Math.random(), name});
    }
    function handleDeleteContact(id){
        dispatch({type:'DELETE' , id});
    }
    function handleChangeContact(contact){
        dispatch({type:'CHANGE', contact});
    }

    return(
        <Provider value={{
            contacts,
            handleAddContact,
            handleDeleteContact,
            handleChangeContact,    
        }}
        >
            {children}
        </Provider>
    );
}

export {ContactsProvider, contactsStore};