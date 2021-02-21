export const fetchRecipes = () => {
  return (dispatch) => {
    fetch('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian,vegan&number=20&addRecipeInformation=true&apiKey=a31a8c1813db4880b3671da8227f060c')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'FETCH_RECIPES',
          payload: data.results
        })
      })
      .catch(err => console.log(err))
  }
}

export const fetchRecipe = (recipeId) => {
  return (dispatch) => {
    fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=a31a8c1813db4880b3671da8227f060c`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch({
          type: 'FETCH_RECIPE',
          payload: data
        })
      })
      .catch(err => console.log(err))
  }
}