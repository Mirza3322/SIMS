import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Screens/Authentication/Login";
import ChatbotComponent from "./src/Screens/chatbot/Chatbot";
import Admin from "./src/Screens/Admin/Admin";
import Teacher from "./src/Screens/Admin/Teacher";
import Students from "./src/Screens/Students/Students";
import CourseRegistrationScreen from "./src/Screens/Admin/CourseRegistration";
import ClassRegistration from "./src/Screens/Admin/ClassRegistration";
import ClassRegister2 from "./src/Screens/Admin/classRegistration2";
import ManageCourse from "./src/Screens/Admin/ManageCourses";
import Profile from "./src/Screens/Admin/Profile";
import ManageAdmin from "./src/Screens/Admin/ManageAdmin";
import AdminManagementComponent from "./src/Screens/Admin/ManageAdminScreen";
import AdminDashboard from "./src/Screens/Admin/AdminDashboard";
import ManageStudent from "./src/Screens/Admin/ManageStudent";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();



const NavigationWrapper = () => {
    const {user,error,loading,isAuthenticated}=useSelector((state)=>state.user)
    console.log("isAuthenticated is");
    console.log(isAuthenticated);
    
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName={
            isAuthenticated && user.role === "admin"
              ? "AdminDashboard2"
              : isAuthenticated && user.role === "student"
              ? "StudentDashboard"
              : isAuthenticated && user.role === "teacher"
              ? "TeacherDashboard"
              : "Login"
          }>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chatbot" component={ChatbotComponent} />
        <Stack.Screen name="AdminDashboard" component={Admin} />
        <Stack.Screen name="TeacherDashboard" component={Teacher} />
        <Stack.Screen name="StudentDashboard" component={Students} />
        <Stack.Screen
          name="CoursePageAdmin"
          component={CourseRegistrationScreen}
        />
        <Stack.Screen name="classPageAdmin" component={ClassRegistration} />
        <Stack.Screen name="classPageAdmin2" component={ClassRegister2} />
        <Stack.Screen name="ManageCourses" component={ManageCourse} />
        <Stack.Screen name="ProfilePage" component={Profile} />
        <Stack.Screen name="ManageAdminPage" component={ManageAdmin} />
        <Stack.Screen
          name="ManageAdminScreen"
          component={AdminManagementComponent}
        />
        <Stack.Screen
          name="ManageStudent"
          component={ManageStudent}
        />
        <Stack.Screen name="AdminDashboard2" component={AdminDashboard} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationWrapper;
