export const setPhotoUri = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_PHOTO_URI',
      payload
    })
  }
}

export const setClarifaiPredictions = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_CLARIFAI_PREDICTIONS',
      payload
    })
  }
}