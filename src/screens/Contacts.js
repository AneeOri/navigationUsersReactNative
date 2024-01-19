import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function Contacts(){
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
}

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