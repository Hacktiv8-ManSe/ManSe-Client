import AsyncStorage from '@react-native-async-storage/async-storage'

export const signIn = (data) => {
  return async (dispatch) => {
    // wiring backend fetch post
    try {
      // console.log(JSON.stringify(data))
      // ganti url dengan wifi IP. cek IP di command prompt - ipconfig
      const response = await fetch('http://192.168.100.7:5001/login', 
      { 
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      })
      let result = await response.json()
      // console.log(result)
      // await AsyncStorage.setItem('access_token', result.access_token)
      const userData = await fetch(`http://192.168.100.7:5001/users/${result._id}`, {
        method: 'GET',
        headers: {
          'access_token': result.access_token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let userOutput = await userData.json()
      console.log(userOutput.data)
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