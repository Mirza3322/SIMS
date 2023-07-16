import { 
    CLASS_REGISTER_REQUEST,
    CLASS_REGISTER_SUCCESS,
    CLASS_REGISTER_FAILURE,
    Get_CLASSInfo_SUCCESS,
    Get_CLASSInfo_REQUEST,
    Get_CLASSInfo_FAIL,
    Get_AdminOWNPROFILE_REQUEST,
    Get_AdminOWNPROFILE_SUCCESS,
    Get_AdminOWNPROFILE_FAIL,
    Add_Admin_Request,
    Add_Admin_Success,
    Add_Admin_Fail,
    DELETE_CLASS_REQUEST,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAIL,
    UPDATE_CLASS_SUCCESS,
    UPDATE_CLASS_REQUEST,
    UPDATE_CLASS_FAIL,
    REGISTER_COURSE_REQUEST,
    REGISTER_COURSE_SUCCESS,
    REGISTER_COURSE_FAIL,
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAIL,
    GET_ADMINS_REQUEST,
    GET_ADMINS_SUCCESS,
    GET_ADMINS_FAIL
    
} from "../constants/adminConstant"
import axios from "axios"

//for the registration of class


export const RegisterClass = (className,Fee) => async (dispatch) => {
    try {
      
      dispatch({ type: CLASS_REGISTER_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
      console.log("yes");
      const { data } = await axios.post(
        `http://192.168.22.238/api/v1/CreateClass`,
        { className,Fee },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("After Posting");
      
      dispatch({ type: CLASS_REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
      console.log("enter into the error part");
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: CLASS_REGISTER_FAILURE, payload: error.response.data.message });
      } else {
        dispatch({ type: CLASS_REGISTER_FAILURE, payload: "An error occurred" });
      }
    }
  };

  export const GetClassessInfo = () => async (dispatch) => {
    try {
      dispatch({ type: Get_AdminOWNPROFILE_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
      console.log("yes");
      
      const { data } = await axios.get(
        `http://192.168.22.238:4000/api/v1/getAllClasses`,
               
      );
      console.log("After Posting");
     
      dispatch({ type: Get_CLASSInfo_SUCCESS, payload: data });
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: Get_CLASSInfo_FAIL, payload: error.response.data.message });
      } else {
        dispatch({ type: Get_CLASSInfo_FAIL, payload: "An error occurred" });
      }
    }
  };
// Delete User
export const deleteClass = (id) => async (dispatch) => {
  try {
    console.log("Deleclass1");
    dispatch({ type: DELETE_CLASS_REQUEST });

    const { data } = await axios.delete(`http://192.168.22.238/api/v1/deleteClass/${id}`);

    dispatch({ type: DELETE_CLASS_SUCCESS, payload: data });
    console.log("DeleteClass2");
  } catch (error) {
    dispatch({
      type: DELETE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Class
export const updateClass = (id, newClassdata) => async (dispatch) => {
  try {
    console.log("Id in action");
    console.log(id);
    console.log(newClassdata);
    console.log("update Class REquest");
    dispatch({ type: UPDATE_CLASS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `http://192.168.22.238:4000/api/v1/updateClass/${id}`,
      newClassdata,
      config
    );
  console.log("Update Class success");
    dispatch({
      type: UPDATE_CLASS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};


  
  


  export const GetAdminProfileInfo = () => async (dispatch) => {
    try {
      dispatch({ type: Get_AdminOWNPROFILE_REQUEST }); 
  
   //   const config = { headers: { "Content-Type": "application/json" } };
      console.log("yes");
      
      const { data } = await axios.get(
        `http://192.168.22.238:4000/api/v1/getAdminProfile`,
               
      );
      console.log("After Posting");
      
      dispatch({ type:  Get_AdminOWNPROFILE_SUCCESS, payload: data.user });
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: Get_AdminOWNPROFILE_FAIL, payload: error.response.data.message });
      } else {
        dispatch({ type: Get_AdminOWNPROFILE_FAIL, payload: "An error occurred" });
      }
    }
  };
  /*export const addAdmin = (name,email,phone,address,password,image) => async (dispatch) => {
    try {
      dispatch({ type: Add_Admin_Request }); 
  
   //   const config = { headers: { "Content-Type": "application/json" } };
      console.log("yes");
      console.log(image);
      const { data } = await axios.post(
        `http://192.168.100.42:4000/api/v1/RegisterAdmin`,
        { name,email,phone,address,password,image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }           
      );
      console.log("After Posting");
      console.log(data);
      dispatch({ type:  Add_Admin_Success, payload: data.user });
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: Add_Admin_Fail, payload: error.response.data.message });
      } else {
        dispatch({ type: Add_Admin_Fail, payload: "An error occurred" });
      }
    }
  };*/

  export const addAdmin = (name, email, phone, address, password, image) => async (dispatch) => {
    try {
      dispatch({ type: Add_Admin_Request });
      console.log(image);   
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('address', address);
      formData.append('password', password);
      formData.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
  console.log("In add image2");
         const { data } = await axios.post(
        `http://192.168.22.238/api/v1/RegisterAdmin`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  console.log("In addd image 3");
      dispatch({ type: Add_Admin_Success, payload: data.user });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: Add_Admin_Fail, payload: error.response.data.message });
      } else {
        dispatch({ type: Add_Admin_Fail, payload: 'An error occurred' });
      }
    }
  };
  
  export const getAdmins = () => async (dispatch) => {
    try {
      console.log("1");
      dispatch({ type: GET_ADMINS_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
      console.log("yes");
      
      const { data } = await axios.get(
        `http://192.168.22.238:4000/api/v1/getAllAdmins`,
               
      );
      console.log("After Posting the data is");
      
      
      dispatch({ type: GET_ADMINS_SUCCESS, payload: data });
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: GET_ADMINS_FAIL, payload: error.response.data.message });
      } else {
        dispatch({ type: GET_ADMINS_FAIL, payload: "An error occurred" });
      }
    }
  };

/*export const getAdmins = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ADMINS_REQUEST });

    const response = await axios.get(`http://192.168.100.42:4000/api/v1/getAdminProfile`);
    
    if (response.data && response.data.success) {
      dispatch({
        type: GET_ADMINS_SUCCESS,
        payload: response.data.users,
      });
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    dispatch({
      type: GET_ADMINS_FAIL,
      payload: error.message || 'Failed to fetch admin data',
    });
  }
};*/

  //Register Course
  export const RegisterCourse = (className,Fee) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_COURSE_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
      console.log("yes");
      const { data } = await axios.post(
        `http://192.168.22.238:4000/api/v1/RegisterCourse`,
        { className,Fee },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("After Posting");
      
      dispatch({ type: REGISTER_COURSE_SUCCESS, payload: data.user });
    } catch (error) {
      console.log("enter into the error part");
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: REGISTER_COURSE_FAIL, payload: error.response.data.message });
      } else {
        dispatch({ type: CLASS_REGISTER_FAILURE, payload: "An error occurred" });
      }
    }
  };


  //Student Actions
  export const addStudent = (name, email, dateOfBirth,classname,roll_no,address,parents_name,contact_no,gender,previous_dues,age,
    registration_fees,
    password  
     ,image) => async (dispatch) => {
    try {
      dispatch({ type: ADD_STUDENT_REQUEST });
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('dateOfBirth', dateOfBirth);
      formData.append('classname', classname);
      formData.append('roll_no', roll_no);
      formData.append('address', address);
      formData.append('parents_name', parents_name);
      formData.append('contact_no', contact_no);
      formData.append('gender', gender);
      formData.append('previous_dues', previous_dues);
      formData.append('registration_fees', registration_fees);
      formData.append('password', password);

      formData.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'image.jpg',
      });
  
      const { data } = await axios.post(
        `http://192.168.22.238:4000/api/v1/RegisterStudent`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      dispatch({ type: ADD_STUDENT_SUCCESS, payload: data.user });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: ADD_STUDENT_FAIL, payload: error.response.data.message });
      } else {
        dispatch({ type: ADD_STUDENT_FAIL, payload: 'An error occurred' });
      }
    }
  };
  