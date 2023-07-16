import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.Mainview}>
      <View style={styles.Mvinnerone}>
        <View style={styles.Mvinnerone1}>
          <View style={styles.Mvinnerone1view1}>
            <Image
              style={styles.Mvinnerone1Image}
              source={require("../../../Image/Subjectsbg.png")}
            ></Image>
          </View>
          <View style={styles.Mvinnerone1view2}>
            <Text style={styles.Mvinnerone1view2Text}>Subject You Study</Text>
          </View>
        </View>
        <View style={styles.MvinneroneInput}></View>
      </View>
      <View style={styles.Mvinnertwo}>
        <View style={styles.Loginform}>
          <View style={styles.signIN}>
            <View style={styles.signINbutton}>
              <Button title="Maths" color="#841584"></Button>
            </View>
            <View style={styles.signUpbutton}>
              <Button title="English" color="red"></Button>
            </View>
            <View style={styles.signUpbutton}>
              <Button title="CHemistry" color="green"></Button>
            </View>
            <View style={styles.signUpbutton}>
              <Button title="Physic" color="blue"></Button>
            </View>
            <View style={styles.signUpbutton}>
              <Button title="Social Studies" color="#241572"></Button>
            </View>
            <View style={styles.signUpbutton}>
              <Button title="Computer Science" color="#941572"></Button>
            </View>
          </View>
        </View>
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

    height: "35%",
    flexDirection: "column",
  },

  Mvinnerone1Image: {
    marginLeft: -8,
    marginTop: 10,
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
    backgroundColor: "white",
    width: "100%",
    padding: "2%",
    borderColor: "#7956b5",
    borderWidth: 2,
    borderRadius: 10,
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
  forgotpass: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 4,
    marginBottom: 4,
  },
  signIN: {
    justifyContent: "center",
  },
  signINbutton: {
    marginTop: 40,
    marginBottom: 6,
  },
  signUpbutton: {
    marginBottom: 6,
  },
  Mathsub: {
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  teacherimg: {
    height: 60,
    width: 60,
    marginTop: 10,
    borderColor: "#841584",
    borderWidth: 5,
    borderRadius: 5,
  },
});
