import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import MainNavigator from './src/navigation/MainNavigator';




export default App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  )
}

