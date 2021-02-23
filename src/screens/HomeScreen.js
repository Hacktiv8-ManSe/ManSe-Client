import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar, ScrollView, Dimensions } from "react-native";
import CardBody from "../components/CardBody";
import Headers from "../components/Headers";
import { fetchRecipes } from '../store/actions/recipeAction'
import { useDispatch, useSelector } from 'react-redux'

const { width } = Dimensions.get('screen')

function HomeScreen(props) {
  const { recipe, user } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(user, "dari HomeScreen")
    dispatch(fetchRecipes())
  }, [])
  // const recipe = {
  //   recipes: [
  //     {
  //       id: 1,
  //       title: 'Nasi Minyak (Malaysian Festive Rice)',
  //       image: 'https://spoonacular.com/recipeImages/652964-556x370.jpg'
  //     }
  //   ]
  // }
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
          {
            recipe.recipes?.map(recipe => {
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
  )
}

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
});

export default HomeScreen;
