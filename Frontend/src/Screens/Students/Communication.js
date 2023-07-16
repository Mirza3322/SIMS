import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

function CommunicationToolsScreen() {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: "Announcements",
      icon: require("../../../Image/child.png"),
    },
    { id: 2, name: "Messaging", icon: require("../../../Image/child.png") },
    { id: 3, name: "Calendar", icon: require("../../../Image/child.png") },
    { id: 4, name: "Attendance", icon: require("../../../Image/child.png") },
    { id: 5, name: "Grades", icon: require("../../../Image/child.png") },
    { id: 6, name: "Homework", icon: require("../../../Image/child.png") },
    { id: 7, name: "Grades", icon: require("../../../Image/child.png") },
    { id: 8, name: "Homework", icon: require("../../../Image/child.png") },
    { id: 9, name: "Grades", icon: require("../../../Image/child.png") },
    { id: 10, name: "Homework", icon: require("../../../Image/child.png") },
  ]);

  function renderTools() {
    return tools.map(function (tool) {
      return (
        <TouchableOpacity key={tool.id} style={styles.toolContainer}>
          <Image source={tool.icon} style={styles.toolIcon} />
          <Text style={styles.toolName}>{tool.name}</Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Communication</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderTools()}
      </ScrollView>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  Mainview: {
    height: "100%",
    backgroundColor: "#7956b5",
    paddingLeft: 20,
    paddingRight: 20,
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
  },
  scrollContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  toolContainer: {
    width: "48%",
    marginBottom: 20,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  toolIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  toolName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
};

export default CommunicationToolsScreen;
