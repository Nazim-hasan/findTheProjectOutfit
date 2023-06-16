import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Text from '../text/Text';
import {colors} from 'theme/colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomBottomSheet, {
  BottomSheetForwardRefType,
} from '../custom-bottom-sheet/CustomBottomSheet';
import AddBrand from 'features/add-brand/components/AddBrand';
import {navigate} from 'navigation/helpers';
import { metrics } from 'theme/metrics';
const {width: wWidth} = Dimensions.get('window');
const CustomHeader = ({title = '', headerTransparent = false}) => {
  const route = useRoute();
  const currentScreenName = route.name;
  const customSheetRef = useRef<BottomSheetForwardRefType>(null);

  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);

  const handleNavigation = (type: string) => {
    switch (type) {
      case 'notification':
        return navigate('NotificationScreen');
  
      case 'profile':
        return navigate('ProfileScreen');
  
      default:
        return;
    }
  };

  const onCloseSheet = () => {
    customSheetRef?.current?.closeSheet();
  };
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 6}}>
          <Text preset="heading">EXPLORE</Text>
        </View>
        {currentScreenName === 'Deleted List' ? (
          <Pressable
            onPress={()=> {handleNavigation('notification')}}
            style={{flex: 1, alignItems: 'flex-end'}}>
            <Ionicons
              name="notifications-outline"
              size={30}
              color={colors.darkGray}
            />
          </Pressable>
        ) : (
          <View style={{flex: 2}}>
            <View style={{flexDirection: 'row',}}>
            
            <Pressable
              onPress={handlePresentModalPress}
              style={{flex: 1, alignItems: 'flex-end', marginRight: 1}}>
              <Feather name="plus" size={30} color={colors.darkGray} />
            </Pressable>
            <Pressable
              onPress={()=> {handleNavigation('profile')}}
              style={{flex: 1, alignItems: 'flex-end', }}>
              <Ionicons
              name="person-circle-outline"
              size={30}
              color={colors.darkGray}
            />
            </Pressable>
            </View>
          </View>
        )}
      </View>
      <CustomBottomSheet ref={customSheetRef}>
        <AddBrand onCloseSheet={onCloseSheet} />
      </CustomBottomSheet>

      

      {/* <View style={styles.headerBox}>
        <View style={styles.backArrow}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              hitSlop={{ top: 7, bottom: 7, left: 12, right: 12 }}
            >
               <FontAwesome
                name="chevron-left"
                size={16}
                color={colors.black}
              /> 
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerTitleParent}>
          <View>
            <Text>
              {title}
            </Text>
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
    // height: wWidth * 0.25,
  },
  // headerContainerAndroid: {
  //   height: wWidth ,
  //   opacity: 1
  // },
  // headerBox: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   position: "relative"
  // },
  // headerTitleParent: {
  //   flex: 1,
  //   position: "absolute",
  //   left: 0,
  //   right: 0
  // },
  // backArrow: {
  //   backgroundColor: "#fff",
  //   paddingHorizontal: 12,
  //   paddingVertical: 7,
  //   margin: 5,
  //   borderRadius: 10,
  //   flex: 0,
  //   zIndex: 3, // works on ios
  //   elevation: 3 // works on android
  // }
});
