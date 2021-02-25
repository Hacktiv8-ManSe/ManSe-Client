import React from 'react'
import { Button, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export const IngredientList = ({ navigation }) => {
  const { ingredients } = useSelector(state => state.camera)
  return (
    <>
      {ingredients &&
        ingredients.map(prediction => {
          return (
            <View>
              <Text>
                {prediction.name}: {prediction.value * 100}%
              </Text>
            </View>
          )
        })}
      <Button
        onPress={() => navigation.navigate('Results')}
        title='Check Menu'
      />
    </>
  )
}
