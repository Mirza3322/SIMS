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

const StudentScreen = () => {
  const [subject, setSubject] = useState("");
  const [homeworkDetails, setHomeworkDetails] = useState("");
  const [fileUri, setFileUri] = useState("");

  const handleFileUpload = () => {
    // Validate subject, homeworkDetails, and fileUri before uploading

    // Perform the file upload or API call to submit the homework

    // Clear the input fields
    setSubject("");
    setHomeworkDetails("");
    setFileUri("");
  };

  const handleFilePicker = () => {
    // Open file picker to select the homework file
    // Implement your file picker logic here
  };

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Student Homework Upload</Text>
      <View style={styles.container}>
        <View style={styles.circleContainer}></View>
      </View>
      <ScrollView>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Subject"
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Homework Details"
            value={homeworkDetails}
            onChangeText={setHomeworkDetails}
            multiline
          />
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={handleFilePicker}
          >
            <Text style={styles.buttonText}>Select Homework File</Text>
          </TouchableOpacity>
          {fileUri ? (
            <Text style={styles.selectedFileText}>{fileUri}</Text>
          ) : (
            <Text style={styles.selectedFileText}>No file selected</Text>
          )}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleFileUpload}
          >
            <Text style={styles.buttonText}>Submit Homework</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
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
  uploadButton: {
    backgroundColor: "#4287f5",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  selectedFileText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#39b54a",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
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

export default StudentScreen;
