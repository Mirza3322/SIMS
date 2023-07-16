import { View,Text,Button,StyleSheet
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function feed(){
    const navigation=useNavigation();
   return(

       <View style={styles.appContainer}><Button
       onPress={() => {
        navigation.navigate("Home");
       }}
       title="Press Me"
     /></View>
   );
}
const styles = StyleSheet.create({
    appContainer:{
      marginTop:200     
    },
  
  });
  