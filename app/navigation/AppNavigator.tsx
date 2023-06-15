import React from "react";
// import { useStateValue } from "../services/auth/hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { __ } from "../language/stringPicker";
import { AppRootStackParamList } from "../models/navigations";
import HomeScreen from "../features/home/screen";
import BottomTabNavigator from "./BottomTabNavigator";
import NotificationScreen from "features/notifications/screens/NotificationScreen";
import Header from "components/common/custom-header/Header";
import { useStateValue } from "services/auth/hooks";
import { __ } from "language/stringPicker";
import ProfileScreen from "features/profile/screens/ProfileScreen";

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const StackNavigator = () => {

  const {appSettings} = useStateValue();
  


  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTransparent: true,
          header: (props) => (
            <Header title={__("routeNames.notificationScr", 'en')} headerTransparent={true}/>
          )
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTransparent: true,
          header: (props) => (
            <Header title={__("routeNames.profileScr", 'en')} headerTransparent={true}/>
          )
        }}
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
