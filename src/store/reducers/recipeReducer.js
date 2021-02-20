const initialState = {
  recipes: []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_RECIPES':
      return {
        ...state,
        recipes: payload
      }
    default:
      return state
  }
}