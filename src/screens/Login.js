import { View, Text, Button } from 'react-native'
import React from 'react'

export default Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",  }}>
            <Text style={{ fontSize: 30, }}> LogIn Screen</Text>
            <View style={{ marginTop: 30 }}>
                <Button title='Login' onPress={() => props.navigation.navigate('Dashboard')} />
            </View>
        </View>
  )
}

