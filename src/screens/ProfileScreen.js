import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'


const ProfileScreen = () => {
  const { camera } = useSelector(state => state)
  console.log(camera.clarifaiPredictions)
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
