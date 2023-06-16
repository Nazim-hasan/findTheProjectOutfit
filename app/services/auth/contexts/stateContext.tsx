import React, { createContext, useReducer } from "react";
import reducer from '../reducer'


type AuthProviderType = {
  children: React.ReactNode;
};

export interface AuthContextProps {
  user: boolean,
  appSettings: {
    [key: string]: string,
  },
}

export const defaultState = {
  user: false,
  appSettings: {
    lng: 'en',
  },
  refresh: false
}

export const StateContext = createContext<any>(null);

export const StateProvider = ({ children }: AuthProviderType) => {
  const initialState = useReducer(reducer, defaultState)

  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  )
};
