import { View, Text, Button, StyleSheet, Image ,TouchableOpacity, Touchable} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LOGOUT_USER } from '../../actions/userAction';
import {useDispatch,useSelector} from "react-redux"

export default function AdminDashboard() {
  const navigation = useNavigation();
  const adminfunction=()=>{
    console.log("1");
 }
 const dispatch=useDispatch();

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
      <Text style={styles.title1}>Admin Dashboard</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}></View>
      </View>
      <View style={styles.Mvinnertwo}>
        <View style={styles.Row1}>
          <TouchableOpacity onPress={() => {navigation.navigate('ProfilePage') }}>
            <View style={styles.cel1}>
              <FontAwesome5 name="id-badge" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName4}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {navigation.navigate('ManageAdminPage') }}>
            <View style={styles.cel2}>
              <FontAwesome5 name="newspaper" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName2}>Manage Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {navigation.navigate('ManageStudent') }}>
            <View style={styles.cel3}>
              <FontAwesome5 name="pen" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName5}>Manage Students</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row1}>
          <TouchableOpacity >
            <View style={styles.cel4}>
              <FontAwesome5 name="id-badge" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName1}>Manage Teachers</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cel5}>
              <FontAwesome5 name="calendar" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName4}>Manage Fees</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cel6}>
              <FontAwesome5 name="credit-card" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName3}>Manage Timetable</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row1}>
          <TouchableOpacity  onPress={() => {navigation.navigate('ManageCourses') }}>
            <View style={styles.cel7}>
              <FontAwesome5 name="user-tie" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName7}>Manage Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => {navigation.navigate('classPageAdmin2') }}>
            <View style={styles.cel8}>
              <FontAwesome5 name="book" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName8}>Manage Classes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cel9}>
              <FontAwesome5 name="poll" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName6}>Announcement</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Row1}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.cel10}>
              <FontAwesome5 name="poll" size={30} color={"#fff"} />
            </View>
            <Text style={styles.ProfileName4}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Mainview: {
    height: "30%",
    backgroundColor: "#8a2be2",
    alignItems: "center",
  },
  title1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  Mvinnerone: {
    height: "35%",
    flexDirection: "column",
  },
  Row1: {
    flexDirection: "row",
    height: 120,
    justifyContent: "center",
  },
  cel1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#00bfff",
  },
  cel2: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  cel3: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: 10,
    marginLeft: 68,
    marginBottom: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "red",
  },
  cel4: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#483d8b",
  },
  cel5: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#ff69b4",
  },
  cel6: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: 10,
    marginLeft: 50,
    marginBottom: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "red",
    backgroundColor: "#ffa07a",
  },
  cel7: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#ba55d3",
  },
  cel8: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#6b8e23",
  },
  cel9: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    marginTop: 10,
    marginLeft: 45,
    marginBottom: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#4169e1",
  },
  cel10: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 10,
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#800000",
  },

  Mvinnertwo: {
    paddingTop: 40,
    height: "800%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: 2,
    backgroundColor: "#fff",
    width: 420,
    borderTopRightRadius: 100,
    alignItems: "center",
  },
  ProfileName1: {
    fontSize: 13,
    paddingRight: 15,
  },
  ProfileName2: {
    fontSize: 13,
    marginLeft: 25,
  },
  ProfileName3: {
    fontSize: 13,
    marginLeft: 20,
  },
  ProfileName4: {
    fontSize: 13,
    marginLeft: 10,
  },
  ProfileName5: {
    fontSize: 13,
    marginLeft: 40,
  },
  ProfileName6: {
    fontSize: 13,
    marginLeft: 40,
  },
  ProfileName7: {
    fontSize: 13,
    marginRight: 15,
  },
  ProfileName8: {
    fontSize: 13,
    marginLeft: 5,
  },
});
