import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import { SafeAreaProvider } from 'react-native-safe-area-context';

type ComponentProps = {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
};

const Container = ({ children,customStyles }: ComponentProps) => {
  return (
    <SafeAreaProvider style={[styles.container, customStyles]}>
      {children}
    </SafeAreaProvider>
  )
}

export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1
  }
})