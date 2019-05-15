import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';

const Navigation = createStackNavigator({
  HomeScreen
}, {
  initialRouteName: 'HomeScreen',
});

export default Navigation;