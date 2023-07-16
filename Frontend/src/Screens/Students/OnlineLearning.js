import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

function OnlineLearningScreen() {
  const [courses, setCourses] = useState([
    {
      title: "Mathematics",
      teacher: "Mr. Smith",
      schedule: "Monday, Wednesday, Friday",
      time: "10:00 AM - 11:30 AM",
      room: "Zoom Meeting",
    },
    {
      title: "English Literature",
      teacher: "Ms. Johnson",
      schedule: "Tuesday, Thursday",
      time: "09:00 AM - 10:30 AM",
      room: "Google Meet",
    },
    {
      title: "Mathematics",
      teacher: "Mr. Smith",
      schedule: "Monday, Wednesday, Friday",
      time: "10:00 AM - 11:30 AM",
      room: "Zoom Meeting",
    },
    {
      title: "English Literature",
      teacher: "Ms. Johnson",
      schedule: "Tuesday, Thursday",
      time: "09:00 AM - 10:30 AM",
      room: "Google Meet",
    },
    {
      title: "Mathematics",
      teacher: "Mr. Smith",
      schedule: "Monday, Wednesday, Friday",
      time: "10:00 AM - 11:30 AM",
      room: "Zoom Meeting",
    },
    {
      title: "English Literature",
      teacher: "Ms. Johnson",
      schedule: "Tuesday, Thursday",
      time: "09:00 AM - 10:30 AM",
      room: "Google Meet",
    },
    // Add more courses here
  ]);

  function renderCourses() {
    return courses.map(function (course, index) {
      return (
        <View key={index} style={styles.courseContainer}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.teacher}>Teacher: {course.teacher}</Text>
          <Text style={styles.schedule}>Schedule: {course.schedule}</Text>
          <Text style={styles.time}>Time: {course.time}</Text>
          <Text style={styles.room}>Room: {course.room}</Text>
        </View>
      );
    });
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Online Learning</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderCourses()}
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
  courseContainer: {
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  teacher: {
    fontSize: 16,
    color: "#666666",
  },
  schedule: {
    fontSize: 16,
    color: "#666666",
  },
  time: {
    fontSize: 16,
    color: "#666666",
  },
  room: {
    fontSize: 16,
    color: "#666666",
  },
};

export default OnlineLearningScreen;
