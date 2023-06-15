import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {__} from '../../../language/stringPicker';
import {useAuthFunction, useStateValue} from '../../../services/auth/hooks';
import LogoSVG from 'assets/images/svg/LogoSVG';
import SvgLoader from 'components/common/SvgLoader';
import AuthScreenContainer from '../components/AuthScreenContainer';
import Text from 'components/common/text/Text';
import Input from 'components/common/input/Input';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'theme/colors';
import {metrics} from 'theme/metrics';
import Button from 'components/common/button/Button';
import Divider from 'components/common/divider/Divider';
import facebookSVG from 'assets/images/svg/facebookSVG';
import googleSVG from 'assets/images/svg/googleSVG';
import {storeData} from 'storage/asyncStore';
import {KeyboardAvoidingView} from 'react-native';

const height = Dimensions.get('window').height;

const LoginScreen = () => {
  const [title, setTitle] = useState('');
  const envelopeIcon = (
    <FontAwesome name="envelope" size={20} color={colors.gray} />
  );
  const lockIcon = <FontAwesome name="lock" size={20} color={colors.gray} />;
  const eyeOpenIcon = <Ionicons name="ios-eye" size={20} color={colors.gray} />;
  const eyeCloseIcon = (
    <Ionicons name="ios-eye-off" size={20} color={colors.gray} />
  );
  const [{user}, dispatch] = useStateValue();

  //UI state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {handleLogin} = useAuthFunction();

  const handlePressLogin = () => {
    handleLogin('email')
  };

  const [{appSettings}] = useStateValue();
  return (
    <AuthScreenContainer customStyles={{paddingHorizontal: metrics.spacing.m}}>
      <View style={styles.logoContainer}>
        <SvgLoader height={36} width={70} component={LogoSVG} />
      </View>
      <View style={styles.mainContainer}>
        <Text preset="heading" centered customStyles={styles.welcomeText}>
          {__('loginScreen.welcome', appSettings.lng)}
        </Text>
        <KeyboardAvoidingView
          keyboardVerticalOffset={height + 47}
          behavior="padding"
          enabled
          style={{marginTop: metrics.spacing.m}}>
          <Input
            placeholder={__('loginScreen.loginForm.emailHolder', appSettings.lng)}
            onChangeText={text => {
              setTitle(text);
            }}
            leftIcon={envelopeIcon}
            customStyles={{
              borderRadius: metrics.spacing.s,
            }}
          />
          <Input
            placeholder={__('loginScreen.loginForm.passHolder', appSettings.lng)}
            onChangeText={text => {
              setTitle(text);
            }}
            leftIcon={lockIcon}
            customStyles={{
              borderRadius: metrics.spacing.s,
            }}
            rightIcon={showPassword ? eyeCloseIcon : eyeOpenIcon}
            setShowPassword={setShowPassword}
            secureTextEntry={showPassword}
          />
          <Button customStyles={{}} title="Log In" onPress={handlePressLogin} />
        </KeyboardAvoidingView>
        <View style={{marginVertical: metrics.spacing.l}}>
          <Text
            centered
            preset="SemiBoldBody"
            customStyles={{color: colors.primary}}>
            {__('loginScreen.forgetPass', appSettings.lng)}
          </Text>
          <Divider
            customStyle={{
              backgroundColor: colors.primary,
              height: 0.7,
              width: 120,
            }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: metrics.spacing.xl,
          }}>
          <Divider customStyle={{width: 80}} />
          <Text>{__('loginScreen.loginAlterCaption', appSettings.lng)}</Text>
          <Divider customStyle={{width: 80}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: metrics.spacing.m,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 0.2,
              borderRadius: metrics.spacing.s,
              borderColor: colors.darkGray,
              paddingHorizontal: metrics.spacing.l,
              marginHorizontal: metrics.spacing.m,
              paddingVertical: metrics.spacing.s,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SvgLoader size={23} component={googleSVG} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 0.2,
              borderRadius: metrics.spacing.s,
              borderColor: colors.darkGray,
              paddingHorizontal: metrics.spacing.l,
              marginHorizontal: metrics.spacing.m,
              paddingVertical: metrics.spacing.s,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SvgLoader size={30} component={facebookSVG} />
          </TouchableOpacity>
        </View>
      </View>
    </AuthScreenContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 2,
  },
  welcomeText: {},
  bottomContainer: {
    flex: 1,
  },
});
