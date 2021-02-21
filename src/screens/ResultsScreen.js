import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../store/actions/userAction'


const ResultsScreen = (props) => {
  const { camera } = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(camera.clarifaiPredictions)
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>ResultsScreen {camera.clarifaiPredictions}</Text>
      <TouchableOpacity 
        style={{
          marginTop: 12
        }} 
        onPress={() => {
          props.navigation.navigate("LoginScreen")
          dispatch(signOut())
        }} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ResultsScreen

const styles = StyleSheet.create({})
