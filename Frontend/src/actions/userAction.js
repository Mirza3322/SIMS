import { 
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,

    LOGOUT_SUCCESS,
    LOGOUT_FAILURE

  
  } from "../constants/userConstant"
  import axios from "axios"

  //login action
/*export const loginTeacher=(email,password)=>async(dispatch)=>{
  /*  try {
      dispatch({type:LOGIN_REQUEST});
      
      const config={headers:{"Content-Type":"application/json"}};
   console.log("action1");
      const {data}=await axios.post(
           `http://localhost:4000/api/v1/loginTeacher`,
           {email,password},
           config
      );
      console.log(data)
      
      dispatch({type:LOGIN_SUCCESS,payload:data.user});
  
    } catch (error) {
      dispatch({type:LOGIN_FAILURE,payload:error.response.data.message})
    }
    
  };
  */
  export const loginTeacher = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
  
      console.log(email);
      console.log(password); 
      const { data } = await axios.post(
        `http://192.168.22.238:4000/api/v1/loginTeacher`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("After Posting");
      console.log(data);
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const payload = error.response.data.message;
        dispatch({ type: LOGIN_FAILURE, payload });
        console.log(payload);
        console.log("E1");
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "An error occurred" });
        console.log("E2");
      }
    }
  };

  export const loginAdmin = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
  
      console.log(email);
      console.log(password); 
      const { data } = await axios.post(
        `http://192.168.22.238:4000/api/v1/loginAdmin`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("After Posting");
      console.log(data.user);
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const payload = error.response.data.message;
        dispatch({ type: LOGIN_FAILURE, payload });
        console.log(payload);
        console.log("E1");
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "An error occurred" });
        console.log("E2");
      }
    }
  };
   
  export const loginStudent = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
   //   const config = { headers: { "Content-Type": "application/json" } };
  
      console.log(email);
      console.log(password); 
      const { data } = await axios.post(
        `http://192.168.22.238:4000/api/v1/loginStudent`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("After Posting");
      console.log(data.user);
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        const payload = error.response.data.message;
        dispatch({ type: LOGIN_FAILURE, payload });
        console.log(payload);
        console.log("E1");
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: "An error occurred" });
        console.log("E2");
      }
    }
  };
  
  //Logout user
export const LOGOUT_USER=()=>async(dispatch)=>{
  try {
    

    await axios.get(
         `http://192.168.22.238:4000/api/v1/logout`,
         
    );
     console.log('yess')    
    dispatch({type:LOGOUT_SUCCESS});

  } catch (error) {
    dispatch({type:LOGOUT_FAILURE,payload:error.response.data.message})
  }
};
