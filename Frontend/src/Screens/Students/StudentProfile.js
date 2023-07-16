import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  // import { FlatList, TextInput } from "react-native-gesture-handler";
  import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
  import { GetAdminProfileInfo } from '../../actions/adminAction';
  import {useDispatch,useSelector} from "react-redux"
  import Loader from "../Loader";
  export default function Home() {
    const dispatch=useDispatch();
    const navigation = useNavigation();
    const [selectedTab, setSelectedtab] = useState(0);
    const {user,loading}=useSelector((state)=>state.adminProfile);
    
    console.log("1");
  /*  if(user.name ==="ateeq"){
      console.log("yess its me");
    }*/
    
  
    useEffect(()=>{
  
    dispatch(GetAdminProfileInfo());
    console.log(user);
    console.log(user.name);  
        
    },[dispatch,alert])
    
    if (loading) {
      // Show loader while loading is true
      return <Loader />;
    }
  
  
    return (
      <View style={styles.Mainview}>
        <View style={styles.Mvinnertwo}>
          <View style={styles.ProfileImage}>
            <Image
              source={{ uri: user.image.url }}
              style={styles.ProfileImageIneer}
            />
          </View>
          <View>
            <Text style={styles.ProfileName}>{user.name}</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                width: 340,
                height: 40,
                borderRadius: 15,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: "96%",
                  backgroundColor: selectedTab == 0 ? "#7956b5" : "white",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setSelectedtab(0);
                }}
              >
                <Text
                  style={{
                    color: selectedTab == 0 ? "#fff" : "#000",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Student Profile
                </Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                style={{
                  width: "50%",
                  height: "96%",
                  backgroundColor: selectedTab == 1 ? "#7956b5" : "white",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setSelectedtab(1);
                }}
              >
                <Text
                  style={{
                    color: selectedTab == 1 ? "#fff" : "#000",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  Academic Info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {selectedTab == 0 ? (
            <ScrollView>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 20,
                }}
              >
                <FontAwesome5 name="landmark" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>{user.email}</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="list" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>{user.address}</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>{user.phone}</Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>
                  Admission date:2019-09-24
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>{user.role}</Text>
              </View>
              <View
                style={{
                  borderColor: "#7956b5",
                  borderWidth: 2,
                  marginTop: 15,
                  width: 400,
                }}
              ></View>
  
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>
                  Personal Information
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>
                  Father name:Mirza Shahid Aziz
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>
                  Contact no:11897
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>
                  Email Address:m123@gmail.com
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 300,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
                <Text style={{ fontSize: 16, marginLeft: 8 }}>
                  Permanent Address:37 hn housing society,Houston
                </Text>
              </View>
              <View
                style={{
                  borderColor: "#7956b5",
                  borderWidth: 2,
                  marginTop: 15,
                  width: 300,
                }}
              ></View>
            </ScrollView>
          ) : (
            <ScrollView>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
              <View
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#7956b5",
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Class:10</Text>
                <Text style={{ color: "white", marginLeft: 8 }}>
                  Marks Obtained:200/280
                </Text>
                <Text style={{ color: "white", marginLeft: 8 }}>Grade:A</Text>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    Mainview: {
      height: "100%",
      backgroundColor: "#7956b5",
      alignItems: "center",
    },
    Mvinnerone: {
      //  flex:1,
      marginTop: 20,
      backgroundColor: "white",
      height: "30%",
      flexDirection: "column",
    },
  
    Mvinnerone1Image: {
      marginLeft: -20,
      alignItems: "flex-start",
      width: 150,
      height: 150,
    },
    Mvinnerone1: {
      flexDirection: "row",
    },
    Mvinnerone1view1: {
      justifyContent: "center",
      alignItems: "flex-start",
      width: "30%",
    },
    Mvinnerone1view2: {
      justifyContent: "center",
      alignItems: "center",
      width: "70%",
      fontSize: 20,
    },
    Mvinnerone1view2Text: {
      fontSize: 20,
      color: "white",
    },
    MvinneroneInput: {
      justifyContent: "center",
      alignItems: "center",
    },
    MvinneroneInputSearch: {
      //justifyContent:'center',
      //alignItems:'center',
      marginTop: 20,
      backgroundColor: "white",
      width: "85%",
      padding: "2%",
      borderColor: "#7956b5",
      borderWidth: 2,
      borderRadius: 20,
    },
  
    Mvinnertwo: {
      padding: "5%",
      backgroundColor: "white",
      width: "95%",
      marginTop: 100,
      height: "90%",
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 20,
      shadowColor: "black",
      shadowOffset: 2,
      alignItems: "center",
    },
    Row1: {
      flexDirection: "row",
  
      height: 100,
      justifyContent: "center",
    },
    cel1: {
      justifyContent: "center",
      alignItems: "center",
      width: "25%",
  
      margin: 10,
      borderColor: "#7956b5",
      borderWidth: 2,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
    },
    cel2: {
      justifyContent: "center",
      alignItems: "center",
      width: "25%",
  
      margin: 10,
      borderColor: "#7956b5",
      borderWidth: 2,
      borderRadius: 10,
    },
    cel3: {
      justifyContent: "center",
      alignItems: "center",
      width: "25%",
  
      margin: 10,
      borderColor: "#7956b5",
      borderWidth: 2,
      borderRadius: 10,
    },
    ProfileImage: {
      backgroundColor: "white",
      marginTop: -120,
      width: 150,
      height: 150,
      borderColor: "#7956b5",
      borderWidth: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    ProfileImageIneer: {
      borderRadius: 20,
      width: 80,
      height: 120,
    },
    ProfileName: {
      fontSize: 20,
    },
  });
  