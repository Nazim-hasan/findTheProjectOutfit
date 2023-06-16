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
import { __ } from 'language/stringPicker';
import { useStateValue } from 'services/auth/hooks';
import Button from 'components/common/button/Button';

const HomeScreen = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [{appSettings, refresh}] = useStateValue();

  useEffect
  useEffect(()=> {
    getItem();
  },[refresh])
  const getItem = async  ()=> {
    const value = await getBrand()
    if(value){
      setBrands(filterBrand(value, false))
    }
  }
  return (
    <Container>
      <CustomSearchBox />
      <View style={styles.brandListContainer}>
      <Text >{__(
            'homeScreen.title',
            appSettings.lng,
          )}</Text>
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
