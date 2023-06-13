import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.text}>LoginScreen</Text>
      <Text style={styles.text2}>LoginScreen</Text>
      <Text style={styles.text3}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 60,
    fontFamily: 'Futura Bold Condensed BT'
  },
  text2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 60,
    fontFamily: 'Inter Regular'
  },
  text3: {
    textAlign: 'center',
    color: 'black',
    fontSize: 60,
    fontFamily: 'Inter SemiBold'
  }
})