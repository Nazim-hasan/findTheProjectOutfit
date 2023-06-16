import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import React, {useCallback} from 'react';
import Text from 'components/common/text/Text';
import BrandCard from './BrandCard';
import {metrics} from 'theme/metrics';
import {colors} from 'theme/colors';
import Brand from 'models/brand';
import SvgLoader from 'components/common/SvgLoader';
import emptySVG from 'assets/images/svg/emptySVG';
const NUM_COLUM = 2;

const height = Dimensions.get('window').height;

const BrandList: React.FC<{data: Brand[]}> = ({data}) => {
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
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SvgLoader component={emptySVG} size={100} />
        <Text preset="MediumSm" customStyles={{color: colors.gray}}>
          No brand to show
        </Text>
      </View>
    );
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
