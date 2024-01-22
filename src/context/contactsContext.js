import { createContext, useReducer } from "react";
import { contactReducer } from "../Reducers/contactReducer";

let nextId = 3;

const initialContacts = [
    {id:0, name:'konta prado'},
    {id:1, name:'karoline ambrosi'},
    {id:2, name:'karlo ferdin'},
];

const contactsStore = createContext(initialContacts);
const {Provider} = contactsStore;

function ContactsProvider({children}){
    const [contacts, dispatch] = useReducer(contactReducer, initialContacts);

    function handleAddContact(name){
        dispatch({type: 'ADD' ,id: nextId++, name});
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