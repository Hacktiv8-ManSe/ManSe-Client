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

export const cameraData = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_DATA_CAMERA',
      payload
    })
  }
}