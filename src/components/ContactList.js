import { ScrollView, View,Text } from "react-native";

export default function ContactList({contacts,}){
    return(
        <ScrollView>
            {contacts.map((contact, index) => (
                <Contact
                 key={index}
                 contact={contact.name}
                />
            ))}
        </ScrollView>
    );
}

function Contact({contact}){
    return(
         <View>
            <Text>{contact}</Text>
         </View>
    );
}