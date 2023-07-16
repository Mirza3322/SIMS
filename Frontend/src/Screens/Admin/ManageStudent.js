import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Modal, StyleSheet, Animated } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { addAdmin,getAdmins } from '../../actions/adminAction';
import Loader from '../Loader';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { userReducer } from '../../reducers/userReducer';
const StudentAdminForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalOpacity] = useState(new Animated.Value(0));
  const [modalScale] = useState(new Animated.Value(0));
 
  
  const {admins,loading}=useSelector((state)=>state.getAllAdminInfo)
  


  
  const handleRegister = () => {
    dispatch(addAdmin(name, email, phone, address, password, image));
    // Close the modal after registering
    setShowModal(false);
  };

  useEffect(()=>{
    dispatch(getAdmins());
    console.log("admins is");
    console.log(admins);
   },[dispatch])
   

  const handleSelectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (!permissionResult.granted) {
        alert('Permission to access media library is required!');
        return;
      }
  
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
  
      if (!pickerResult.cancelled) {
        const selectedAssetUri = pickerResult.assets[0].uri;
        setImage(selectedAssetUri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };
  
  const handleModalOpen = () => {
    setShowModal(true);
    Animated.parallel([
      Animated.timing(modalOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(modalScale, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleModalClose = () => {
    Animated.parallel([
      Animated.timing(modalOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(modalScale, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start(() => setShowModal(false));
  };

  const modalAnimationStyles = {
    opacity: modalOpacity,
    transform: [{ scale: modalScale }],
  };
  
  if (loading) {
    // Show loader while loading is true
    return <Loader />;
  }

  return (
    loading ? <Loader /> :(
    <View style={styles.container}>
      <View style={styles.containerManageAdmin}>
      <TouchableOpacity onPress={handleModalOpen}>
        <Text style={styles.manageAdminText}>Manage Student</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleModalOpen}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
      </View>
      <ScrollView style={styles.adminsContainer}>
      {admins && admins.users ? (
    admins.users.map(admin => (
      <View key={admin._id} style={styles.adminCard}>
{admin.image && admin.image.url ? (
    <Image source={{ uri: admin.image.url }} style={styles.adminImage} />
  ) : null}
        <Image source={{ uri: admin.image.url }} style={styles.adminImage} />
        <Text>Name: {admin.name}</Text>
        <Text>Email: {admin.email}</Text>
        <Text>Phone: {admin.phone}</Text>
        <Text>Address: {admin.address}</Text>
        <Image
            source={{ uri: admin.image.url }}
            style={styles.ProfileImageIneer}
          />
        
        {admin.image && admin.image.uri && (
          <Image source={{ uri: admin.image.url }} style={styles.adminImage} />
        )}
      </View>
    ))
  ) : (
     <Loader/>
  )}          
      </ScrollView>
      <View></View>
      
      <Modal visible={showModal} animationType="none" transparent>
        <ScrollView contentContainerStyle={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, modalAnimationStyles]}>
          <Text>Name:</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
          <Text>Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
          <Text>Date of Birth:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
          />
          <Text>Classs Enrolled:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
          />
          <Text>Roll no:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
          />
          <Text>Contact no:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
          />
          <Text>Gender:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
          />
          <Text>Fee Discount %:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
          />

          <Text>Parents Name:</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
          />
          <Text>Password:</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Enter your password"
          />
          {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
          <TouchableOpacity onPress={handleSelectImage}>
            <Text>Select Image</Text>
          </TouchableOpacity>
            <View style={styles.buttonContainer}>
            <Button title="Register" onPress={handleRegister} />
            <Button title="Cancel" onPress={handleModalClose} color="red" />
              
            </View>
          </Animated.View>
        </ScrollView>
        
      </Modal>
    </View>
    )
  )
  
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  containerManageAdmin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  manageAdminText: {
    fontSize: 20,
    padding: 10,
    marginRight: 10,
  },
  plusText: {
    fontSize: 40,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    minWidth: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  
 
});

export default StudentAdminForm;