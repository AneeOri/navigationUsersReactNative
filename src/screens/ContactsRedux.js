import { View, Text, Pressable } from "react-native";
import { globalStyles } from "../styles/global";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../features/auth/contacts/contacts";

/**useSelector para acceder al estado */
/**useDispatch para cambiar el estado, se inciializa porque es una funcion*/

export default function ContactsRedux(){
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    function handleLongPress(id){
        dispatch(deleteContacts(id));
    }
    return(
        <View style={globalStyles.simpleContainer}>
           <Text style={globalStyles.title}>Contacts Redux</Text>
           {contacts.map((i, index)=>(
             <Pressable key={index} onLongPress={() => handleLongPress(i.id)}>
                <Text>{i.name}</Text>
             </Pressable>
           ))}
        </View>
    );
}