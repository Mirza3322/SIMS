import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

function TimetableScreen() {
  const [timetable, setTimetable] = useState([
    {
      day: "Monday",
      schedule: [
        {
          time: "08:00 AM - 09:30 AM",
          subject: "Math",
          teacher: "Mr. Smith",
          room: "A101",
        },
        {
          time: "09:30 AM - 11:00 AM",
          subject: "English",
          teacher: "Ms. Johnson",
          room: "B205",
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "Science",
          teacher: "Mr. Davis",
          room: "C304",
        },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        {
          time: "08:00 AM - 09:30 AM",
          subject: "History",
          teacher: "Ms. Brown",
          room: "A101",
        },
        {
          time: "09:30 AM - 11:00 AM",
          subject: "Art",
          teacher: "Ms. Wilson",
          room: "B205",
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "PE",
          teacher: "Mr. Clark",
          room: "C304",
        },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        {
          time: "08:00 AM - 09:30 AM",
          subject: "History",
          teacher: "Ms. Brown",
          room: "A101",
        },
        {
          time: "09:30 AM - 11:00 AM",
          subject: "Art",
          teacher: "Ms. Wilson",
          room: "B205",
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "PE",
          teacher: "Mr. Clark",
          room: "C304",
        },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        {
          time: "08:00 AM - 09:30 AM",
          subject: "History",
          teacher: "Ms. Brown",
          room: "A101",
        },
        {
          time: "09:30 AM - 11:00 AM",
          subject: "Art",
          teacher: "Ms. Wilson",
          room: "B205",
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "PE",
          teacher: "Mr. Clark",
          room: "C304",
        },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        {
          time: "08:00 AM - 09:30 AM",
          subject: "History",
          teacher: "Ms. Brown",
          room: "A101",
        },
        {
          time: "09:30 AM - 11:00 AM",
          subject: "Art",
          teacher: "Ms. Wilson",
          room: "B205",
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "PE",
          teacher: "Mr. Clark",
          room: "C304",
        },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        {
          time: "08:00 AM - 09:30 AM",
          subject: "History",
          teacher: "Ms. Brown",
          room: "A101",
        },
        {
          time: "09:30 AM - 11:00 AM",
          subject: "Art",
          teacher: "Ms. Wilson",
          room: "B205",
        },
        {
          time: "11:00 AM - 12:30 PM",
          subject: "PE",
          teacher: "Mr. Clark",
          room: "C304",
        },
      ],
    },
    // Add schedules for other days here
  ]);

  function renderTimetable() {
    return timetable.map(function (item, index) {
      return (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.day}>{item.day}</Text>
          {item.schedule.map(function (schedule, index) {
            return (
              <View key={index} style={styles.scheduleItem}>
                <Text style={styles.time}>{schedule.time}</Text>
                <Text style={styles.subject}>{schedule.subject}</Text>
                <Text style={styles.teacher}>Teacher: {schedule.teacher}</Text>
                <Text style={styles.room}>Room: {schedule.room}</Text>
              </View>
            );
          })}
        </View>
      );
    });
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Schedule & Timetable</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderTimetable()}
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
  itemContainer: {
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
  day: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  scheduleItem: {
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666666",
  },
  subject: {
    fontSize: 16,
    color: "#333333",
  },
  teacher: {
    fontSize: 14,
    color: "#666666",
  },
};

export default TimetableScreen;
