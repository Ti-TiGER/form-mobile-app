import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/home';
import Register from './component/register';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Page"
          component={Home}
          options={{
            title: 'รายงานผลการตรวจโรงงาน',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4B6587',
            },
            headerTintColor: '#F7F6F2',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }}
        />
        <Stack.Screen
          name="Register Page"
          component={Register}
          options={{
            title: 'รายงานผลการตรวจโรงงาน',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#4B6587',
            },
            headerTintColor: '#F7F6F2',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
