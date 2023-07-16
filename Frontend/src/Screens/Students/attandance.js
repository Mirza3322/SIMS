import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AttendanceScreen = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch student data
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    // Simulating API call to fetch student data
    const data = [
      { id: 1, name: "John Doe", attendance: false },
      { id: 2, name: "Jane Smith", attendance: false },
      { id: 3, name: "Michael Johnson", attendance: false },
      { id: 4, name: "John Doe", attendance: false },
      { id: 5, name: "Jane Smith", attendance: false },
      { id: 6, name: "Michael Johnson", attendance: false },
      { id: 7, name: "John Doe", attendance: false },
      { id: 8, name: "Jane Smith", attendance: false },
      { id: 9, name: "Michael Johnson", attendance: false },
      { id: 10, name: "John Doe", attendance: false },
      { id: 11, name: "Jane Smith", attendance: false },
      { id: 12, name: "Michael Johnson", attendance: false },
      // Add more student entries as needed
    ];

    setStudents(data);
  };

  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, attendance: !student.attendance }
          : student
      )
    );
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.studentContainer,
        item.attendance && styles.presentStudentContainer,
      ]}
      onPress={() => toggleAttendance(item.id)}
    >
      <Text style={styles.studentName}>{item.name}</Text>
      <Text style={styles.attendanceStatus}>
        {item.attendance ? "Present" : "Absent"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title}>Attandance Detail</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}></View>
      </View>
      <FlatList
        data={students}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.studentList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  studentList: {
    paddingBottom: 20,
  },
  studentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  presentStudentContainer: {
    backgroundColor: "#C8E6C9",
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  attendanceStatus: {
    fontSize: 16,
    color: "#555555",
  },
  Mainview: {
    height: "100%",
    backgroundColor: "#7956b5",
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
  },
});

export default AttendanceScreen;
