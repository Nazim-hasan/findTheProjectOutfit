import React, { createContext, useReducer } from "react";
import { Platform } from 'react-native';
import reducer from '../reducer'


type AuthProviderType = {
  children: React.ReactNode;
};

export interface AuthContextProps {
  ios: boolean,
  appSettings: {
    [key: string]: string,
  },
  is_connected: boolean,
}

export const defaultState = {
  ios: Platform.OS === 'ios',
  appSettings: {
    lng: 'en',
  },
  is_connected: true,
}

export const StateContext = createContext<any>(null);

export const StateProvider = ({ children }: AuthProviderType) => {
  // const [state, dispatch] = useReducer(reducer, initialState[0]);
  const initialState = useReducer(reducer, defaultState)

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  )
};
