import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  LoginScreen: undefined
  EmailLoginScreen: undefined
  SignUpScreen: undefined
  PassResetScreen: undefined
  TermsOfServiceScreen: undefined
};

export type AppRootStackParamList = {
  // Root: NavigatorScreenParams<RootDrawerParamList> | undefined;
  HomeScreen: undefined,
};

export type RootTabParamList = {
  HomeScreen: undefined,
  ProfileScreen: undefined,
  PolicyScreen: undefined,
  ClaimsScreen: undefined,
  ContactScreen: undefined,
};
export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<AppRootStackParamList>>;