import {View, Dimensions} from 'react-native';
import React from 'react';
import {colors} from 'theme/colors';
import {metrics} from 'theme/metrics';

export default function Divider({customStyle = {}}) {
  const {width} = Dimensions.get('window');
  return (
    <View
      style={[
        {
          backgroundColor: colors.gray,
          height: 0.5,
          width: width - metrics.spacing.xxl,
          alignSelf: 'center',
        },
        customStyle,
      ]}
    />
  );
}
