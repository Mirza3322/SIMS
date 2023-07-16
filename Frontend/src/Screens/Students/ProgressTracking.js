import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

function ProgressTrackingScreen() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      grade: "10th Grade",
      progress: 90,
    },
    {
      id: 2,
      name: "Jane Smith",
      grade: "11th Grade",
      progress: 75,
    },
    {
      id: 3,
      name: "John Doe",
      grade: "10th Grade",
      progress: 85,
    },
    {
      id: 4,
      name: "Jane Smith",
      grade: "11th Grade",
      progress: 75,
    },
    {
      id: 5,
      name: "John Doe",
      grade: "10th Grade",
      progress: 85,
    },
    {
      id: 6,
      name: "Jane Smith",
      grade: "11th Grade",
      progress: 75,
    },
    // Add more students here
  ]);

  function renderStudents() {
    return students.map(function (student) {
      return (
        <View key={student.id} style={styles.studentContainer}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.grade}>{student.grade}</Text>
          <View style={styles.progressContainer}>
            <View
              style={[styles.progressBar, { width: `${student.progress}%` }]}
            />
            <Text style={styles.progressText}>{student.progress}%</Text>
          </View>
        </View>
      );
    });
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Progress Tracking</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderStudents()}
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
  studentContainer: {
    marginBottom: 20,
    padding: 20,
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
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  grade: {
    fontSize: 16,
    color: "#666666",
  },
  progressContainer: {
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E8E8E8",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#FFC107",
  },
  progressText: {
    position: "absolute",
    top: -20,
    right: 0,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
  },
};

export default ProgressTrackingScreen;
