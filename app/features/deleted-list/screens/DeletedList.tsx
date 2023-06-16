import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container} from 'layout';
import {metrics} from 'theme/metrics';
import Text from 'components/common/text/Text';
import BrandList from 'features/brand/components/BrandList';
import CustomSearchBox from 'components/common/custom-search-box/CustomSearchBox';
import { getBrand } from 'storage/asyncStore';
import filterBrand from 'utils/filterBrand';
import Brand from 'models/brand';
const DeletedList = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  useEffect(()=> {
    getItem();
  },[])
  const getItem = async  ()=> {
    const value = await getBrand()
    if(value){
      setBrands(filterBrand(value, true))
      console.log('filterBrand(value, false)', filterBrand(value, true))
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

export default DeletedList;

const styles = StyleSheet.create({
  brandListContainer: {
    flex: 8,
    paddingVertical: metrics.spacing.l,
    paddingHorizontal: metrics.spacing.m,
  },
});
