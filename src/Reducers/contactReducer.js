
export function contactReducer(contacts, action){ //reducer is an independent pure function doesn´t depend on the component   
    switch(action.type){
        case 'ADD':{
             return [...contacts, {id:action.id, name: action.name}];
        }
        case 'DELETE':{
             return contacts.filter(c => c.id !== action.id);
        }
        case 'CHANGE':{
             return contacts.map(contact =>
                contact.id === action.contact.id ? action.contact : contact);
        }
        default:{
            throw new Error('Unknown action type: ' + action.type);
        }
    }
}