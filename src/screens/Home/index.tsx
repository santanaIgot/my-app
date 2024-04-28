import { Text,View} from "react-native";
import{styles} from './styles'

export function Home() {
  return(
    <View style={styles.container}>
     <Text style={styles.text}>Nome do evento</Text>

     <Text style={styles.subtext}>
      Sexta, 4 novembro 2022
     </Text>


    </View>
   
  )
}