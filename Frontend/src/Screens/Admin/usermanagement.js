import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

function UserManagementScreen() {
  const [administrators, setAdministrators] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Vice Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 3,
      name: "John Doe",
      role: "Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Vice Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 5,
      name: "John Doe",
      role: "Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 6,
      name: "Jane Smith",
      role: "Vice Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 7,
      name: "John Doe",
      role: "Principal",
      avatar: require("../../../Image/child.png"),
    },
    {
      id: 8,
      name: "Jane Smith",
      role: "Vice Principal",
      avatar: require("../../../Image/child.png"),
    },
    // Add more administrators here
  ]);

  function renderAdministrators() {
    return administrators.map(function (admin) {
      return (
        <TouchableOpacity
          key={admin.id}
          style={styles.adminContainer}
          onPress={() => handleAdminPress(admin)}
        >
          <Image source={admin.avatar} style={styles.avatar} />
          <View style={styles.adminInfo}>
            <Text style={styles.name}>{admin.name}</Text>
            <Text style={styles.role}>{admin.role}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  function handleAdminPress(admin) {
    // Handle the administrator press event
    console.log("Selected administrator:", admin);
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>User Management</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderAdministrators()}
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
    paddingBottom: 20,
  },
  adminContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
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
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  adminInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  role: {
    fontSize: 16,
    color: "#666666",
  },
};

export default UserManagementScreen;
