import AsyncStorage from "@react-native-async-storage/async-storage";

export function contactReducer(contacts, action){ //reducer is an independent pure function doesn´t depend on the component   
    switch(action.type){
        case 'SET_CONTACTS': {
              return action.contacts;
        }
        case 'ADD':{
              const newContacts = [...contacts, {id:action.id, name: action.name}];
              const jsonValues = JSON.stringify(newContacts);
              AsyncStorage.setItem('@contacts', jsonValues);
              return newContacts;
        }
        case 'DELETE':{
              const newContacts = contacts.filter(c => c.id !== action.id);
              const jsonValues = JSON.stringify(newContacts);
              AsyncStorage.setItem('@contacts', jsonValues);
              return newContacts; 
        }
        case 'CHANGE':{
              const newContacts = contacts.map(contact =>
                contact.id === action.contact.id ? action.contact : contact);
              const jsonValues = JSON.stringify(newContacts);
              AsyncStorage.setItem('@contacts',jsonValues);  
              return newContacts;
        }
        default:{
            throw new Error('Unknown action type: ' + action.type);
        }
    }
}