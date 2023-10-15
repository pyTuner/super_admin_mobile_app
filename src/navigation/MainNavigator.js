import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
// import Dashboard from '../screens/Dashboard';
import DrawerNavigator from './DrawerNavigator';


const Stack = createStackNavigator();

export default MainNavigator = () => {
    
  return (
    <Stack.Navigator>
        <Stack.Screen name= 'Login' component={Login} />
        <Stack.Screen name= 'Dashboard' component={DrawerNavigator}/>
    </Stack.Navigator>
  )
}

