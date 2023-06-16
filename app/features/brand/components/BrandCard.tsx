import {StyleSheet, Image, View, Pressable} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {metrics} from 'theme/metrics';
import {colors} from 'theme/colors';
import Text from 'components/common/text/Text';
import Button from 'components/common/button/Button';
import CustomBottomSheet, {
  BottomSheetForwardRefType,
} from 'components/common/custom-bottom-sheet/CustomBottomSheet';
import BrandDetails from 'features/details-brand/components/BrandDetails';
import {__} from 'language/stringPicker';
import {useStateValue} from 'services/auth/hooks';
import {toggleFollowBrand} from 'utils/updateBrandInfo';
import {getBrand, storeBrand} from 'storage/asyncStore';

const BrandCard = ({item}) => {
  const [{appSettings, refresh}, dispatch] = useStateValue();
  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);
  const onCloseSheet = () => {
    customSheetRef?.current?.closeSheet();
  };

  const handleToggleFollow = async () => {
    const brands = await getBrand();
    storeBrand(toggleFollowBrand(brands, item.id));
    dispatch({
      type: "SET_REFRESH",
      refresh: !refresh
    })
  };

  return (
    <Pressable onPress={handlePresentModalPress} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        {item?.imageLink && (
          <Image source={{uri: item?.imageLink}} style={styles.imageFrame} />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text preset="SemiBoldLg">{item?.collectionName}</Text>
        <Text preset="MediumSm" customStyles={{color: colors.gray}}>
          {item.follower}
          {__('brandCard.follow', appSettings.lng)}
        </Text>
      </View>
      <View style={{marginTop: metrics.spacing.m}}>
        <Button
          customStyles={{
            paddingHorizontal: metrics.spacing.l,
            paddingVertical: metrics.spacing.xs,
            backgroundColor: !item.isFollowed
              ? colors.primary
              : colors.secondary,
          }}
          inactiveText={item.isFollowed}
          title={
            item.isFollowed
              ? __('brandCard.followBtnActive', appSettings.lng)
              : __('brandCard.followBtnInactive', appSettings.lng)
          }
          onPress={handleToggleFollow}
        />
      </View>
      <CustomBottomSheet ref={customSheetRef}>
        <BrandDetails onCloseSheet={onCloseSheet} brand={item} />
      </CustomBottomSheet>
    </Pressable>
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
  imageFrame: {
    height: 95,
    width: 95,
    borderRadius: 95 / 2,
  },
});
