import {StyleSheet, FlatList, View} from 'react-native';
import React, {useCallback} from 'react';
import {defaultBrands} from 'features/deleted-list/data/brand.data';
import Text from 'components/common/text/Text';
import BrandCard from './BrandCard';
import {metrics} from 'theme/metrics';
import {colors} from 'theme/colors';
const NUM_COLUM = 2;
const BrandList = ({data}) => {
  const renderItem = useCallback(
    ({item}) =>
      item.empty ? (
        <View style={[styles.cardContainer, styles.itemInvisible]} />
      ) : (
        <BrandCard item={item} />
      ),
    [],
  );
  const ListEmptyComponent = () => {
    return <Text>I am empty</Text>;
  };
  const ItemSeparatorComponent = useCallback(
    () => <View style={{marginVertical: metrics.spacing.xs}} />,
    [],
  );

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data?.length / numColumns);

    let numberOfElementsLastRow = data?.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data?.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };

  return (
    <FlatList
      data={formatData(data, NUM_COLUM) || []}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index)}
      ItemSeparatorComponent={ItemSeparatorComponent}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={ListEmptyComponent}
      numColumns={NUM_COLUM}
      // refreshing={loading || isFetching}
      // onRefresh={onPageRefresh}
      // ListFooterComponent={listFooter}
    />
  );
};

export default BrandList;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginHorizontal: metrics.spacing.xs,
    borderRadius: metrics.spacing.s,
    paddingVertical: metrics.spacing.l,
  },
  listContainer: {
    paddingVertical: 15,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
