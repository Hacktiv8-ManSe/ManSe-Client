import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../store/actions/userAction'
import CardBody from "../components/CardBody";
import Headers from "../components/Headers";

const { width } = Dimensions.get('screen')

const ResultsScreen = (props) => {
  const { camera } = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(camera.clarifaiPredictions)
  console.log(camera.cameraData)
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={styles.container}>
      <Headers style={styles.Headers}></Headers>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
        >
          {
            camera.cameraData?.map(recipe => {
              return (
                <CardBody
                  key={recipe.id}
                  recipe={recipe}
                  style={styles.CardBody}
                />
              )
            })
          }
        </ScrollView>
      </View>
    </View>
      {/* <Text>ResultsScreen {camera.clarifaiPredictions}</Text>
      <TouchableOpacity 
        style={{
          marginTop: 12
        }} 
        onPress={() => {
          props.navigation.navigate("LoginScreen")
          dispatch(signOut())
        }} >
        <Text>Logout</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default ResultsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Headers: {
    width: width,
    height: 56
  },
  scrollArea: {
    // width: 360,
    // height: 548,
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
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
})
