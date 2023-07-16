import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

const AdminScreen = () => {
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  const handleAddCourse = () => {
    // Validate courseName, courseCode, and courseDescription before adding
    if (!courseName || !courseCode || !courseDescription) {
      alert("Please enter all the required fields.");
      return;
    }

    // Add the course to the list or perform API call to add to the backend

    // Clear the input fields
    setCourseName("");
    setCourseCode("");
    setCourseDescription("");
  };

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Scheme Of Study</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}>
          <View style={styles.circleContainer}></View>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>Add Course</Text>
        <TextInput
          style={styles.input}
          placeholder="Course Name"
          value={courseName}
          onChangeText={setCourseName}
        />
        <TextInput
          style={styles.input}
          placeholder="Course Code"
          value={courseCode}
          onChangeText={setCourseCode}
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Course Description"
          value={courseDescription}
          onChangeText={setCourseDescription}
          multiline
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
          <Text style={styles.buttonText}>Add Course</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    width: "100%",
    marginBottom: 16,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  descriptionInput: {
    height: 120,
  },
  addButton: {
    backgroundColor: "#4287f5",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
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
});

export default AdminScreen;
