import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from "react-native";
import React,{useState} from "react";
import { Checkbox } from "expo-checkbox";

const Contact = ({navigation}) => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
const [agree, setAgree] = useState(false);

const submit=()=>{
if(!name && !email && !phone && !message){
Alert.alert("pls fill all fields");
// console.log("pls fill");
}else{
// Alert.alert(`thank you ${name}`);
Alert.alert("thank you");
// console.log(`thank you ${name}`);
navigation.navigate("Home");
}
};

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.description}>You can reach us at garg@gmail.com</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Monika garg"}
          value={name}
          onChangeText={(userdata)=>setName(userdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@gmail.com"}
          value={email}
          onChangeText={(mail)=>setEmail(mail)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"12347890"}
          value={phone}
          onChangeText={(ph)=>setPhone(ph)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How can we help you?</Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Tell us about yourself"}
          value={message}
          onChangeText={(mess)=>setMessage(mess)}
          numberOfLines={4}
          multiline={true}
        />
      </View>

{/* checkbox */}
<View style={styles.wrapper}>
<Checkbox 
value={agree}
onValueChange={()=>setAgree(!agree)}
color={agree?"#4630EB":undefined}

/>
<Text style={styles.wrapperText}>I  have read and agreed with TC</Text>
</View>

{/* submit button */}
<TouchableOpacity
style={[styles.buttonStyle,
{
  backgroundColor :agree ? "#4630EB":"grey"
}
]}
disabled={!agree}
onPress={submit}
>
  <Text style={styles.buttonText}>Contact Us</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 40,
    backgroundColor: "#fff",
  },

  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "capitalize",
    fontWeight: "400",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "NunitoSans_700Bold",
    // lineHeight:30,
  },

  description: {
    // textAlign:"left",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 14,
    lineHeight: 20,
    fontSize: 17,
    color: "#7d7d7d",
  },

  inputContainer:{
marginTop:20,

  },

  labels:{
fontWeight:"bold",
color:"#7d7d7d",
paddingBottom:4,
fontFamily:"JosefinSans_400Regular",
lineHeight:24,
  },

inputStyle:{
borderWidth:1,
borderColor:"rgba(0,0,0,0.3)",
paddingHorizontal:14,
paddingVertical:6,
borderRadius:2,
},

multilineStyle:{
paddingVertical:4,
},

buttonStyle:{
  borderRadius:4,
paddingVertical:10,
paddingHorizontal:18,
display:"flex",
justifyContent:"center",
alignItems:"center",
marginVertical:30,
},

buttonText:{
color:"#eee",
},

wrapper:{
display:"flex",
flexDirection:"row",
marginTop:20,
fontFamily:"JosefinSans_500Medium",
},

wrapperText:{
  marginLeft:10,
  color:"#7d7d7d",
},

});
export default Contact;
