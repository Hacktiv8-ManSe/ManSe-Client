// import React, { Component } from "react";
// import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
// import CardBody from "../components/CardBody";
// import Headers from "../components/Headers";

// function HomeScreen(props) {
//   return (
//     <View style={styles.container}>
//       <StatusBar
//         hidden
//         barStyle="light-content"
//         backgroundColor="rgba(0,0,0,1)"
//       />
//       <Headers style={styles.Headers}></Headers>
//       <View style={styles.scrollArea}>
//         <ScrollView
//           horizontal={false}
//         >
//           <CardBody
//             style={styles.CardBody}
//           ></CardBody>
//           <CardBody
//             style={styles.CardBody}
//           ></CardBody>
//           <CardBody
//             style={styles.CardBody}
//           ></CardBody>
//           <CardBody
//             style={styles.CardBody}
//           ></CardBody>
//         </ScrollView>
//       </View>
// =======
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fetchRecipes } from '../store/actions/recipeAction'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {
  const dispatch = useDispatch()
  dispatch(fetchRecipes())
  const { recipe } = useSelector(state => state)
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {
        recipe.recipes?.map(el => {
          return <Text key={el.id}>{ el.title }</Text>
        })
      }
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
