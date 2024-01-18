import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Monika Garg</Text>
      <Text style={styles.paraStyle}>I am a full stack developer</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          }}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About me</Text>
        <Text style={[styles.paraStyle,styles.aboutPara]}>
          lorem df df gfgy fyg ftfy y try t u yyjk hgfftdrdfj uyuy yutf hugy hgy
          hughjg fty ftr sespok i gjkiooj oh pkjbcgfh
        </Text>
      </View>

      <Text style={styles.mainHeader}>Follow me on social network</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=-5_QGgg6C54")
          }
        >
          <Image
            style={styles.iconStyle}
            // source={{uri:"https://www.flaticon.com/free-icon/instagram_2111463"}}
            source={require("../../assets/instagram.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=-5_QGgg6C54")
          }
        >
          <Image
            style={styles.iconStyle}
            // source={{uri:"https://www.flaticon.com/free-icon/instagram_2111463"}}
            source={require("../../assets/youtube.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=-5_QGgg6C54")
          }
        >
          <Image
            style={styles.iconStyle}
            // source={{uri:"https://www.flaticon.com/free-icon/instagram_2111463"}}
            source={require("../../assets/facebook.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

aboutContainer:{
display:"flex",
alignItems:"center",
},

  imgStyle: {
    width: 200,
    height: 200,
    borderRadius:100,
  },

mainHeader:{
fontSize:18,
color:"#344055",
textTransform:"uppercase",
fontWeight:"400",
marginTop:40,
marginBottom:10,
fontFamily:"NunitoSans_700Bold",
lineHeight:30,
},

paraStyle:{
fontSize:18,
color:"#7d7d7d",
paddingBottom:30,
},

aboutLayout:{
  backgroundColor:"#4c5dab",
  paddingHorizontal:30,
  marginTop:30,

},
aboutSubHeader:{
  fontSize:18,
color:"#fff",
textTransform:"uppercase",
fontWeight:"400",
marginTop:14,
marginBottom:14,
fontFamily:"NunitoSans_700Bold",
lineHeight:30,
alignSelf:"center",
},

aboutPara:{
  color:"#fff",
},

menuContainer:{
  width:"100%",
flexDirection:"row",
justifyContent:"space-evenly",
},

  iconStyle:{
width:40,
height:40,
  },
});
export default About;
