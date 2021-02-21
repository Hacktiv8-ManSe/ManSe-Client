

  import React, { useState } from "react";
  import {
    StyleSheet,
    View,
    StatusBar,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
  } from "react-native";
  import SubmitButton from "../components/SubmitButton";
  const { width, height } = Dimensions.get('screen')
  
  function RegisterScreen(props) {

  const [ gender, setGender ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ height, setHeight ] = useState('')
  const [ weight, setWeight ] = useState('')
  const [ age, setAge ] = useState('')

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="rgba(7,0,0,1)" />
        <ImageBackground
          source={require("../../assets/images/potrait1.jpg")}
          resizeMode="contain"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
          <View style={styles.group3}>
            <Text style={styles.register}>Register</Text>
            <TextInput placeholder=" Email" style={styles.email}></TextInput>
            <TextInput
              placeholder=" Password"
              secureTextEntry={true}
              style={styles.textInput}
            ></TextInput>
            <View style={styles.weightRow}>
              <TextInput
                placeholder=" Weight"
                keyboardType="numeric"
                style={styles.weight}
              ></TextInput>
              <TextInput
                placeholder=" Height"
                keyboardType="numeric"
                style={styles.height}
              ></TextInput>
            </View>
            <View style={styles.ageRow}>
              <TextInput
                placeholder=" Age"
                keyboardType="numeric"
                style={styles.age}
              ></TextInput>
              <TextInput placeholder=" Gender" style={styles.gender}></TextInput>
            </View>
            <SubmitButton
              style={styles.SubmitButton}
            ></SubmitButton>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button}
          >
            <Text>Already have an account? Click here</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(247,239,239,1)",
      borderRadius: 10,
    },
    image3: {
      // width: 548,
      // height: 1471,
      // marginTop: -364,
      // marginLeft: -131
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image3_imageStyle: {
      opacity: 0.52
    },
    group3: {
      width: 269,
      height: 384,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      // marginTop: 532,
      // marginLeft: 177
    },
    register: {
      color: "#121212",
      fontSize: 40,
      marginLeft: 66,
      marginRight: 39
    },
    email: {
      color: "#121212",
      height: 35,
      width: 268,
      borderRadius: 10,
      backgroundColor: "rgba(255,255,255,1)",
      marginTop: 24,
      marginLeft: 1
    },
    textInput: {
      color: "#121212",
      height: 35,
      width: 268,
      borderRadius: 10,
      backgroundColor: "rgba(255,255,255,1)",
      marginTop: 19,
      marginLeft: 1
    },
    weight: {
      color: "#121212",
      height: 37,
      width: 121,
      backgroundColor: "#fff",
      borderRadius: 10
    },
    height: {
      color: "#121212",
      height: 37,
      width: 133,
      borderRadius: 10,
      backgroundColor: "rgba(254,254,254,1)",
      marginLeft: 12
    },
    weightRow: {
      height: 37,
      flexDirection: "row",
      marginTop: 22,
      marginLeft: 1,
      marginRight: 2
    },
    age: {
      color: "#121212",
      height: 38,
      width: 121,
      backgroundColor: "#fff",
      borderRadius: 10
    },
    gender: {
      color: "#121212",
      height: 38,
      width: 130,
      borderRadius: 10,
      backgroundColor: "#fff",
      marginLeft: 13
    },
    ageRow: {
      height: 38,
      flexDirection: "row",
      marginTop: 20,
      marginRight: 5
    },
    SubmitButton: {
      height: 44,
      width: 266,
      marginTop: 19,
      marginLeft: 1
    },
    button: {
      alignItems: "center",
      backgroundColor: 'rgba(52, 52, 52, 0)',
      padding: 10
    }
  });
  
  export default RegisterScreen;
  