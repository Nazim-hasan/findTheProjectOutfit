import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import Text from 'components/common/text/Text';
import { metrics } from 'theme/metrics';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text preset="MediumSm" customStyles={styles.text}>
        Lorem ipsum dolor sit amet, consectetur elit. In augue semper arcu enim
        viverra sit ipsum. Lorem ipsum dolor sit amet consectetur elit.{' '}
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
    paddingHorizontal: metrics.spacing.m
  },
  text: {
    color: colors.gray,
    textAlign: 'center'
  },
});
