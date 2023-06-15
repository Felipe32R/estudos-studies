import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Components/LoginScreen';
import Pokemons from './Components/Pokemons';
import Details from './Components/Details';

const appNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
    },
    Lista: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

const AppContainer = createAppContainer(appNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
