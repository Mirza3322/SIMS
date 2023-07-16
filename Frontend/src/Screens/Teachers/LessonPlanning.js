import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function LessonPlanningScreen() {
  const [lessons, setLessons] = useState([]);

  function addLesson() {
    const newLesson = { title: "", description: "" };
    setLessons([...lessons, newLesson]);
  }

  function updateLesson(index, field, value) {
    const updatedLessons = [...lessons];
    updatedLessons[index][field] = value;
    setLessons(updatedLessons);
  }

  function renderLessons() {
    return lessons.map(function (lesson, index) {
      return (
        <View key={index} style={styles.lessonContainer}>
          <Text style={styles.lessonIndex}>{index + 1}</Text>
          <TextInput
            style={styles.lessonTitle}
            placeholder="Enter Lesson Title"
            value={lesson.title}
            onChangeText={(text) => updateLesson(index, "title", text)}
          />
          <TextInput
            style={styles.lessonDescription}
            placeholder="Enter Lesson Description"
            value={lesson.description}
            onChangeText={(text) => updateLesson(index, "description", text)}
            multiline
          />
        </View>
      );
    });
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Lession Planning</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}>
          <View style={styles.circleContainer}></View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderLessons()}
        <TouchableOpacity style={styles.addButton} onPress={addLesson}>
          <Text style={styles.addButtonLabel}>Add Lesson</Text>
        </TouchableOpacity>
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
  lessonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  lessonIndex: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
    color: "#333333",
  },
  lessonTitle: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
  },
  lessonDescription: {
    fontSize: 14,
    color: "#666666",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#333333",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  addButtonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
};

export default LessonPlanningScreen;
