import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import CameraPreview from '../components/CameraPreview'
import Clarifai, { FOOD_MODEL } from 'clarifai'
import { setPhotoUri, setClarifaiPredictions, cameraData } from '../store/actions/cameraAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ScanScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [hasPermission, setHasPermission] = useState(null)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [mode, setMode] = useState('Food')
  const cameraRef = useRef(null)
  const { camera } = useSelector(state => state)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [camera])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true
      })
      setPreviewVisible(true)
      dispatch(setPhotoUri(photo))
      setCapturedImage(photo)
    }
  }
  const savePhoto = async () => {
    console.log('Analyzing photo')
    const ClarifaiApp = new Clarifai.App({
      apiKey: '3c94a001482f46109f6a586f7b324d4e'
    })
    try {
      const responses = await ClarifaiApp.models.predict(FOOD_MODEL, {
        base64: capturedImage.base64
      })
      const { name } = responses.outputs[0].data.concepts[0]
      dispatch(setClarifaiPredictions(name))
      // console.log(name, '<<<< food name')
      navigation.navigate('Results')
      if (name) {
        const responses = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${name}&apiKey=ae1567c7e44b4b748186128672c72144`)
        if (responses.ok) {
          const data = await responses.json()
          dispatch(cameraData(data))
        } else {
          throw responses
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  const retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    dispatch(setPhotoUri(''))
  }
  return (
    <View style={styles.container}>
      { previewVisible && capturedImage  
        ? <CameraPreview 
            photo={capturedImage}
            savePhoto={savePhoto}
            retakePicture={retakePicture}
            mode={mode}/>
        : (
            <Camera 
              style={styles.camera}
              type={Camera.Constants.Type.back}
              ref={cameraRef}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: 20
              }}>
                <TouchableOpacity onPress={() => setMode('Food')}>
                  <Text style={{
                    fontSize: 30,
                    color: mode === 'Food' ? '#fafafa' : '#555252'
                  }}>
                    Food
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMode('Fridge')}>
                  <Text style={{
                    fontSize: 30,
                    color: mode === 'Fridge' ? '#fafafa' : '#555252'
                  }}>
                    Fridge
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <TouchableOpacity
                    onPress={takePicture}
                    style={styles.buttonRadius}>
                    <View style={styles.buttonRadiusInside} >
                      <View style={styles.buttonRadiusInside2} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Camera>
          )
      }
    </View>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'space-between'
  },
  button: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center'
  },
  buttonRadius: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRadiusInside: {
    width: 60,
    height: 60,
    bottom: 0,
    borderRadius: 40,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRadiusInside2: {
    width: 50,
    height: 50,
    bottom: 0,
    borderRadius: 30,
    backgroundColor: '#fff'
  }
})
