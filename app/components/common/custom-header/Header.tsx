import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';

import Text from '../text/Text';
import {colors} from 'theme/colors';
import CustomBackButton from '../custom-back/CustomBackButton';

const Header = ({title = '', headerTransparent = false}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
          }}>
          <CustomBackButton customStyles={styles.backArrow} />
          <View
            style={{
              flex: 1,
              position: 'absolute',
              left: 0,
              right: 0,
            }}>
            <Text preset="MediumLg" centered>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
  },
  backArrow: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
});
