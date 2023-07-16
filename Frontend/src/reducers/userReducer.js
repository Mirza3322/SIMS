import { 
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS, 
    LOGOUT_FAILURE,
    
} from "../constants/userConstant"



export const userReducer=(state={user:{}},action)=>{

    switch(action.type){
        case LOGIN_REQUEST:  
            return{
                loading:true,
                isAuthenticated:false
            };
            case LOGIN_SUCCESS:

                return{
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    user:action.payload,
                };

                case LOGOUT_SUCCESS:
                    return{
                        loading:false,
                        isAuthenticated:false,
                        user:null
                    }
                

                case LOGIN_FAILURE:
                return{
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    user:null,
                    error:action.payload
                };
/*                case LOAD_USER_FAILURE:
                    return{
                        ...state,
                        loading:false,
                        isAuthenticated:false,
                        user:null,
                        error:action.payload
                    }*/
                    case LOGOUT_FAILURE:
                        return{
                               ...state,
                               loading:false,
                               error:action.payload         
                        }
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
