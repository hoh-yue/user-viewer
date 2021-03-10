import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './app/store';
import UserList from './app/user-list/UserList';
import UserDetails from './app/user-details/UserDetails';
import { navigationRef } from './app/rootNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
              <Stack.Screen name="UserList" component={UserList} />
              <Stack.Screen name="UserDetails" component={UserDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    </>
  );
};

export default App;
