import { Text,View,TextInput, TouchableOpacity} from "react-native";
import{styles} from './styles'

export function Home() {
  function handleParticipantAdd() {
    alert('adicionado')
  }
  return(
    <View style={styles.container}>
     <Text style={styles.text}>Nome do evento</Text>

     <Text style={styles.subtext}>
      Sexta, 4 novembro 2022
     </Text>

     <TextInput style={styles.input} 
     placeholder="Nome do participante"
     placeholderTextColor="#6B6B6B"

     />

     <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>+</Text>
     </TouchableOpacity>

    </View>
   
  )
}