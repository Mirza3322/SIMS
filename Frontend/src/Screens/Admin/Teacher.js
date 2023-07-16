import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.Mainview}>
      <View style={styles.Mvinnerone}>
        <View style={styles.Mvinnerone1}>
          <View style={styles.Mvinnerone1view1}>
            <Image
              style={styles.Mvinnerone1Image}
              source={require("../../../Image/child.png")}
            ></Image>
          </View>
          <View style={styles.Mvinnerone1view2}>
            <Text style={styles.Mvinnerone1view2Text}>
              Welcome to School Manegment SYstem
            </Text>
          </View>
        </View>
        <View style={styles.MvinneroneInput}>
          <TextInput
            style={styles.MvinneroneInputSearch}
            placeholder="Search"
          ></TextInput>
        </View>
      </View>
      <View style={styles.Mvinnertwo}>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <FontAwesome5 name="id-badge" size={30} color={"#7956b5"} />
            <Text>Profile</Text>
          </View>
          <View style={styles.cel2}>
            <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
            <Text>News</Text>
          </View>
          <View style={styles.cel3}>
            <FontAwesome5 name="pen" size={30} color={"#7956b5"} />
            <Text>HomeWork</Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <FontAwesome5 name="id-badge" size={30} color={"#7956b5"} />
            <Text>Notification</Text>
          </View>
          <View style={styles.cel2}>
            <FontAwesome5 name="calendar" size={30} color={"#7956b5"} />
            <Text>Attendence</Text>
          </View>
          <View style={styles.cel3}>
            <FontAwesome5 name="credit-card" size={30} color={"#7956b5"} />
            <Text>Fees</Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <FontAwesome5 name="user-tie" size={30} color={"#7956b5"} />
            <Text>Teachers</Text>
          </View>
          <View style={styles.cel2}>
            <FontAwesome5 name="book" size={30} color={"#7956b5"} />
            <Text>Subjects</Text>
          </View>
          <View style={styles.cel3}>
            <FontAwesome5 name="poll" size={30} color={"#7956b5"} />
            <Text>GradeBook</Text>
          </View>
        </View>
        <View style={styles.Row1}>
          <View style={styles.cel1}>
            <FontAwesome5 name="id-badge" size={30} color={"#7956b5"} />
            <Text>Class Routine</Text>
          </View>
          <View style={styles.cel2}>
            <FontAwesome5 name="newspaper" size={30} color={"#7956b5"} />
            <Text>Library</Text>
          </View>
          <View style={styles.cel3}>
            <FontAwesome5 name="id-badge" size={30} color={"#7956b5"} />
            <Text>Exam</Text>
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
});
