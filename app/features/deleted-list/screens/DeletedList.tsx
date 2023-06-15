import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Container} from 'layout';
import {colors} from 'theme/colors';
import Input from 'components/common/input/Input';
import {metrics} from 'theme/metrics';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Text from 'components/common/text/Text';
import BrandList from 'features/brand/components/BrandList';
import CustomSearchBox from 'components/common/custom-search-box/CustomSearchBox';
const DeletedList = () => {
  const [title, setTitle] = useState('');
  const searchIcon = (
    <FontAwesome5 name="search" size={20} color={colors.gray} />
  );

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

export default DeletedList;

const styles = StyleSheet.create({
  brandListContainer: {
    flex: 8,
    paddingVertical: metrics.spacing.l,
    paddingHorizontal: metrics.spacing.m,
  },
});
