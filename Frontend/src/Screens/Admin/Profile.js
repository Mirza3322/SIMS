import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { GetAdminProfileInfo } from "../../actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);
  const { user, loading } = useSelector((state) => state.adminProfile);

  useEffect(() => {
    dispatch(GetAdminProfileInfo());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: user.image.url }} style={styles.profileImage} />
        </View>
        <Text style={styles.profileName}>{user.name}</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === 0 && styles.selectedTabButton,
            ]}
            onPress={() => setSelectedTab(0)}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTab === 0 && styles.selectedTabButtonText,
              ]}
            >
              Student Profile
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.infoContainer}>
          <View style={styles.infoRow}>
            <FontAwesome5 name="envelope" size={24} color={"#7956b5"} />
            <Text style={styles.infoText}>{user.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome5 name="map-marker-alt" size={24} color={"#7956b5"} />
            <Text style={styles.infoText}>{user.address}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome5 name="phone" size={24} color={"#7956b5"} />
            <Text style={styles.infoText}>{user.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome5 name="clock" size={24} color={"#7956b5"} />
            <Text style={styles.infoText}>Created At: {user.createdAt}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome5 name="user" size={24} color={"#7956b5"} />
            <Text style={styles.infoText}>{user.role}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7956b5",
    alignItems: "center",
  },
  profileContainer: {
    padding: 20,
    backgroundColor: "white",
    width: "90%",
    marginTop: 100,
    height: "90%",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },
  profileImageContainer: {
    backgroundColor: "white",
    marginTop: -120,
    width: 150,
    height: 150,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: "#7956b5",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  tabContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  tabButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  selectedTabButton: {
    backgroundColor: "#7956b5",
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: "700",
  },
  selectedTabButtonText: {
    color: "white",
  },
  infoContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 8,
  },
});
