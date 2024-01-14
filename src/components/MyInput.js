import { TextInput, View } from "react-native";


export default function MyInput({label,value,onChangeText,secureTextEntry,}){

    /**label,
     * value, text value at the beginning
     * onChangeText, save the input in the variable, usually with usestate
     * secureTextEntry, textInput included property, could be active or not*/

    return(
       <View>
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry} 
        />
       </View>
    );
}