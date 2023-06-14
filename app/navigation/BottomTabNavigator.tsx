import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from 'models/navigations';
import HomeScreen from 'features/home/screen';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from 'theme/colors';
import DeletedList from 'features/deleted-list/screens/DeletedList';
import CustomHeader from 'components/common/custom-header/CustomHeader';
import {__} from 'language/stringPicker';
import {useStateValue} from 'services/auth/hooks';

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const {Navigator, Screen} = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const [{appSettings}] = useStateValue();
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: colors.darkGray,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: props => (
            <CustomHeader
              title={__('routeNames.homeScr', appSettings.lng)}
              headerTransparent={true}
            />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="home"
              size={20}
              color={focused ? colors.darkGray : colors.gray}
            />
          ),
        }}
      />
      <Screen
        name="DeletedList"
        component={DeletedList}
        options={{
          header: props => (
            <CustomHeader
              title={__('routeNames.deletedList', appSettings.lng)}
              headerTransparent={true}
            />
          ),
          // headerShown: false,
          // tabBarLabel: 'Deleted List',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather name="trash-2" size={20} color={focused ? colors.darkGray : colors.gray} />
          ),
        }}
      />
    </Navigator>
  );
}
