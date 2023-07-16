import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

function ExamAssignmentScreen() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Exam",
      subject: "Mathematics",
      date: "2023-06-10",
      time: "09:00 AM",
      location: "Exam Hall A",
    },
    {
      id: 2,
      type: "Assignment",
      subject: "English Literature",
      date: "2023-06-15",
      time: "02:00 PM",
      location: "Submit Online",
    },
    {
      id: 3,
      type: "Exam",
      subject: "Mathematics",
      date: "2023-06-10",
      time: "09:00 AM",
      location: "Exam Hall A",
    },
    {
      id: 4,
      type: "Assignment",
      subject: "English Literature",
      date: "2023-06-15",
      time: "02:00 PM",
      location: "Submit Online",
    },
    {
      id: 5,
      type: "Exam",
      subject: "Mathematics",
      date: "2023-06-10",
      time: "09:00 AM",
      location: "Exam Hall A",
    },
    {
      id: 6,
      type: "Assignment",
      subject: "English Literature",
      date: "2023-06-15",
      time: "02:00 PM",
      location: "Submit Online",
    },
    // Add more notifications here
  ]);

  function renderNotifications() {
    return notifications.map(function (notification) {
      return (
        <View key={notification.id} style={styles.notificationContainer}>
          <Text style={styles.type}>{notification.type}</Text>
          <Text style={styles.subject}>Subject: {notification.subject}</Text>
          <Text style={styles.date}>Date: {notification.date}</Text>
          <Text style={styles.time}>Time: {notification.time}</Text>
          <Text style={styles.location}>Location: {notification.location}</Text>
        </View>
      );
    });
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Exam and Assignment Notifications</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderNotifications()}
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
  notificationContainer: {
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
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  subject: {
    fontSize: 16,
    color: "#666666",
  },
  date: {
    fontSize: 16,
    color: "#666666",
  },
  time: {
    fontSize: 16,
    color: "#666666",
  },
  location: {
    fontSize: 16,
    color: "#666666",
  },
};

export default ExamAssignmentScreen;
