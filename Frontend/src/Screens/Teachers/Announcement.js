import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";

function AnnouncementScreen() {
  // Mock data for announcements
  const announcementData = [
    {
      id: "1",
      title: "Important Notice",
      content:
        "There will be a parent-teacher meeting on Friday at 5 PM in the school auditorium.",
      date: "May 10, 2023",
    },
    {
      id: "2",
      title: "School Trip",
      content:
        "The annual school trip is scheduled for next month. Please submit the consent forms by the end of this week.",
      date: "May 15, 2023",
    },
    {
      id: "3",
      title: "Sports Day",
      content:
        "Sports day will be held on June 20th. Make sure to wear your sports uniform and bring your enthusiasm!",
      date: "May 20, 2023",
    },
    {
      id: "4",
      title: "Important Notice",
      content:
        "There will be a parent-teacher meeting on Friday at 5 PM in the school auditorium.",
      date: "May 10, 2023",
    },
    {
      id: "5",
      title: "Important Notice",
      content:
        "There will be a parent-teacher meeting on Friday at 5 PM in the school auditorium.",
      date: "May 10, 2023",
    },
    {
      id: "6",
      title: "Important Notice",
      content:
        "There will be a parent-teacher meeting on Friday at 5 PM in the school auditorium.",
      date: "May 10, 2023",
    },
  ];

  function renderAnnouncementItem({ item }) {
    return (
      <View style={styles.announcementContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    );
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Announcements</Text>
      <View style={styles.container}></View>
      <FlatList
        data={announcementData}
        keyExtractor={(item) => item.id}
        renderItem={renderAnnouncementItem}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  list: {
    marginTop: 10,
  },
  announcementContainer: {
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#888",
  },
});

export default AnnouncementScreen;
