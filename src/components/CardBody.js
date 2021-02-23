import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

function CardBody(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
      style={[styles.container, props.style]} 
      onPress={() => {
        navigation.navigate("Details", {
          recipeId: props.recipe.id
        })
      }}>
      <Image
        source={{
          uri: props.recipe.image
        }}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          {
            props.recipe.readyInMinutes ?
            <View>
            <Text style={styles.titleStyle}>{ props.recipe.title }</Text>
            <Text style={styles.subtitleStyle}>Ready in : { props.recipe.readyInMinutes } minutes</Text>
            </View>
            :
            <Text style={styles.titleStyle}>{ props.recipe.title }</Text>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    width: "auto",
    flex: 1
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    left: 0,
    right: 0
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 24,
    color: "#FFF",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#FFF",
    lineHeight: 16,
    opacity: 0.5
  }
});

export default CardBody;