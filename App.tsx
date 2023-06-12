import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './app/navigation/Navigator';
import {navigationRef} from './app/navigation/helpers';
import AppScreen from './app/components/AppScreen';
import {StateProvider} from './app/services/auth/contexts';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StateProvider>
        <AppScreen>
          <Navigation />
        </AppScreen>
      </StateProvider>
    </NavigationContainer>
  );
}

export default App;
