/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import configureStore from './src/store/configureStore';
import Home from './src/components/Home';

const store = configureStore();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = 'Home' component = {Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
