import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import Text from 'components/common/text/Text';
import {metrics} from 'theme/metrics';
import {__} from 'language/stringPicker';
import {useStateValue} from 'services/auth/hooks';

const NotificationScreen = () => {
  const [{appSettings}] = useStateValue();
  return (
    <View style={styles.container}>
      <Text preset="MediumSm" customStyles={styles.text}>
        {__('notificationScr.content', appSettings.lng)}
      </Text>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.spacing.m,
  },
  text: {
    color: colors.gray,
    textAlign: 'center',
  },
});
