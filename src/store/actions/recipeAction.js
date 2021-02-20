export const fetchRecipes = () => {
  return (dispatch) => {
    fetch('https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian,vegan&number=20&apiKey=e341af296eb7461e8d3bd604a66f6018')
      .then(res => res.json())
      .then(data => {
        console.log(data.results)
        dispatch({
          type: 'FETCH_RECIPES',
          payload: data.results
        })
      })
      .catch(err => console.log(err))
  }
}