import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen
} from "../screens";
import { useStateValue } from "../services/auth/hooks";
import { __ } from "../language/stringPicker";
import { AuthStackParamList } from "../models/navigations";
// import { COLORS } from "colors";
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const [{ appSettings }] = useStateValue();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        options={{
          headerShown: false,
          title: __("routeNames.loginScr", appSettings.lng)
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
