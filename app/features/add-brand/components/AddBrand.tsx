import {StyleSheet, View, Dimensions, ActivityIndicator} from 'react-native';
import React from 'react';
import CustomBackButton from 'components/common/custom-back/CustomBackButton';
import Text from 'components/common/text/Text';
import Input from 'components/common/input/Input';
import {metrics} from 'theme/metrics';
import Button from 'components/common/button/Button';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import {__} from 'language/stringPicker';
import {useStateValue} from 'services/auth/hooks';
import {colors} from 'theme/colors';
import {getBrand, storeBrand, storeData} from 'storage/asyncStore';
import getRandomNumber from 'utils/randomNumber';
import Feather from 'react-native-vector-icons/Feather';

interface AddBrandProps {
  onCloseSheet: () => void;
}

const AddBrand = ({onCloseSheet}: AddBrandProps) => {
  const [{appSettings}] = useStateValue();

  //handling form
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting, isSubmitSuccessful},
  } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        imageLink: yup
          .string()
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!',
          )
          .required('Please enter website'),
        collectionName: yup.string().min(4).required('Name is required'),
        description: yup.string().min(10).required('Description is required'),
      }),
    ),
  });

  const onSubmit = async (data: {
    imageLink: string;
    collectionName: string;
    description: string;
  }): Promise<void> => {
    try {
      const finalData = {
        ...data,
        follower: getRandomNumber(50, 999),
        isFollowed: false,
        isDeleted: false,
      };

      storeBrandStorage(finalData);
    } catch (e) {
      console.log(e);
    }
  };

  const storeBrandStorage = async (value: any) => {
    let medicineArray = [];
    try {
      let storedMedicine = await getBrand();
      console.log('printing before storing', storedMedicine);
      if (storedMedicine !== null) {
        medicineArray = storedMedicine; // you could do some additional checks to make sure it is an array
      }
      medicineArray.push(value);
      storeBrand(medicineArray);
      showMessage({
        message: 'Brand Added',
        type: 'success',
      });
      reset();
      onCloseSheet();
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };
  const plusIcon = (<Feather name="plus" size={15} color={colors.white} />)

  return (
    <View>
      <CustomBackButton isBottomSheet onCloseSheet={onCloseSheet} />
      <View style={styles.container}>
        <Text preset="SemiBoldLg">
          {__('addBrand.caption', appSettings.lng)}
        </Text>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="imageLink"
            defaultValue=""
            render={({field: {onChange}}) => {
              return (
                <>
                  <Input
                    placeholder={__(
                      'addBrand.addBrandForm.imageHolder',
                      appSettings.lng,
                    )}
                    onChangeText={onChange}
                    customStyles={{
                      borderRadius: metrics.spacing.sm,
                    }}
                  />
                  {errors.imageLink && (
                    <Text
                      preset="MediumSm"
                      customStyles={{
                        color: colors.red,
                        marginTop: -metrics.spacing.m,
                        marginBottom: metrics.spacing.m,
                        paddingBottom: metrics.spacing.xs,
                      }}>
                      {errors.imageLink.message}
                    </Text>
                  )}
                </>
              );
            }}
          />

          <Controller
            control={control}
            name="collectionName"
            defaultValue=""
            render={({field: {onChange}}) => {
              return (
                <>
                  <Input
                    placeholder={__(
                      'addBrand.addBrandForm.collectionHolder',
                      appSettings.lng,
                    )}
                    onChangeText={onChange}
                    customStyles={{
                      borderRadius: metrics.spacing.sm,
                    }}
                  />
                  {errors.collectionName && (
                    <Text
                      preset="MediumSm"
                      customStyles={{
                        color: colors.red,
                        marginTop: -metrics.spacing.m,
                        marginBottom: metrics.spacing.m,
                        paddingBottom: metrics.spacing.xs,
                      }}>
                      {errors.collectionName.message}
                    </Text>
                  )}
                </>
              );
            }}
          />

          <Controller
            control={control}
            name="description"
            defaultValue=""
            render={({field: {onChange}}) => {
              return (
                <>
                  <Input
                    placeholder={__(
                      'addBrand.addBrandForm.desHolder',
                      appSettings.lng,
                    )}
                    multiline
                    onChangeText={onChange}
                    customStyles={{
                      borderRadius: metrics.spacing.sm,
                    }}
                  />
                  {errors.description && (
                    <Text
                      preset="MediumSm"
                      customStyles={{
                        color: colors.red,
                        marginTop: -metrics.spacing.m,
                        marginBottom: metrics.spacing.m,
                        paddingBottom: metrics.spacing.xs,
                      }}>
                      {errors.description.message}
                    </Text>
                  )}
                </>
              );
            }}
          />

          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button
              onPress={handleSubmit(onSubmit)}
              title={__(
                'addBrand.addBrandForm.submit',
                appSettings.lng,
              )}
              icon={plusIcon}
              smallTitle
              customStyles={{
                paddingHorizontal: metrics.spacing.l,
                paddingVertical: metrics.spacing.sm,
                backgroundColor: colors.black
              }}
            />
          )}
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
