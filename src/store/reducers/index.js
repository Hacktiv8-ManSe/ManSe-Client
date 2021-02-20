import cameraReducer from './cameraReducer'
import recipeReducer from './recipeReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  camera: cameraReducer,
  recipe: recipeReducer
})