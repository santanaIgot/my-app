import { Text,View,TextInput, TouchableOpacity,ScrollView, Alert} from "react-native";
import{styles} from './styles'
import { Participant } from "../../components/Participant";

export function Home() {
  //ativando scroll
  const participants = ['igor','diogo', 'carlos','melin', 'yuri','erick','joel', 'lucas','gui','lele']


  function handleParticipantAdd() {
    console.log("adicionado");
    
    if(participants.includes("igor")){
       return Alert.alert("Participante Existe", "Já existe")
    }
  }

  function handleParticipantRemove(name:string) {
    console.log(`Voce removeu o participante ${name}`)
    Alert.alert("Remover", `Deseja remover o participante ${name}?`,[
      {
        text:"sim",
        onPress:()=>Alert.alert('Deletado')
      },
      {
        text:"não",
        style:'cancel'
      }
    ])
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
    <ScrollView>
     {
      participants.map(participant => (
        <Participant 
        key={participant}
        name={participant}
        onRemove={()=> handleParticipantRemove(participant)}/>
      ))
     }
    </ScrollView>
     {/* <Participant name="Diogo" onRemove={()=> handleParticipantRemove("Diogo")}/>
     <Participant name="Carlos" onRemove={()=> handleParticipantRemove("Carlos")}/> */}
     

    </View>
   
  )
}