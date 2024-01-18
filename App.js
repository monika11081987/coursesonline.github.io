
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
 } from '@expo-google-fonts/josefin-sans';

 import {
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  } from '@expo-google-fonts/nunito-sans';

  import AppLoading from "expo-app-loading";

export default function App(){

  let [fontsLoaded]=useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,});

if(!fontsLoaded){
  <AppLoading/>;
}

  const Stack=createNativeStackNavigator();

return <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    {/* Home screen */}
    <Stack.Screen name="Home" options={{headerShown:false,}}>
      {(props)=><Home {...props} channelName={"thapa technical"}/>}
    </Stack.Screen>

{/* course screen */}
<Stack.Screen name="Course" component={Course}
options={{headerTitleStyle:{
  fontSize:24,
fontFamily:"NunitoSans_600SemiBold",},
  headerTitle:"Courses",
  headerTitleAlign:"center",
  }}/>

{/* user data screen */}
<Stack.Screen name="Student" component={UserData}
options={{headerTitleStyle:{
  fontSize:24,
  // fontFamily:"NunitoSans_600SemiBold",
  fontFamily:"JosefinSans_400Regular",
},
  headerTitle:"Students Data",
  headerTitleAlign:"center",
  }}
/>

{/* About screen */}
<Stack.Screen name="About" component={About}
options={{headerTitleStyle:{
  fontSize:24,

  fontFamily:"NunitoSans_600SemiBold",},
  headerTitleAlign:"center",
  }}/>

{/* Contact screen */}
<Stack.Screen name="Contact" component={Contact}
options={{headerTitleStyle:{
  fontSize:24,
  fontFamily:"NunitoSans_600SemiBold",
},
  headerTitleAlign:"center",
  }}/>

  {/* Course details screen */}
<Stack.Screen name="CourseDetails" component={CourseDetails}
options={{headerTitleStyle:{
  fontSize:24,
  fontFamily:"NunitoSans_600SemiBold",
},
  headerTitleAlign:"center",
  }}/>


  </Stack.Navigator>
</NavigationContainer>
}