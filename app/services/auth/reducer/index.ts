import {AuthContextProps} from '../contexts/stateContext'

const reducer = (state: AuthContextProps, action:any) => {
  switch (action.type) {
    case 'SET_AUTH_DATA':
      if (action.data.user !== undefined && action.data.token !== undefined) {
        return {
          ...state,
          user: action.data.user,
          token: action.data.token,
        };
      } else if (action.data.user === undefined && action.data.token) {
        return {
          ...state,
          token: action.data.token,
        };
      } else if (action.data.user && action.data.token === undefined) {
        return {
          ...state,
          user: action.data.user,
        };
      }
      return state;

    case 'SET_SETTINGS':
      return {
        ...state,
        appSettings: action.appSettings,
      };


    case 'IS_CONNECTED':
      return {
        ...state,
        is_connected: action.is_connected,
      };

    default:
      return state;
  }
};

export default reducer;
