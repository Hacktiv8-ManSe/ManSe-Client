import AsyncStorage from '@react-native-async-storage/async-storage'

export const signIn = () => {
  return async (dispatch) => {
    // wiring backend fetch post
    await AsyncStorage.setItem('access_token', 'access_tokken')
    dispatch({
      type: 'SIGN_IN',
      payload: 'access_tokken'
    })
  }
}

export const signOut = () => {
  return async (dispatch) => {
    await AsyncStorage.clear()
    dispatch({
      type: 'SIGN_OUT'
    })
  }
}