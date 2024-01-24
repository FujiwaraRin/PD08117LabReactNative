import React from 'react';
import {Text} from 'react-native';
import MyLab3 from './src/screen/Lab3';
import Login from './src/asm1/Login/login';
import Signup from './src/asm11/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='sign in' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;