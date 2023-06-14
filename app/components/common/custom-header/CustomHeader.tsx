import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Text from "../text/Text";
import { colors } from "theme/colors";
import Feather from 'react-native-vector-icons/Feather';
const { width: wWidth } = Dimensions.get("window");
const CustomHeader = ({ title = "",  headerTransparent = false  }) => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: "row", alignItems: 'center'}}>
        <View style={{flex: 6}}>
          <Text preset="heading">EXPLORE</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Feather
              name="plus"
              size={30}
              color={colors.darkGray }
            />
        </View>
      </View>

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
  )
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white
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
