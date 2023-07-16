import { View,Text,Button,StyleSheet
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function feed(){
    const navigation=useNavigation();
   return(

       <View style={styles.mainWelcomeView}>
        <View style={styles.mainWelcomeInnerView1}></View>
        <View style={styles.mainWelcomeInnerView2}></View>
       </View>
   );
}
const styles = StyleSheet.create({
    appContainer:{
      marginTop:200     
    },
  
  });
  