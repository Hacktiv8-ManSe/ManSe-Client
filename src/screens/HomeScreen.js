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
          return <Text kkey={el.id}>{ el.title }</Text>
        })
      }
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
