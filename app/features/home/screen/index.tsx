import {StyleSheet, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Container} from 'layout';
import CustomSearchBox from 'components/common/custom-search-box/CustomSearchBox';
import BrandList from 'features/brand/components/BrandList';
import Text from 'components/common/text/Text';
import { metrics } from 'theme/metrics';
import { getBrand } from 'storage/asyncStore';
import filterBrand from 'utils/filterBrand';
import Brand from 'models/brand';

const HomeScreen = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  useEffect(()=> {
    getItem();
  },[])
  const getItem = async  ()=> {
    const value = await getBrand()
    console.log('all brands from home',value)
    if(value){
      setBrands(filterBrand(value, false))
    }
  }
  return (
    <Container>
      <CustomSearchBox />
      <View style={styles.brandListContainer}>
        <Text preset="body">Top street-style brands</Text>
        <BrandList data={brands}/>
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
