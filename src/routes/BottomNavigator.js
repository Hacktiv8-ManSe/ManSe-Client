import React from "react"
import { Ionicons } from "@expo/vector-icons"
import {
  HomeScreen,
  ExploreScreen,
  ScanScreen,
  BMRScreen,
  ProfileScreen
} from '../screens'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack"
import { colors } from '../constants/colors'


const Tab = createBottomTabNavigator()
const MainStack = createStackNavigator()

const BottomNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colors.activeTintColor,
      style: {
        backgroundColor: colors.primaryColor,
        borderTopColor: "transparent",
        // marginBottom: 25,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Scan"
      component={ScanScreen}
      options={{
        tabBarLabel: "Scan",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-camera" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="BMR"
      component={BMRScreen}
      options={{
        tabBarLabel: "BMR",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-calculator" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default () => (
  <NavigationContainer>
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="App" component={BottomNavigator} />
    </MainStack.Navigator>
  </NavigationContainer>
)