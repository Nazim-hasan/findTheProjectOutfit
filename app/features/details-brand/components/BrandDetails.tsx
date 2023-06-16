import {StyleSheet, View, ActivityIndicator} from 'react-native';
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
import {getBrand, storeBrand} from 'storage/asyncStore';
import getRandomNumber from 'utils/randomNumber';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Brand from 'models/brand';

interface AddBrandProps {
  onCloseSheet: () => void;
  brand: Brand
}

const BrandDetails = ({onCloseSheet, brand}: AddBrandProps) => {
  console.log('single brand', brand)
  const [{appSettings}] = useStateValue();

  //handling form
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
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
        id: getRandomNumber(1, 999),
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
  const editIcon = <FontAwesome name="edit" size={15} color={colors.white} style={{marginRight: metrics.spacing.s}}/>;
  const deleteIcon = <Feather name="trash-2" size={20} color={colors.white} style={{marginRight: metrics.spacing.s}}/>;

  return (
    <View>
      <CustomBackButton isBottomSheet onCloseSheet={onCloseSheet} />
      <View style={styles.container}>
        <Text preset="SemiBoldLg">
          {__('detailsBrand.caption', appSettings.lng)}
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
                      'detailsBrand.detailsForm.imageHolder',
                      appSettings.lng,
                    )}
                    defaultValue={brand.imageLink}
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
                      'detailsBrand.detailsForm.collectionHolder',
                      appSettings.lng,
                    )}
                    defaultValue={brand.collectionName}
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
                      'detailsBrand.detailsForm.desHolder',
                      appSettings.lng,
                    )}
                    defaultValue={brand.description}
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
              onPress={handleSubmit(onSubmit)}
              title={__('detailsBrand.detailsForm.submit', appSettings.lng)}
              icon={editIcon}
              smallTitle
              customStyles={{
                paddingHorizontal: metrics.spacing.sm,
                paddingVertical: metrics.spacing.s,
                backgroundColor: colors.black,
              }}
            />
              <Button
              onPress={handleSubmit(onSubmit)}
              title={__('detailsBrand.delete', appSettings.lng)}
              icon={deleteIcon}
              smallTitle
              customStyles={{
                paddingHorizontal: metrics.spacing.sm,
                paddingVertical: metrics.spacing.s,
                backgroundColor: colors.red,
              }}
            />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default BrandDetails;

const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.spacing.s,
  },
  formContainer: {
    marginVertical: metrics.spacing.sm,
  },
});
