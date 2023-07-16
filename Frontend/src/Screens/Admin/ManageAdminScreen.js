import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet ,Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { addAdmin } from '../../actions/adminAction';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
//import { ImageManipulator } from 'expo-image-crop';
//import ImagePicker from 'react-native-image-crop-picker';



const AdminManagementComponent = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const handleAddAdmin = () => {
    // Dispatch the addAdmin action here
    dispatch(addAdmin(name, email, phone, address, password, image));

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPassword('');
    setImage(null);

    // Close the modal
    setModalVisible(false);
  };
  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access media library denied');
      return;
    }
  
    const imagePickerResult = await ImagePicker.launchImageLibraryAsync();
    if (imagePickerResult.cancelled) {
      console.log('Image picker cancelled');
      return;
    }
  
    const imageData = await FileSystem.readAsStringAsync(imagePickerResult.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  
    const source = `data:image/jpeg;base64,${imageData}`;
    // Set the selected image source to the 'image' state
    setImage(source);
  };
 /* const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access media library denied');
      return;
    }
  
    const imagePickerResult = await ImagePicker.launchImageLibraryAsync();
    if (imagePickerResult.cancelled) {
      console.log('Image picker cancelled');
      return;
    }
  
    const imageData = await FileSystem.readAsStringAsync(imagePickerResult.uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
  
    const source = `data:image/jpeg;base64,${imageData}`;
    // Set the selected image source to the 'image' state
    setImage(source);
  };*/
  /*const handleImagePicker = async () => {
    try {
      const imagePickerResult = await ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
        cropperCircleOverlay: false,
        cropperStatusBarColor: 'blue',
        cropperToolbarColor: 'blue',
        cropperToolbarTitle: 'Crop Image',
        includeBase64: true,
      });
  
      if (!imagePickerResult.cancelled) {
        const source = `data:${imagePickerResult.mime};base64,${imagePickerResult.data}`;
        // Set the selected image source to the 'image' state
        setImage(source);
      }
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };*/  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage Admin</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Add Admin</Text>

          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Phone"
            value={phone}
            onChangeText={text => setPhone(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
          />

          {/* File/Image Upload Component */}
          {/* Replace the following code with your own file/image upload component */}
          <TouchableOpacity
            onPress={handleImagePicker}
            style={styles.filePicker}
          >
            {image && (
  <Image
    source={{ uri: image }}
    style={styles.image}
  />
)}
            <Text>Select Image</Text>
          </TouchableOpacity>
          {/* End of File/Image Upload Component */}

          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleAddAdmin} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  plusIcon: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  filePicker: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});

export default AdminManagementComponent;
