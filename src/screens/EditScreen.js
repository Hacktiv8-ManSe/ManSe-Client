import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker'

function EditScreen() {

  const [ name, setName ] = useState('')
  const [ gender, setGender ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ height, setHeight ] = useState('')
  const [ weight, setWeight ] = useState('')
  const [ date, setDate ] = useState('')

  const [selectImg, setSelectedImg] = React.useState(null)
  let openImage = async () =>{
    let permission = await ImagePicker.requestCameraRollPermissionsAsync();


    if(permission.granted === false){
      return;
    }

    let picker = await ImagePicker.launchImageLibraryAsync()

    if(picker.cancelled ===true){
      return;
    }
    setSelectedImg({localUri:picker.uri})
    console.log(picker)
  }

  return (
  <View style={styles.container}>
    <View style={{alignItems: 'center'}}>
      <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
        Lisa
      </Text>
    </View>

    <View style={styles.action}>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput
        ]}
      />
    </View>
    <View style={styles.action}>
      <TextInput
        placeholder="Weight"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput
        ]}
      />
    </View>
    <View style={styles.action}>
      <TextInput
        placeholder="Height"
        placeholderTextColor="#666666"
        keyboardType="number-pad"
        autoCorrect={false}
        style={[
          styles.textInput
        ]}
      />
    </View>
    <View style={styles.action}>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput
        ]}
      />
    </View>
    <View style={styles.container}>
        {
          selectImg !== null ?  (
            <Image 
              style={styles.image} 
              source={{uri:(selectImg.localUri !== null) ? selectImg.localUri : 'https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'}} />
          ) : <Text>Kosong</Text>
        }
      <TouchableOpacity 
        onPress={openImage}
        style={styles.button}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.action}>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[
          styles.textInput
        ]}
      />
    </View>
    <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
      <Text style={styles.panelButtonTitle}>Submit</Text>
    </TouchableOpacity>
    </View>
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button:{
    borderRadius:10,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  image:{
    width:300,
    height:300,
    resizeMode:'contain'
  }
});