import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import { SafeAreaProvider } from 'react-native-safe-area-context';

type ComponentProps = {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
};

const AuthScreenContainer = ({ children,customStyles }: ComponentProps) => {
  return (
    <SafeAreaProvider style={[styles.container, customStyles]}>
      {children}
    </SafeAreaProvider>
  )
}

export default AuthScreenContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  }
})