import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

//criamos um objeto para tipar 
type Props = {
    name:String;
    onRemove: () => void;
}


export function Participant({name,onRemove}: Props) {
  
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                 {name}
            </Text>
         <TouchableOpacity style={styles.button} onPress={onRemove}>
         <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>
    )
}