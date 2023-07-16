import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

function ReportingAndAnalyticsScreen() {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Student Attendance",
      description: "View attendance records of students",
    },
    {
      id: 2,
      title: "Grade Analysis",
      description: "Analyze and compare student grades",
    },
    {
      id: 3,
      title: "Student Attendance",
      description: "View attendance records of students",
    },
    {
      id: 4,
      title: "Grade Analysis",
      description: "Analyze and compare student grades",
    },
    {
      id: 5,
      title: "Student Attendance",
      description: "View attendance records of students",
    },
    {
      id: 6,
      title: "Grade Analysis",
      description: "Analyze and compare student grades",
    },
    {
      id: 7,
      title: "Grade Analysis",
      description: "Analyze and compare student grades",
    },
    {
      id: 8,
      title: "Student Attendance",
      description: "View attendance records of students",
    },
    {
      id: 9,
      title: "Grade Analysis",
      description: "Analyze and compare student grades",
    },
    // Add more reports here
  ]);

  function renderReports() {
    const reportItems = [];

    for (let i = 0; i < reports.length; i++) {
      const report = reports[i];

      const reportItem = (
        <TouchableOpacity
          key={report.id}
          style={styles.reportContainer}
          onPress={handleReportPress.bind(null, report)}
        >
          <View style={styles.reportInfo}>
            <Text style={styles.title}>{report.title}</Text>
            <Text style={styles.description}>{report.description}</Text>
          </View>
        </TouchableOpacity>
      );

      reportItems.push(reportItem);
    }

    return reportItems;
  }

  function handleReportPress(report) {
    // Handle the report press event
    console.log("Selected report:", report);
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Reporting and Analytics</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderReports()}
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
  reportContainer: {
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
  reportInfo: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#666666",
  },
};

export default ReportingAndAnalyticsScreen;
