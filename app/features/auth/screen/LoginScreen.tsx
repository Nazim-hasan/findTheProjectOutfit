import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
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

import {KeyboardAvoidingView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {showMessage} from 'react-native-flash-message';

const height = Dimensions.get('window').height;

const LoginScreen = () => {
  const [{appSettings}] = useStateValue();
  const envelopeIcon = (
    <FontAwesome name="envelope" size={20} color={colors.gray} />
  );
  const lockIcon = <FontAwesome name="lock" size={20} color={colors.gray} />;
  const eyeOpenIcon = <Ionicons name="ios-eye" size={20} color={colors.gray} />;
  const eyeCloseIcon = (
    <Ionicons name="ios-eye-off" size={20} color={colors.gray} />
  );
  //UI state
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const {handleLogin} = useAuthFunction();

  //handling form
  const {
    control,
    handleSubmit,
    reset,

    formState: {errors, isSubmitting},
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required('Email is required').email('Bad email'),
        password: yup.string().min(4).required('Password is required'),
      }),
    ),
  });

  const onSubmit = async (data: {
    email: string;
    password: string;
  }): Promise<void> => {
    const {email, password} = data;
    try {
      showMessage({
        message: 'Login Success',
        type: 'success',
      });
      handleLogin(email);
      reset();
    } catch (e) {
      if (e) {
        Alert.alert('Invalid Credentials');
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <AuthScreenContainer
        customStyles={{flex: 1, paddingHorizontal: metrics.spacing.m}}>
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
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({field: {onChange}}) => {
                return (
                  <>
                    <Input
                      placeholder={__(
                        'loginScreen.loginForm.emailHolder',
                        appSettings.lng,
                      )}
                      onChangeText={onChange}
                      leftIcon={envelopeIcon}
                      customStyles={{
                        borderRadius: metrics.spacing.s,
                      }}
                    />
                    {errors.email && (
                      <Text
                        preset="MediumSm"
                        customStyles={{
                          color: colors.red,
                          marginTop: -metrics.spacing.m,
                          marginBottom: metrics.spacing.m,
                          paddingBottom: metrics.spacing.xs,
                        }}>
                        {errors.email.message}
                      </Text>
                    )}
                  </>
                );
              }}
            />

            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({field: {onChange}}) => {
                return (
                  <>
                    <Input
                      placeholder={__(
                        'loginScreen.loginForm.passHolder',
                        appSettings.lng,
                      )}
                      onChangeText={onChange}
                      leftIcon={lockIcon}
                      customStyles={{
                        borderRadius: metrics.spacing.s,
                      }}
                      rightIcon={showPassword ? eyeCloseIcon : eyeOpenIcon}
                      setShowPassword={setShowPassword}
                      secureTextEntry={showPassword}
                    />
                    {errors.password && (
                      <Text preset="MediumSm" customStyles={styles.warningText}>
                        {errors.password.message}
                      </Text>
                    )}
                  </>
                );
              }}
            />

            {isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <Button onPress={handleSubmit(onSubmit)} title="Log In" />
            )}
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
          <View style={styles.alterLoginCaptionContainer}>
            <Divider customStyle={{width: 80}} />
            <Text>{__('loginScreen.loginAlterCaption', appSettings.lng)}</Text>
            <Divider customStyle={{width: 80}} />
          </View>
          <View style={styles.alterLoginContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <SvgLoader size={23} component={googleSVG} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <SvgLoader size={30} component={facebookSVG} />
            </TouchableOpacity>
          </View>
        </View>
      </AuthScreenContainer>
    </View>
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
  warningText: {
    color: colors.red,
    marginTop: -metrics.spacing.m,
    marginBottom: metrics.spacing.m,
    paddingBottom: metrics.spacing.xs,
  },
  alterLoginCaptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.spacing.xl,
  },
  alterLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.spacing.m,
  },
  socialButton: {
    flex: 1,
    borderWidth: 0.2,
    borderRadius: metrics.spacing.s,
    borderColor: colors.darkGray,
    paddingHorizontal: metrics.spacing.l,
    marginHorizontal: metrics.spacing.m,
    paddingVertical: metrics.spacing.s,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
