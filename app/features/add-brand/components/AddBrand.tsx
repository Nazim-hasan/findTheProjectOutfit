import {StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomBackButton from 'components/common/custom-back/CustomBackButton';
import Text from 'components/common/text/Text';
import Input from 'components/common/input/Input';
import {metrics} from 'theme/metrics';
import Button from 'components/common/button/Button';

interface AddBrandProps {
  onCloseSheet: () => void;
}

const AddBrand = ({onCloseSheet}: AddBrandProps) => {
  const [link, setLink] = useState('');

  return (
    <View>
      <CustomBackButton isBottomSheet onCloseSheet={onCloseSheet} />
      <View style={styles.container}>
        <Text preset="SemiBoldLg">Create New Collection</Text>
        <View style={styles.formContainer}>
          <Input
            placeholder={'Image Link'}
            onChangeText={text => {
              setLink(text);
            }}
            customStyles={{
              borderRadius: metrics.spacing.sm,
            }}
          />
          <Input
            placeholder={'Collection Name'}
            onChangeText={text => {
              setLink(text);
            }}
            customStyles={{
              borderRadius: metrics.spacing.sm,
            }}
          />
          <Input
            placeholder={'Description'}
            onChangeText={text => {
              setLink(text);
            }}
            customStyles={{
              borderRadius: metrics.spacing.sm,
            }}
          />
          <Button
            customStyles={{
              paddingHorizontal: metrics.spacing.l,
              paddingVertical: metrics.spacing.xs,
            }}
            title="Follow"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default AddBrand;

const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.spacing.s,
  },
  formContainer: {
    marginVertical: metrics.spacing.sm,
  },
});
