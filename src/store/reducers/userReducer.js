const initialState = {
  isLoggedIn: false,
  userData: {}
}

export default (state = initialState, action) => {
  const { type, payload } = action
  // console.log(payload, "dari reducer user")
  switch (type) {
    case 'SIGN_IN':
      return {
        ...state,
        userData: payload,
        isLoggedIn: true
      }
    case 'SIGN_OUT':
      return {
        ...state,
        userData: '',
        isLoggedIn: false
      }
    default:
      return state
  }
}