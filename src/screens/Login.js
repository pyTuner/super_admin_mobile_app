import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Dimensions } from 'react-native'; // Import Dimensions
// import { CheckBox } from 'react-native-elements'; // Import CheckBox
import { useNavigation, useIsFocused } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
export default LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [incorrectInput, setIncorrectInput] = useState(false); // State to track incorrect inputs
  const isFocused = useIsFocused(); // Use useIsFocused hook to check if the screen is focused
  // Reset input fields when the screen is focused
  useEffect(() => {
    if (isFocused) {
      setEmail('');
      setPassword('');
      setIncorrectInput(false);
    }
  }, [isFocused]);
  // const handleLogin = async () => {
  //   try {
  //     const userCredential = await auth().signInWithEmailAndPassword(email, password);
  //     console.log('User signed in:', userCredential.user.email);
  //     // Navigate to the authenticated user's home screen or do other actions as needed.
  //   } catch (error) {
  //     console.error('Error signing in:', error.message);
  //     Alert.alert('Authentication Error', 'Invalid email or password. Please try again.');
  //   }
  // };
  const submit = () =>{
    if(email==='patu@gmail.com'&& password==='patu2611'){
      // Alert.alert(`Successfully Login`);
      setIncorrectInput(false); // Reset the incorrectInput state
      navigation.navigate("Dashboard");
    }else{
      // Alert.alert(`Add Correct Credentials !`)
      setIncorrectInput(true);
    }
  }
  // Get the screen width and height
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const buttonWidth = screenWidth * 0.7;
  // Calculate logo dimensions based on screen size
  const logoWidth = screenWidth * 0.5; // Adjust the factor as needed
  const logoHeight = screenHeight * 0.2; // Adjust the factor as needed
  const inputWidth = screenWidth * 0.8;
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ElliotLogin.png')} style={{ width: logoWidth, height: logoHeight }} resizeMode="contain" />
      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={[styles.input,{width: inputWidth},
          incorrectInput && { borderColor: 'red', color: 'red' }]}
        placeholder="Email Id"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={[styles.input,{width: inputWidth},
          incorrectInput && { borderColor: 'red', color: 'red' }]}
        placeholder="Password"
        secureTextEntry={!showPassword}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {/* <CheckBox
        title="Show Password"
        checked={showPassword}
        onPress={() => setShowPassword(!showPassword)}
      /> */}
      <Button title="Login" onPress={()=>submit()} color="#EF7F1A" style={{width: buttonWidth}}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 10, // Adjust the padding to make the input field taller
    borderWidth: 1,
    borderColor: '#000', // Customize the border color
    borderRadius: 4,
    backgroundColor: '#F5F5F5', // Customize the background color
    color: 'black', // Customize the text color
    width: '100%',
  },
  // checkboxContainer: {
  //   alignSelf: 'flex-start', // Adjust alignment as needed
  //   backgroundColor: 'transparent', // Adjust background color as needed
  //   borderWidth: 0, // Remove the border
  // },
  // checkboxText: {
  //   fontSize: 16, // Adjust text size as needed
  // },
});