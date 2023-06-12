import React from "react";
// import { useStateValue } from "../services/auth/hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { __ } from "../language/stringPicker";
import { AppRootStackParamList } from "../models/navigations";
import HomeScreen from "../features/home/screen";

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const StackNavigator = () => {
  // const [{ appSettings }] = useStateValue();


  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Root"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      /> */}
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
