import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function Headers(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapperStack}>
        <View style={styles.textWrapper}></View>
        <Text
          style={styles.text}
        >NutriSee</Text>
      </View>
      <View style={styles.textWrapperStackFiller}></View>
      <TouchableOpacity>
      <Image
        source={require("../../assets/images/profile.jpg")}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(80,227,194,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  textWrapper: {
    position: "absolute",
    left: 0,
    top: 8
  },
  text: {
    top: 0,
    position: "absolute",
    color: "#121212",
    height: 30,
    width: 81,
    fontSize: 20,
    left: 0,
    color: "white"
  },
  textWrapperStack: {
    width: 81,
    height: 30,
    marginLeft: 21,
    marginTop: 11
  },
  textWrapperStackFiller: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    borderRadius: 150,
    width: 40,
    height: 40,
    marginRight: 21,
    marginTop: 8
  }
});

export default Headers;