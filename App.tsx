import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigation from './app/navigation/Navigator';
import {navigationRef} from './app/navigation/helpers';
import AppScreen from './app/components/AppScreen';
import {StateProvider} from './app/services/auth/contexts';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';

function App() {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <StateProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppScreen>
            <BottomSheetModalProvider>
              <Navigation theme={navTheme}/>
              <FlashMessage position="top" />
            </BottomSheetModalProvider>
          </AppScreen>
        </GestureHandlerRootView>
      </StateProvider>
    </NavigationContainer>
  );
}

export default App;
