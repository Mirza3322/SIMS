import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
export default class ArticleScreen extends Component {
  render() {
    return (
      <View style={styles.Mainview}>
        <Text style={styles.title1}>School Articles</Text>
        <View style={styles.Mvinnerone}>
          <View style={styles.container}>
            <View style={styles.circleContainer}></View>
          </View>
        </View>
        <ScrollView>
          <Text style={styles.title}>Article 1</Text>
          <Text style={styles.author}>Author Name</Text>
          <Text style={styles.date}>Published Date</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar, turpis quis viverra pulvinar, dolor mi
            sollicitudin lectus, non consectetur lectus ex quis augue. Nulla
            facilisi.
          </Text>
          <Text style={styles.title}>Article 2</Text>
          <Text style={styles.author}>Author Name</Text>
          <Text style={styles.date}>Published Date</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar, turpis quis viverra pulvinar, dolor mi
            sollicitudin lectus, non consectetur lectus ex quis augue. Nulla
            facilisi.
          </Text>
          <Text style={styles.title}>Article 1</Text>
          <Text style={styles.author}>Author Name</Text>
          <Text style={styles.date}>Published Date</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar, turpis quis viverra pulvinar, dolor mi
            sollicitudin lectus, non consectetur lectus ex quis augue. Nulla
            facilisi.
          </Text>
          <Text style={styles.title}>Article 2</Text>
          <Text style={styles.author}>Author Name</Text>
          <Text style={styles.date}>Published Date</Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pulvinar, turpis quis viverra pulvinar, dolor mi
            sollicitudin lectus, non consectetur lectus ex quis augue. Nulla
            facilisi.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  author: {
    marginTop: 15,
    fontSize: 14,
    marginBottom: 5,
    color: "#fff",
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    marginBottom: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 25,
    color: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  Mainview: {
    height: "100%",
    backgroundColor: "#7956b5",
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#fff",
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center",
    color: "#fff",
  },
});
