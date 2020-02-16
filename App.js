import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppContainer from './navigation/Navigator'
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'lemonada': require('./assets/fonts/Lemonada-VariableFont_wght.ttf'),
    'merriweather-bold': require('./assets/fonts/Merriweather-Bold.ttf'),
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'merriweather-italic': require('./assets/fonts/Merriweather-Italic.ttf'),
  });
}

const App = () => {

  const [loaded, setLoaded] = useState(false)
  if(!loaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setLoaded(true)}/>
  }

  return(

    <AppContainer />

  ) 
}

export default App