import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase'

import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';



import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
{/*import LoginScreen from './components/auth/Login' */}


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL20cadmVpYx7kaDWiTg3emCikk-Hkw5c",
  authDomain: "instagram-freecodecamp.firebaseapp.com",
  projectId: "instagram-freecodecamp",
  storageBucket: "instagram-freecodecamp.appspot.com",
  messagingSenderId: "398552483615",
  appId: "1:398552483615:web:9ac10c3b7405eb0450122a",
  measurementId: "G-QZE6P0QGHP"
};

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}

const Stack=createStackNavigator()








export class App extends Component {


constructor(props){
  super(props);

  this.state={
    loaded:false,

  }
}

componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
      this.setState({
        loggedIn:false,
        loaded:true,
      })
    }else{
      this.setState({
        loggedIn:true,
        loaded:true,
      })
    }


  })
}

  render() {

      const {loggedIn,loaded}=this.state
    if(!loaded){
      return (
        <View style={{flex:1,justifyContent:"center"}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn){

      return (
  
  
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing" >
  <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:true}} ></Stack.Screen>
  <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:true}} ></Stack.Screen>
  
          </Stack.Navigator>
        </NavigationContainer>
  
  
      )
    }

    return (
    <View style={{flex:1,justifyContent:"center"}}>
    <Text>User is logged in </Text>
  </View>
  )
  }
}

export default App










