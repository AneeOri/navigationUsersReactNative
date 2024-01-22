
function contactReducer(contacts, action){
    switch(action.type){
        case 'ADD':{
             return [...contacts, {id:action.id, name: action.name}];
        }
        case 'DELETE':{
             return contacts.filter(c => c.id ==! action.id);
        }
        case 'CHANGE':{
             return contacts.map(c => (c.id === action.c.id ? action.c : c))
        }
        default:{
            throw new Error('Unknown action type: ' + action.type);
        }
    }
}