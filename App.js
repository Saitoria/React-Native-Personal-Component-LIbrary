import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import Login1 from './app/screens/LoginScreens/Login1';
import Signup from './app/screens/SignupScreens/Signup1';
import Home from './app/screens/HomeScreens/Home1';
import Description from './app/screens/DescriptionScreens/Description1';

export default function App()
{
  return(
   //<Login1/>
    //<Signup/>
    <Home/>
    //<Description/>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
  }
});