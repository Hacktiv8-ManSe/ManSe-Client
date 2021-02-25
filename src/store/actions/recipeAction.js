export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const responses = await fetch('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian,vegan&number=20&addRecipeInformation=true&apiKey=a31a8c1813db4880b3671da8227f060c')
      if (responses.ok) {
        const data = await responses.json()
        // console.log(data.results)
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
      const responses = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=a31a8c1813db4880b3671da8227f060c`)
      if (responses.ok) {
        const data = await responses.json()
        console.log(data)
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