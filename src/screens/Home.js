import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import Menu from '../component/Menu';

const Home = (props) => {
  const description =
    "lorem fjf x hkh ftdtf ftyd ydrdf dtfy derst f f r utdtf t y u y vhvjhhj sd";
  return (
    <View style={styles.container}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          // resizeMode="contain"
          source={require("../../assets/biodata.jpg")}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}>
         {props.channelName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

<View style={styles.menuStyle}>
  <View style={styles.lineStyle}></View>
  <Menu/>
  <View style={[styles.lineStyle,{marginVertical:10,}]}></View>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width:400,
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 300,
    height: undefined,
    aspectRatio: 1,
    display: "flex",
    // alignItems: "stretch",
    marginTop: 40,
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily:"NunitoSans_600SemiBold",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 40,
    lineHeight: 27,
    fontFamily:"JosefinSans_400Regular",
  },

  lineStyle:{
marginBottom:10,
borderWidth:1,
borderColor:"grey",
  }
});

export default Home;
