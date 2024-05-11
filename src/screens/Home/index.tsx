import { Text,View,TextInput, TouchableOpacity} from "react-native";
import{styles} from './styles'
import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    alert('adicionado')
  }

  function handleParticipantRemove(name:string) {
    alert(`Voce removeu o participante ${name}`)
  }
  return(
    <View style={styles.container}>
     <Text style={styles.text}>Nome do evento</Text>

     <Text style={styles.subtext}>
      Sexta, 4 novembro 2022
     </Text>

     <View style={styles.form}>
        <TextInput style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6B6B6B"

        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
         <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
     </View>

     <Participant name="Igor" onRemove={()=> handleParticipantRemove("Igor")}/>
     <Participant name="Diogo" onRemove={()=> handleParticipantRemove("Diogo")}/>
     <Participant name="Carlos" onRemove={()=> handleParticipantRemove("Carlos")}/>
     

    </View>
   
  )
}