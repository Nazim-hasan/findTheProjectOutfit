import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Container} from 'layout';
import {colors} from 'theme/colors';
import SvgLoader from 'components/common/SvgLoader';
import personSVG from 'assets/images/svg/personSVG';
import Text from 'components/common/text/Text';
import {metrics} from 'theme/metrics';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAuthFunction} from 'services/auth/hooks';

const ProfileScreen = () => {
  const {handleLogout} = useAuthFunction();
  return (
    <Container
      customStyles={{
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: metrics.spacing.m,
      }}>
      <View style={{flex: 3}}>
        <View
          style={{
            flex: 1,
            marginTop: metrics.spacing.xxl,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SvgLoader component={personSVG} size={95} />
          <Text
            preset="SemiBoldBody"
            customStyles={{marginTop: metrics.spacing.sm}}>
            Bruce Wayne
          </Text>
          <View
            style={{
              backgroundColor: colors.lightGrey,
              paddingHorizontal: metrics.spacing.s,
              marginVertical: metrics.spacing.xs,
              borderRadius: metrics.spacing.xs,
            }}>
            <Text
              preset="MediumSm"
              customStyles={{
                fontSize: 9,
                color: colors.gray,
                textTransform: 'uppercase',
              }}>
              User
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text preset="SemiBoldBody">48</Text>
          <Text preset="MediumSm" customStyles={styles.textLabel}>
            Followers
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text preset="SemiBoldBody">572</Text>
          <Text preset="MediumSm" customStyles={styles.textLabel}>
            Following
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text preset="SemiBoldBody">35</Text>
          <Text preset="MediumSm" customStyles={styles.textLabel}>
            Saves
          </Text>
        </View>
      </View>
      <View style={{flex: 6, alignItems: 'center'}}>
        <Text preset="MediumSm" customStyles={styles.textLabel} centered>
          Lorem ipsum dolor sit amet, consectetur elit. In augue semper arcu
          enim viverra sit ipsum. Lorem ipsum dolor sit amet consectetur elit.
        </Text>
        <Pressable
          onPress={handleLogout}
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: metrics.spacing.s,
          }}>
          <View
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <MaterialIcons name="logout" size={25} color={colors.darkGray} />
            <Text
              preset="MediumSm"
              customStyles={{
                color: colors.gray,
                marginLeft: metrics.spacing.s,
              }}>
              Logout
            </Text>
          </View>
        </Pressable>
      </View>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  textLabel: {
    color: colors.gray,
  },
});
