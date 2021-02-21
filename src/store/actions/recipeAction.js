export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const responses = await fetch('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian,vegan&number=20&addRecipeInformation=true&apiKey=ae1567c7e44b4b748186128672c72144')
      if (responses.ok) {
        const data = await responses.json()
        dispatch({
          type: 'FETCH_RECIPES',
          payload: data.results
        })
      } else {
        throw responses
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchRecipe = (recipeId) => {
  return async (dispatch) => {
    try {
      const responses = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=ae1567c7e44b4b748186128672c72144`)
      if (responses.ok) {
        const data = await responses.json()
        dispatch({
          type: 'FETCH_RECIPE',
          payload: data
        })
      } else {
        throw responses
      }
    } catch (error) {
      console.log(error)
    }
  }
}