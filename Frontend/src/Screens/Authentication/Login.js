import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from 'react-native-vector-icons';
import { clearErrors, loginTeacher, register, loginAdmin, loginStudent } from '../../actions/userAction';


export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, error, loading, isAuthenticated } = useSelector((state) => state.user);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Admin');

  const loginSubmit = async () => {
    if (selectedRole === 'admin') {
      dispatch(loginAdmin(loginEmail, loginPassword));
    }
    if (selectedRole === 'teacher') {
      dispatch(loginTeacher(loginEmail, loginPassword));
    }
    if (selectedRole === 'student') {
      dispatch(loginStudent(loginEmail, loginPassword));
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert('Error', error);
    }
    if (isAuthenticated) {
      if (user.role === 'teacher') {
        navigation.navigate('TeacherDashboard');
      }
      if (user.role === 'admin') {
        navigation.navigate('AdminDashboard2');
      }
      if (user.role === 'student') {
        navigation.navigate('StudentDashboard');
      }
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../../Image/child.png')} />
        <Text style={styles.logoText}>Welcome to School Management System</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={loginEmail}
          onChangeText={text => setLoginEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={loginPassword}
          onChangeText={text => setLoginPassword(text)}
          secureTextEntry
        />
        <Picker
          selectedValue={selectedRole}
          onValueChange={(itemValue) => setSelectedRole(itemValue)}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          <Picker.Item label="Selecte your role"  />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Student" value="student" />
        </Picker>
        <TouchableOpacity style={styles.forgotPassword} onPress={() => console.log('Forgot Password')}>
          <FontAwesome5 name="lock" size={14} color="#777" />
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
        <Button title="Sign In" color="#7956b5" onPress={loginSubmit} />
        <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('Chatbot')}>
          <FontAwesome5 name="comment" size={40} color="white" />
          <Text style={styles.chatButtonText}>Chatbot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    fontSize: 20,
    color: '#333',
  },
  formContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
  },
  picker: {
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
  },
  pickerItem: {
    color: '#333',
  },
  forgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    marginLeft: 5,
    color: '#777',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#7956b5',
    paddingVertical: 10,
    borderRadius: 5,
  },
  chatButtonText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});
