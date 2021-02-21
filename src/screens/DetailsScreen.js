import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fetchRecipe } from '../store/actions/recipeAction'
import { useDispatch, useSelector } from 'react-redux'

const DetailsScreen = (props) => {
  const { recipeId } = props.route.params
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRecipe(recipeId))
  }, [recipeId])
  const { recipe } = useSelector(state => state.recipe)
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>DetailsScreen</Text>
      <Text>{ recipe.title }</Text>
      <Image source={{uri: recipe.image}} style={{
        width: 200,
        height: 150
      }}></Image>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})
