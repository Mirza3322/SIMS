import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { clearErrors,loginTeacher,register ,loginAdmin,loginStudent } from '../../actions/userAction';

function Logout() {
  return (
    <View style={styles.Mainview}>
      <Text style={styles.title1}>Communication</Text>
      <View style={styles.container}></View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {renderTools()}
      </ScrollView>
    </View>
  );
}


export default Logout;
