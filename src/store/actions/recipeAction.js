export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const responses = await fetch('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian,vegan&number=20&addRecipeInformation=true&apiKey=222d6419657447d18b5ab1c8694662fa')
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
      const responses = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=222d6419657447d18b5ab1c8694662fa`)
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