import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import {
  LoginScreen,
  RegisterScreen
} from '../screens'
import { BottomNavigator } from './BottomNavigator'
import { NavigationContainer } from "@react-navigation/native"

const AuthStack = createStackNavigator()

export const AuthNavigator = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
)

export default () => (
  <NavigationContainer>
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Auth" component={AuthNavigator} />
      <AuthStack.Screen name="App" component={BottomNavigator} />
    </AuthStack.Navigator>
  </NavigationContainer>
)