import { Pressable, StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { useRef } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from 'theme/colors';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { BottomSheetForwardRefType } from '../custom-bottom-sheet/CustomBottomSheet';
import { navigate } from 'navigation/helpers';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
interface TextProps {
  customStyles?: TextStyle;
  isBottomSheet?: boolean;
  onCloseSheet?: () => void
}

const CustomBackButton = ({
  customStyles,
  isBottomSheet,
  onCloseSheet
}: TextProps) => {
  const navigation = useNavigation<any>();
  const handleBack = () => {
    console.log('click')
    if(isBottomSheet && onCloseSheet){
      onCloseSheet()
    }else{
      navigation.goBack();
    }
  }
  return (
    <Pressable style={customStyles} onPress={handleBack}>
      <Ionicons name="arrow-back" size={20} color={colors.darkGray} />
    </Pressable>
  )
}

export default CustomBackButton

const styles = StyleSheet.create({})