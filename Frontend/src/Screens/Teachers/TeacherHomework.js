import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const TeacherHomeworkUploadScreen = () => {
  const [homeworkTitle, setHomeworkTitle] = useState("");
  const [homeworkDescription, setHomeworkDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleUpload = () => {
    // Implement homework upload logic here
    console.log("Uploading homework:", {
      homeworkTitle,
      homeworkDescription,
      deadline,
      attachments,
    });
    // Reset form after upload
    setHomeworkTitle("");
    setHomeworkDescription("");
    setDeadline("");
    setAttachments([]);
  };

  const handleAttachmentChange = (text) => {
    // Split the comma-separated attachment URLs into an array
    const attachmentArray = text.split(",");
    setAttachments(attachmentArray);
  };

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Teacher Homework Upload</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}>
          <View style={styles.circleContainer}></View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Homework Title"
            value={homeworkTitle}
            onChangeText={setHomeworkTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Homework Description"
            value={homeworkDescription}
            onChangeText={setHomeworkDescription}
            multiline
            numberOfLines={5}
          />
          <TextInput
            style={styles.input}
            placeholder="Deadline"
            value={deadline}
            onChangeText={setDeadline}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Attachments (comma-separated URLs)"
            value={attachments.join(",")}
            onChangeText={handleAttachmentChange}
            multiline
            numberOfLines={3}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpload}>
            <Text style={styles.buttonText}>Upload Homework</Text>
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
    height: 50,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: "#2ECC71",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
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

export default TeacherHomeworkUploadScreen;
