import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllAssets from '../screens/AllAssets';
import Companies from '../screens/Companies';
import AssetTypes from '../screens/AssetTypes';
import DeviceTypes from '../screens/DeviceTypes';
import Parameters from '../screens/Parameters';
import Registers from '../screens/Registers';
import GatewaysCall from '../screens/GatewaysCall';


export default DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName='All Assets'>
      <Drawer.Screen name="All Assets" component={AllAssets} />
      <Drawer.Screen name="Companies" component={Companies} />
      <Drawer.Screen name="Asset Types" component={AssetTypes} />
      <Drawer.Screen name="Device Types" component={DeviceTypes} />
      <Drawer.Screen name="Parameters" component={Parameters} />
      <Drawer.Screen name="Registers" component={Registers} />
      <Drawer.Screen name="Gateway Call" component={GatewaysCall} />
    </Drawer.Navigator>
  )
}

