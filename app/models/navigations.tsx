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
  Root: NavigatorScreenParams<RootDrawerParamList> | undefined;
  // Root: NavigatorScreenParams<RootDrawerParamList> | undefined;
  HomeScreen: undefined,
  NotificationScreen: undefined,
  ProfileScreen: undefined,
};
export type RootDrawerParamList = {
  ["FindOutfit"]: NavigatorScreenParams<RootTabParamList> | undefined; // Home
  // Support: undefined;
};

export type RootTabParamList = {
  HomeScreen: undefined,
  DeletedList: undefined,
  PolicyScreen: undefined,
  ClaimsScreen: undefined,
  ContactScreen: undefined,
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  NativeStackScreenProps<RootDrawerParamList, Screen>;


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>, NativeStackScreenProps<AppRootStackParamList>>;
