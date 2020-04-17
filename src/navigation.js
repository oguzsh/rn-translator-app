import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './utils/theme';

// Views
import HomeView from './views/HomeView';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
