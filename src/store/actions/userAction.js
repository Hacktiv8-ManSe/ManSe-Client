import AsyncStorage from '@react-native-async-storage/async-storage'

export const signIn = (data) => {
  return async (dispatch) => {
    // wiring backend fetch post
    try {
      // ganti url dengan wifi IP. cek IP di command prompt - ipconfig
      const response = await fetch('http://192.168.100.7:5001/login', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      })
      let result = await response.json()
      await AsyncStorage.setItem('access_token', result.access_token)
      const userData = await fetch(`http://192.168.100.7:5001/users/${result._id}`, {
        method: 'GET',
        headers: {
          'access_token': result.access_token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let userOutput = await userData.json()
      dispatch({
        type: 'SIGN_IN',
        payload: userOutput.data
      })
    }
    catch(err) {
      console.log(err)
    }
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

export const register = (data) => {
  console.log(data, "ini dari action")
  return async(dispatch) => {
    try {
      const response = await fetch('http://192.168.100.7:5001/register', 
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
    catch(err) {
      console.log(err)
    }
  }
}