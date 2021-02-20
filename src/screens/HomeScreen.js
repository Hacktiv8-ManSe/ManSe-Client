import React, { Component } from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import CardBody from "../components/CardBody";
import Headers from "../components/Headers";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,1)"
      />
      <Headers style={styles.Headers}></Headers>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
        >
          <CardBody
            style={styles.CardBody}
          ></CardBody>
          <CardBody
            style={styles.CardBody}
          ></CardBody>
          <CardBody
            style={styles.CardBody}
          ></CardBody>
          <CardBody
            style={styles.CardBody}
          ></CardBody>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Headers: {
    width: 360,
    height: 56
  },
  scrollArea: {
    width: 360,
    height: 548,
    marginTop: 20
  },
  scrollArea_contentContainerStyle: {
    height: 548,
    width: 360
  },
  CardBody: {
    height: 233,
    width: 360,
    marginBottom: 20
  }
});

export default HomeScreen;
