import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

function GradebookScreen() {
  // Mock data for gradebook
  const gradebookData = [
    {
      studentName: "John Doe",
      grades: [
        { subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A" },
        { subject: "English", marks: 70, totalMarks: 100, grade: "B" },
        { subject: "Science", marks: 90, totalMarks: 100, grade: "A-" },
        // Add more subjects and grades as needed
      ],
    },
    {
      studentName: "Jane Smith",
      grades: [
        { subject: "Mathematics", marks: 78, totalMarks: 100, grade: "B+" },
        { subject: "English", marks: 95, totalMarks: 100, grade: "A" },
        { subject: "Science", marks: 92, totalMarks: 100, grade: "A" },
        // Add more subjects and grades as needed
      ],
    },
    // Add more students and their grades as needed
    {
      studentName: "John Doe",
      grades: [
        { subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A" },
        { subject: "English", marks: 70, totalMarks: 100, grade: "B" },
        { subject: "Science", marks: 90, totalMarks: 100, grade: "A-" },
        // Add more subjects and grades as needed
      ],
    },
    {
      studentName: "John Doe",
      grades: [
        { subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A" },
        { subject: "English", marks: 70, totalMarks: 100, grade: "B" },
        { subject: "Science", marks: 90, totalMarks: 100, grade: "A-" },
        // Add more subjects and grades as needed
      ],
    },
    {
      studentName: "John Doe",
      grades: [
        { subject: "Mathematics", marks: 85, totalMarks: 100, grade: "A" },
        { subject: "English", marks: 70, totalMarks: 100, grade: "B" },
        { subject: "Science", marks: 90, totalMarks: 100, grade: "A-" },
        // Add more subjects and grades as needed
      ],
    },
  ];

  function renderGradeItem({ item }) {
    return (
      <View style={styles.studentContainer}>
        <Text style={styles.studentName}>{item.studentName}</Text>
        <FlatList
          data={item.grades}
          keyExtractor={(grade, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.gradeItem}>
              <Text style={styles.subject}>{item.subject}</Text>
              <View style={styles.marksContainer}>
                <Text style={styles.marks}>
                  Marks: {item.marks}/{item.totalMarks}
                </Text>
                <Text style={styles.grade}>{item.grade}</Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Student Grade Book</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}>
          <View style={styles.circleContainer}></View>
        </View>
      </View>
      <FlatList
        data={gradebookData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderGradeItem}
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
    flex: 1,
  },
  studentContainer: {
    marginBottom: 20,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  gradeItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  subject: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  marksContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  marks: {
    fontSize: 14,
    marginRight: 10,
    color: "#fff",
  },
  grade: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GradebookScreen;
