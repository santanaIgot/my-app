import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Participant() {
    function handleParticipantRemove() {
        alert('Participante removido')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                Igor Ferreira
            </Text>
         <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
         <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>
    )
}