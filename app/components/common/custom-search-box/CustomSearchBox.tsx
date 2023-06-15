import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from 'theme/colors';
import Input from '../input/Input';
import { metrics } from 'theme/metrics';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const searchIcon = (
  <FontAwesome5 name="search" size={20} color={colors.gray} />
);

const CustomSearchBox = () => {
  const [title, setTitle] = useState('');
  return (
    <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          paddingHorizontal: metrics.spacing.m,
        }}>
        <Input
          placeholder={'Search here...'}
          onChangeText={text => {
            setTitle(text);
          }}
          leftIcon={searchIcon}
          customStyles={{
            borderRadius: metrics.spacing.s,
          }}
        />
      </View>
  )
}

export default CustomSearchBox

const styles = StyleSheet.create({})