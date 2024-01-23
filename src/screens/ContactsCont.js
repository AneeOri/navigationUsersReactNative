/**Using Context */
import { View } from 'react-native';
import {ContactsProvider} from '../context/contactsContext';
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';
import { globalStyles } from '../styles/global';

export default function ContactsCont(){
    return(
        <ContactsProvider>
          <View style={globalStyles.simpleContainer}>
            <AddContact/>
            <ContactList/>
          </View>
        </ContactsProvider>
    );
}