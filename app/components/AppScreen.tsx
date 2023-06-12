import React from "react";
import { Platform, StyleProp, ViewStyle, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar as AndroidStatusBar } from "expo-status-bar";
type ComponentProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const AppScreen = ({ children }: ComponentProps) => {
  return (
    <SafeAreaProvider>
      {/* {Platform.OS === "android" ? (
        <AndroidStatusBar style={"dark"} />
      ) : (
        <StatusBar barStyle={"dark-content"} />
      )} */}
      {/* <StatusBar barStyle={"dark-content"} /> */}
      {/* <AndroidStatusBar style={"dark"}/> */}
      {children}
    </SafeAreaProvider>
  );
};

export default AppScreen;
