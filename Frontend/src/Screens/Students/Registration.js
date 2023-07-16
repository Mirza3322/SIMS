import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const RegistrationScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [studentId, setStudentId] = useState("");
  const [guardianName, setGuardianName] = useState("");

  const handleRegister = () => {
    // Implement registration logic here
    console.log("Registering user:", {
      fullName,
      email,
      password,
      phoneNumber,
      address,
      dateOfBirth,
      studentId,
      guardianName,
    });
    // Reset form after registration
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setAddress("");
    setDateOfBirth("");
    setStudentId("");
    setGuardianName("");
  };

  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Registration Form</Text>
      <View style={styles.Mvinnerone}>
        <View style={styles.container}>
          <View style={styles.circleContainer}></View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Student ID"
            value={studentId}
            onChangeText={setStudentId}
          />
          <TextInput
            style={styles.input}
            placeholder="Guardian Name"
            value={guardianName}
            onChangeText={setGuardianName}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Login here</Text>
            </TouchableOpacity>
          </View>
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    marginRight: 5,
  },
  loginLink: {
    fontSize: 16,
    color: "#2ECC71",
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

export default RegistrationScreen;
