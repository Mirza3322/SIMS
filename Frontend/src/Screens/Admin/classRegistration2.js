import { View,Text,Button,StyleSheet,Image,KeyboardAvoidingView,Keyboard,TouchableOpacity, Modal, Alert 
} from "react-native";
import {Picker} from "@react-native-picker/picker"

import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch,useSelector} from "react-redux"
import { RegisterClass,GetClassessInfo,deleteClass,updateClass } from '../../actions/adminAction';
import { useState ,useEffect} from "react";
import React from "react";
import Loader from "../Loader";
import { ScrollView } from "react-native-gesture-handler";

export default function ClassRegister2() {
   
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editClassId, setEditClassId] = useState(null);
  const [editClassName, setEditClassName] = useState("");
  const [editFee, setEditFee] = useState("");
   
  




  const [isModalVisible, setIsModalVisible] = useState(false);
  const [deleteClassId, setDeleteClassId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const dispatch = useDispatch(); // Move dispatch here

  const handleDeleteClass = (id) => {
    console.log("3");
    console.log(id);
    setDeleteClassId(id);
    //handleOpenModal(); // Open the confirmation modal when delete is pressed

  };
  const handleEditClass = (id, className, fee) => {

    console.log("handleEditClass");
    
    setEditClassId(id);
    setEditClassName(className);
    setEditFee(fee);
    setIsEditModalVisible(true);
  };

  const handleUpdateClass = (id) => {
    console.log("handleUpdateClass");
    console.log(editClassName);
    console.log(editFee);
    const classData = {
      className: editClassName,
      Fee: editFee,
    };
    dispatch(updateClass(id, classData));
    setIsEditModalVisible(false);
    setEditClassId(null);
    setEditClassName("");
    setEditFee("");
  };
  

    

  const handleConfirmDelete = (deleteClassId) => {
    if (deleteClassId) {
      dispatch(deleteClass(deleteClassId));
      setDeleteClassId(null);
       // Fetch updated classes after deletion
    }
  };

  const handleCancelDelete = () => {
    setDeleteClassId(null);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const { error,isDeleted,loading, isAuthenticated_for_class_register, admin } = useSelector((state) => state.admin);
  
  
  const [className, setClassName] = useState("");
  const [Fee, setFee] = useState("");
  const navigation = useNavigation();
  console.log("classes is");

  // console.log("error");
  // console.log(loading);
  // console.log(isAuthenticated);
  console.log("Loading in rendering");
  console.log(loading);
  console.log("loading after rendering");
  console.log(loading);
  

 
  const classSubmit = async () => {
    dispatch(RegisterClass(className, Fee));
  };

  useEffect(() => {
    if(error){
      Alert.alert(error);
    }
    if (isDeleted) {
      console.log("isDeleted");
    
      }
    
  
  
  }, [isDeleted,error]);

  useEffect(() => {
    if (isAuthenticated_for_class_register) {
      console.log(isAuthenticated_for_class_register);
      Alert.alert("Class Added Succesfully");
    }

    dispatch(GetClassessInfo());
  }, [isAuthenticated_for_class_register]);
  
  if(loading === true){
    return <Loader/>
  }
  return (

    

    <View style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.manageClassText}>Manage Class</Text>
        <TouchableOpacity onPress={handleOpenModal}>
          <Text style={styles.plusIcon}>+</Text>
        </TouchableOpacity>
      </View>

      
      <ScrollView style={styles.container}>
        {admin &&
          admin.classes &&
          admin.classes.map((classItem, index) => (
            <View key={index} style={styles.classContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.className}>{classItem.className}</Text>
                <Text style={styles.fee}>Fees: {classItem.Fee}</Text>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => handleEditClass(classItem._id, classItem.className, classItem.Fee)}>
                    <FontAwesome5 name="edit" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteClass(classItem._id)}>
                    <FontAwesome5 name="trash" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
      

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.modalTitle}>Add Class</Text>
            <TextInput
              style={styles.input}
              placeholder="Class"
              value={className}
              onChangeText={text => setClassName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Fees Related to class"
              value={Fee}
              onChangeText={text => setFee(text)}
            />
            

            <TouchableOpacity style={styles.addButton} onPress={classSubmit}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCloseModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      
      <Modal visible={!!deleteClassId} animationType="fade" transparent={true}>
        <View style={styles.confirmationModal}>
          <Text style={styles.confirmationText}>Do you really want to delete this class?</Text>
          <View style={styles.confirmationButtons}>
            <TouchableOpacity style={styles.confirmationButton}  onPress={() => handleConfirmDelete(deleteClassId)}>
              <Text style={styles.confirmationButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmationButton} onPress={handleCancelDelete}>
              <Text style={styles.confirmationButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
          </Modal>
          <Modal visible={isEditModalVisible} animationType="slide" transparent={true}>
  <View style={styles.modalContainer}>
    <View style={styles.formContainer}>
      <Text style={styles.modalTitle}>Edit Class</Text>
      <TextInput
        style={styles.input}
        placeholder="Class"
        value={editClassName}
        onChangeText={text => setEditClassName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fees Related to class"
        value={editFee.toString()}
        onChangeText={text => setEditFee(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => handleUpdateClass(editClassId)}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={() => setIsEditModalVisible(false)}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

        
    </View>
  );
}

const styles = StyleSheet.create({
  // New styles for confirmation modal
  confirmationModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  confirmationText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
  },
  confirmationButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  confirmationButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  confirmationButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  classContainer: {
    marginBottom: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  className: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  fee: {
    fontSize: 14,
    marginLeft: 16,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: 16,
  },
  icon: {
    fontSize: 18,
    marginLeft: 16,
  },
  mainView: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  manageClassText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  plusIcon: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    width:"100%",
    
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
    textAlign: "center",
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "#7956b5",
    borderWidth: 2,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
