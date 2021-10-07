import * as React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/home';
import Register from './component/register';
import Register2 from './component/register2';
import Register3 from './component/register3';
import Register4 from './component/register4';
import Datatable from './component/Datatable';
import Addinfo from './component/AddInfo';
import Callimage from './component/callimage';
import End from './component/End';

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
          name="End Page"
          component={End}
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

        <Stack.Screen
          name="Register Page2"
          component={Register2}
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
          name="Register Page3"
          component={Register3}
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
          name="Register Page4"
          component={Register4}
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
          name="Data Screen"
          component={Datatable}
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
          name="Addinfo Page"
          component={Addinfo}
          options={{
            title: 'เพิ่มวัตถุดิบ',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#F7F6F2',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              color: '#000000',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
