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
    UPDATE_CLASS_REQUEST,
    UPDATE_CLASS_SUCCESS,
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

export const adminReducer=(state={admin:{}},action)=>{

    
    switch(action.type){
        case DELETE_CLASS_REQUEST:
            return{
                ...state,
                loading:true
        
            };
            case DELETE_CLASS_SUCCESS:
             return {
               ...state,
               loading: false,
               isDeleted: action.payload.success,
               message: action.payload.message,
                    };
                    case DELETE_CLASS_FAIL:
                        return {
                          ...state,
                          loading: false,
                          isDeleted: action.payload.success,
                          message: action.payload.message,
                               };
                               case UPDATE_CLASS_REQUEST:
                                     return {
                                        ...state,
                                         loading: true,
                                           };
                                           case UPDATE_CLASS_SUCCESS:
                                            return {
                                              ...state,
                                              loading: false,
                                              isUpdated: action.payload,
                                            };
                                            case UPDATE_CLASS_FAIL:
                                             return {
                                              ...state,
                                              loading: false,
                                              error: action.payload,
                                                };

        case CLASS_REGISTER_REQUEST:
            return{
                loading:true,
                
                isAuthenticated_for_class_register:false
            };
            case  Get_CLASSInfo_REQUEST:
                
            return{
                loading:true,
                isAuthenticated_classInfo:false
                
            };
            case CLASS_REGISTER_SUCCESS:
                return{
                    
                    ...state,
                    loading:false,
                    isAuthenticated_for_class_register:true,
                    admin:action.payload
                };
                case Get_CLASSInfo_SUCCESS:
                    
                return{
                    
                    ...state,
                    loading:false,
                    isAuthenticated_classInfo:true,
                    admin:action.payload
                };

                

                case CLASS_REGISTER_FAILURE:
                    return{
                        ...state,
                        loading:false,
                        isAuthenticated_for_class_register:false,
                        user:null,
                        error:action.payload
                    };
                    case Get_CLASSInfo_FAIL:
                        
                return{
                    ...state,
                    loading:false,
                    isAuthenticated_classInfo:false,
                    user:null,
                    error:action.payload
                };

            /*case CLEAR_ERRORS:
        
             return{
            ...state,
            error:null
    
    
           };*/
           default:{
            return  state;
          }

    }


}


export const adminProfileReducer=(state={adminProfile:{}},action)=>{

    
    switch(action.type){
        case Get_AdminOWNPROFILE_REQUEST:
            case Add_Admin_Request:
           return{
                loading:true,
                isAuthenticated:false
            };
            case Get_AdminOWNPROFILE_SUCCESS:
                case Add_Admin_Success:
                
                return{
                    
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    //adminProfileInfo:action.payload
                    user:action.payload
                };

                

                case Get_AdminOWNPROFILE_FAIL:
                    case Add_Admin_Fail:
                return{
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                };

            /*case CLEAR_ERRORS:
        
             return{
            ...state,
            error:null
    
    
           };*/
           default:{
            return  state;
          }

    }


}


export const adminCourseReducer=(state={adminCourse:{}},action)=>{

    
    switch(action.type){
        
            case REGISTER_COURSE_REQUEST:
           return{
                loading:true,
                isAuthenticated:false
            };
            case REGISTER_COURSE_SUCCESS:
                
                return{
                    
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    //adminProfileInfo:action.payload
                    user:action.payload
                };

                

                case REGISTER_COURSE_FAIL:
                return{
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                };

            /*case CLEAR_ERRORS:
        
             return{
            ...state,
            error:null
    
    
           };*/
           default:{
            return  state;
          }

    }


}

export const adminStudentReducer=(state={adminCourse:{}},action)=>{

    
    switch(action.type){
        
            case ADD_STUDENT_REQUEST:
           return{
                loading:true,
                isAuthenticated:false
            };
            case ADD_STUDENT_SUCCESS:
                
                return{
                    
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    //adminProfileInfo:action.payload
                    user:action.payload
                };

                

                case ADD_STUDENT_FAIL:
                return{
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                };

            /*case CLEAR_ERRORS:
        
             return{
            ...state,
            error:null
    
    
           };*/
           default:{
            return  state;
          }

    }


}
export const adminInfoReducer = (state={getAllAdminInfo:{}}, action) => {
    switch (action.type) {
      case GET_ADMINS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_ADMINS_SUCCESS:
        return {
          ...state,
          loading: false,
          admins: action.payload,
        };
      case GET_ADMINS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };