import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Views
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ForgotPasswordView from './views/ForgotPasswordView';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordView}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          options={{
            title: 'TRANSLATE',
            headerStyle: {
              elevation: 0,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'normal',
              color: '#536DFE',
            },
          }}
          component={HomeView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
