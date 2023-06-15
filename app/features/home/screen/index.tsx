import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Container} from 'layout';
import CustomSearchBox from 'components/common/custom-search-box/CustomSearchBox';
import BrandList from 'features/brand/components/BrandList';
import Text from 'components/common/text/Text';
import { metrics } from 'theme/metrics';

const HomeScreen = () => {
  return (
    <Container>
      <CustomSearchBox />
      <View style={styles.brandListContainer}>
        <Text preset="body">Top street-style brands</Text>
        <BrandList />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  brandListContainer: {
    flex: 8,
    paddingVertical: metrics.spacing.l,
    paddingHorizontal: metrics.spacing.m,
  },
});
