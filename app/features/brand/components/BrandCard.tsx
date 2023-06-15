import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {metrics} from 'theme/metrics';
import {colors} from 'theme/colors';
import Text from 'components/common/text/Text';
import Button from 'components/common/button/Button';

const BrandCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={item?.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text preset="SemiBoldLg">{item?.name}</Text>
        <Text preset="MediumSm" customStyles={{color: colors.gray}}>
          {item.follower}K Followers
        </Text>
      </View>
      <View style={{marginTop: metrics.spacing.m}}>
      <Button
        customStyles={{
          paddingHorizontal: metrics.spacing.l,
          paddingVertical: metrics.spacing.xs,
        }}
        title="Follow"
        onPress={() => {}}
      />
      </View>
    </View>
  );
};

export default BrandCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: metrics.spacing.xs,
    borderRadius: metrics.spacing.s,
    paddingVertical: metrics.spacing.l,
  },
  imageContainer: {
    flex: 1,
    marginBottom: metrics.spacing.s,
    marginHorizontal: metrics.spacing.xl,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
