import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

function FeeManagementScreen() {
  const [fees, setFees] = useState([
    {
      id: 1,
      title: "Tuition Fee",
      amount: "$500",
    },
    {
      id: 2,
      title: "Library Fee",
      amount: "$50",
    },
    {
      id: 3,
      title: "Tuition Fee",
      amount: "$500",
    },
    {
      id: 4,
      title: "Library Fee",
      amount: "$50",
    },
    // Add more fees here
  ]);

  function renderFees() {
    return fees.map(function (fee) {
      return (
        <TouchableOpacity
          key={fee.id}
          style={styles.feeContainer}
          onPress={() => handleFeePress(fee)}
        >
          <View style={styles.feeInfo}>
            <Text style={styles.title}>{fee.title}</Text>
            <Text style={styles.amount}>{fee.amount}</Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  function handleFeePress(fee) {
    // Handle the fee press event
    console.log("Selected fee:", fee);
  }

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Fee MAangement</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderFees()}
      </ScrollView>
      <View style={styles.adminActions}>
        <TouchableOpacity style={styles.button}>
          {/* onPress={handleAddFee} */}
          <Text style={styles.buttonText}>Add Fee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          {/* onPress={handleEditFee} */}
          <Text style={styles.buttonText}>Edit Fee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          {/* onPress={handleDeleteFee} */}
          <Text style={styles.buttonText}>Delete Fee</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 40,
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
  feeContainer: {
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
  feeInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  amount: {
    fontSize: 16,
    color: "#666666",
  },
  adminActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default FeeManagementScreen;
