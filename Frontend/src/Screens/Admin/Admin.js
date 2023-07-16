import { View, Text, Button, StyleSheet, Image ,TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LOGOUT_USER } from '../../actions/userAction';
import {useDispatch,useSelector} from "react-redux"

export default function Admin() {

  
  
  const adminfunction=()=>{
     console.log("1");
  }
  const dispatch=useDispatch();
  const navigation = useNavigation();
  const {isAuthenticated,error}=useSelector((state)=>state.user)
  
  const handlePress = () => {
    console.log('1');
    dispatch(LOGOUT_USER())
    console.log('2');
    console.log(isAuthenticated);

  };
  useEffect(()=>{

    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }

    if(isAuthenticated===false){
      navigation.navigate('Login');
    }
  },[dispatch,error,alert,isAuthenticated])
  

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title}>Administration Pannel</Text>
      
      <View style={styles.Mvinnertwo}>
        <View style={styles.Row1}>
          <TouchableOpacity style={styles.cel1} onPress={() => {navigation.navigate('ProfilePage') }}>
            <View style={styles.iconview}>
            <FontAwesome5 name="id-badge" size={30} color={"#fff"} />
            </View>
            <TouchableOpacity style={styles.text} >
            <Text> Profile</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cel2} onPress={() => {navigation.navigate('ManageAdminPage') }}>
            <View style={styles.iconview}>
            <FontAwesome5 name="newspaper" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Admin</Text>
            </View>
          </TouchableOpacity>
          
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <View style={styles.iconview}>
            <FontAwesome5 name="id-badge" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Student</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cel2} onPress={() => {navigation.navigate('classPageAdmin') }}>
            <View style={styles.iconview} >
            <FontAwesome5 name="calendar" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Teacher</Text>
            </View>
          </TouchableOpacity>
          
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <View style={styles.iconview}>
            <FontAwesome5 name="user-tie" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Classes</Text>
            </View>
          </View>
          <View style={styles.cel2}>
            <View style={styles.iconview}>
            <FontAwesome5 name="book" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Timetable</Text>
            </View>
           </View>
           
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <View style={styles.iconview}>
            <FontAwesome5 name="id-badge" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Courses</Text>
            </View>
          </View>
          <View style={styles.cel2}>
            <View style={styles.iconview}>
            <FontAwesome5 name="newspaper" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Manage Fees</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1} onPress={handlePress}>
            <View style={styles.iconview}>
            <FontAwesome5 name="id-badge" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}  >
            <Text>Announcement Board</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.cel2} onPress={handlePress}>
            <View style={styles.iconview}>
            <FontAwesome5 name="newspaper" size={30} color={"#fff"} />
            </View>
            <View style={styles.text}>
            <Text>Logout</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
    
  );
} 
const styles = StyleSheet.create({
  iconview: {
    width: '30%',
    height: '90%',
    backgroundColor: '#7956b5',
    alignItems: 'center',
    shadowColor: '#000',
    justifyContent:'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text:{
   backgroundColor:'white',
   width:"70%",
   height:"90%",
   justifyContent:"center",
   alignItems:'center'
  },
  Mainview: {
    height: "100%",
    backgroundColor: "#7956b5",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  circleContainer: {
    marginHorizontal: 10,
    alignItems: "center",
  },
  circleTeacher: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  circleStudent: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  circleText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
  },
  Mvinnerone: {
    //  flex:1,
    height: "25%",
    flexDirection: "column",
  },
  Mvinnertwo: {
    padding: "5%",
    backgroundColor: "white",
    width: "95%",
    height: "100%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: 2,
  },
  Row1: {
    flexDirection: "row",

    height: 100,
    justifyContent: "center",
  },
  cel1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#7956b5', // Add a background color here
    borderColor: '#7956b5',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  cel2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#7956b5', // Add a background color here
    borderColor: '#7956b5',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  cel3: {
    justifyContent: "center",
    alignItems: "center",
    width: "32%",

    margin: 10,
    borderColor: "#7956b5",
    borderWidth: 2,
    borderRadius: 10,
  },
});
