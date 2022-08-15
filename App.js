import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import Login1 from './app/screens/LoginScreens/Login1';
import Signup from './app/screens/SignupScreens/Signup';

export default function App()
{
  return(
   //<Login1/>
    <Signup/>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
  }
});