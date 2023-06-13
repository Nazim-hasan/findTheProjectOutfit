import { StyleSheet, View } from 'react-native'
import React from 'react'
import { __ } from '../../../language/stringPicker'
import { useStateValue } from '../../../services/auth/hooks'
import LogoSVG from '../../../../assets/images/svg/LogoSVG'
import SvgLoader from 'components/common/SvgLoader'
import Text from 'components/common/text/Text'

const LoginScreen = () => {
  const [{appSettings}] = useStateValue();
  return (
    <View>
      <Text preset="heading">{__('loginScreen.title', appSettings.lng)}</Text>
      <Text preset='RegularXl'>LoginScreen</Text>
      <Text>LoginScreen</Text>
      <SvgLoader size={150} component={LogoSVG} />
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