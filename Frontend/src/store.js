import { createStore,combineReducers,applyMiddleware} from  'redux';
import thunk from "redux-thunk";
import { userReducer } from './reducers/userReducer';
import { adminReducer,
    adminProfileReducer,
    adminCourseReducer,
    adminStudentReducer,
    adminInfoReducer
    
} from './reducers/adminReducer';
import  chatbotReducer  from './reducers/chatbotReducer';
import {composeWithDevTools} from "redux-devtools-extension";

const reducer=combineReducers({
    user:userReducer,
    admin:adminReducer,
    getAllAdminInfo:adminInfoReducer,
    adminProfile:adminProfileReducer,
    chatbot:chatbotReducer,
    adminCourse:adminCourseReducer,
    adminStudent:adminStudentReducer

});

let initialState = {
  
};

const middleware=[thunk];

const store=createStore(
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store