const initialState = {
  clarifaiPredictions: '',
  photoURI: '',
  cameraData: []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_PHOTO_URI':
      return {
        ...state,
        photoURI: payload
      }
    case 'SET_CLARIFAI_PREDICTIONS':
      return {
        ...state,
        clarifaiPredictions: payload
      }
    case 'SET_DATA_CAMERA':
      return {
        ...state,
        cameraData: payload
      } 
    default:
      return state
  }
}