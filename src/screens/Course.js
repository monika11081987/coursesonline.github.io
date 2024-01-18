import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import Courses from "../api/CourseApi"

const Course = ({ navigation }) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate("CourseDetails",
              {courseId:item.id,})}
            >
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    // height:200,
    width: "100%",
    height: "undefined",
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    paddingHorizontal: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign:"center",
    borderRadius: 7,
    shadowColor:"grey",
shadowOffset:{width:0,height:0},
shadowOpacity:0.4,
shadowRadius:8,
elevation:8,
marginVertical:30,
  },
  mainHeader:{
fontSize:22,
color:"#344055",
textTransform:"uppercase",
paddingBottom:14,
textAlign:"center",
fontFamily:"NunitoSans_600SemiBold,",
  },
description:{
textAlign:"left",
fontFamily:"JosefinSans_400Regular",
paddingBottom:14,
lineHeight:20,
fontSize:17,
color:"#7d7d7d",
},

buttonContainer:{
display:"flex",
flexDirection:"row",
justifyContent:"center",
},

buttonStyle:{
backgroundColor:"#809fff",
paddingVertical:10,
marginBottom:20,
paddingHorizontal:20,
display:"flex",
justifyContent:"center",
alignItems:"center",
},

buttonText:{
  fontSize:20,
  color:"#eeee",
  fontFamily:"JosefinSans_500Medium",
  textTransform:"capitalize",
},
});
export default Course;
