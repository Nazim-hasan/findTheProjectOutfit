import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import Banner from './Banner';
import Blog from './Blog';
const {width: wWidth} = Dimensions.get('window');

const HomeScreenComponent = () => {
  return (
    <>
      <Banner />
      {/* <Header /> */}

      {/* Blog Section */}
      <Blog />
    </>
  );
};

export default HomeScreenComponent;
