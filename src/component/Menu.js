import React from "react";
import { TouchableOpacity, View, StyleSheet, Text,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")} >
        <Image 
        style={styles.iconStyle}
        source={{uri:"https://img.icons8.com/stickers/90/000000/training.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Student")}>
        <Image 
        style={styles.iconStyle}
        source={{uri:"https://img.icons8.com/stickers/100/000000/conference.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}>
        <Image 
        style={styles.iconStyle}
        source={{uri:"https://img.icons8.com/stickers/100/000000/phone-office.png"}}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}>
        <Image 
        style={styles.iconStyle}
        source={{uri:"https://img.icons8.com/stickers/100/000000/about.png"}}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyle:{
    width:80,
    height:40,
    aspectRatio:1,
  }
});

export default Menu;
