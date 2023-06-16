import {AuthContextProps} from '../contexts/stateContext'

const reducer = (state: AuthContextProps, action:any) => {
  switch (action.type) {
    case 'SET_USER':
      if (action.user !== undefined) {
        return {
          ...state,
          user: action.user,
        };
      }
      return state;
    
    case 'SET_REFRESH': 
    return {
      ...state,
      refresh: action.refresh, 
    };

    case 'SET_BRAND':
      return {
        ...state,
        data: {
          imageLink: action.imageLink,
          collectionName: action.collectionName,
          description: action.description,
          isFollowed: false,
          isDeleted: false
        },
      };


    case 'SET_SETTINGS':
      return {
        ...state,
        appSettings: action.appSettings,
      };

    default:
      return state;
  }
};

export default reducer;
