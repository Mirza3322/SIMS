import { View,Text,Button,StyleSheet,Image,KeyboardAvoidingView,Keyboard 
} from "react-native";
import {Picker} from "@react-native-picker/picker"
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch,useSelector} from "react-redux"
import { RegisterClass,GetClassessInfo } from '../../actions/adminAction';
import { useState ,useEffect} from "react";


export default function ClassRegistration(){
    const {isAuthenticated,admin}=useSelector((state)=>state.admin)
    const [className,setclassName]=useState("");
    const [Fee,setFee]=useState(""); 
    const navigation=useNavigation();
    const dispatch=useDispatch();
    console.log(admin);
   // console.log("error");
    //console.log(loading);
    //console.log(isAuthenticated);
    
    const classSubmit=async()=>{
        dispatch(RegisterClass(className,Fee ))
    }
    const classInfo=async()=>{
        dispatch(GetClassessInfo())
    }
    
useEffect(()=>{
if(isAuthenticated){
    //console.log(user);
}
  
},[])
         
    return(

       <View style={styles.Mainview}>
         
         
          <View style={styles.Mvinnertwo}>
          
          <View style={styles.Loginform}>
          <View style={styles.Loginformfields}>
          <TextInput style={styles.MvinneroneInputSearch}   placeholder="Class"  value={className} onChangeText={text => setclassName(text)}></TextInput>
          <TextInput style={styles.MvinneroneInputSearch}   placeholder="Fees Related to class" value={Fee} onChangeText={text => setFee(text)}></TextInput>
          
          </View>       
          <View style={styles.signIN}>
          <View style={styles.signINbutton}>
            <Button title="Add Class" color="#7956b5" 
              onPress={classSubmit}
            ></Button>
            </View>
            <View style={styles.signUpbutton}>
            <Button title="View All Classes" color="#7956b5" onPress={classInfo}></Button>
            </View>
          </View> 

          </View>
           
           </View>
           



         </View>
         
   );
}
const styles = StyleSheet.create({
  Mainview:{
    height:"100%",
    backgroundColor:"#7956b5",
    alignItems:"center"
  },
  Mvinnerone:{
  //  flex:1,
    
   
    height:"35%",
    flexDirection:'column'
  },
 
  Mvinnerone1Image:{
    marginLeft:-20,
    alignItems:'flex-start',
    width:150,
    height:150
  },
  Mvinnerone1:{
   flexDirection:'row'
  },
  Mvinnerone1view1:{
    justifyContent:'center',
    alignItems:'flex-start',
    width:"30%",
    
  },
  Mvinnerone1view2:{ 
    justifyContent:'center',
    alignItems:'center',
    width:"70%",
    fontSize:20
  },
  Mvinnerone1view2Text:{
    fontSize:20,
    color:'white'
  },
  MvinneroneInput:{
   justifyContent:'center',
   alignItems:'center'
  },
  MvinneroneInputSearch:{
    //justifyContent:'center',
     //alignItems:'center',
    marginTop:20,
    backgroundColor:'white',
    width:'100%',
    padding:'2%',
    borderColor:"#7956b5",
    borderWidth:2,
    borderRadius:10
    
    
  },

  Mvinnertwo: {
    padding:"5%",
    backgroundColor: "white",
    width:"95%",
    height:'100%',
    borderColor:'white',
    borderWidth:1,
    borderRadius:20,
    shadowColor:"black",
    shadowOffset:2,
    


  },
  Row1:{
    flexDirection:'row',
   
    height:100,
    justifyContent:'center',
    
  },
  cel1:{
    justifyContent:"center",
    alignItems:"center",
    width:"25%",
    
    margin:10,
    borderColor:"#7956b5",
    borderWidth:2,
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{width:0,height:7},
    shadowOpacity:0.43,
    shadowRadius:9.51 
  },
  cel2:{
    justifyContent:"center",
    alignItems:"center",
   width:"25%",
   
   margin:10,
   borderColor:"#7956b5",
    borderWidth:2,
    borderRadius:10
  },
  cel3:{
    justifyContent:"center",
    alignItems:"center",
  width:"25%",
  
  margin:10,
  borderColor:"#7956b5",
    borderWidth:2,
    borderRadius:10
  },
  forgotpass:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginTop:4,
    marginBottom:4
  },
  signIN:{
    marginTop:'2%',
    justifyContent:"center"
  },
  signINbutton:{
    marginBottom:6
  },
  Loginform:{
    //alignItems:"center"
  }
  
  });
  