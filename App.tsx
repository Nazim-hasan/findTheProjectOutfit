import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './app/navigation/Navigator';
import {navigationRef} from './app/navigation/helpers';
import AppScreen from './app/components/AppScreen';
import {StateProvider} from './app/services/auth/contexts';
// import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StateProvider>
        {/* <GestureHandlerRootView style={{flex: 1}}> */}
          <AppScreen>
            {/* <BottomSheetModalProvider> */}
              <Navigation />
            {/* </BottomSheetModalProvider> */}
          </AppScreen>
        {/* </GestureHandlerRootView> */}
      </StateProvider>
    </NavigationContainer>
  );
}

export default App;
