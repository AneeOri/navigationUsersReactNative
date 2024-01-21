import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";

export default function Contacts(){

    const navigation = useNavigation();
    const [contacts, setContacts] = useState(initialContacts);

    return(
     <View style={globalStyles.simpleContainer}>
      <AddContact/>
      <ContactList contacts={contacts}/>
     </View> 
    );
}

const initialContacts = [
    {id:0, name: 'Tato Lee'},
    {id:1, name: 'Hisa Hio'},
    {id:2, name: 'Kanani Lokelani'},
]
//Before
/*export default function Contacts(){
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('tabLongPress' , e => {
            console.log(e);
        });

        return unsubscribe;
    },[navigation]);

    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Contacts</Text>
      <Button title='home' onPress={() => navigation.jumpTo('Home', {name: 'Lux'})}/>
     </View> 
    );
}*/