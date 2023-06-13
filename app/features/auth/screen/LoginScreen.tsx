import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SVGLoader from '../../../components/common/SvgLoader'
import LogoSVG from '../../../../assets/images/svg/LogoSVG'

const LoginScreen = () => {
  return (
    <View>
      <Text style={styles.text}>LoginScreen</Text>
      <Text style={styles.text2}>LoginScreen</Text>
      <Text style={styles.text3}>LoginScreen</Text>
      <SVGLoader size={150} component={LogoSVG} />
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