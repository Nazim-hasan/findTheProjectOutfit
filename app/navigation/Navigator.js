import React, {useEffect, useState} from 'react';
import {useStateValue} from '../services/auth/hooks';
import {getData, getLng} from '../storage/asyncStore';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from 'react-native-splash-screen';

const Navigation = props => {
  const [{user}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      return;
    }
    getAuthData();
  }, []);
  
  useEffect(() => {
    getLngData();
  }, []);

  useEffect(() => {
    if (loading){
      return SplashScreen.show();
    }
    SplashScreen.hide();
  }, [loading]);

  // TODO need to set a loading screen till the navigator gets the auth data and load the final navigator
  const getLngData = async () => {
    const storedLng = await getLng();
    if (!storedLng) {
      return;
    }
    dispatch({
      type: 'SET_SETTINGS',
      appSettings: {lng: storedLng},
    });
  };

  const getAuthData = async () => {
    const storedAuth = await getData();
    if (!storedAuth) {
      setLoading(false);
      return;
    }

    dispatch({
      type: 'SET_AUTH_DATA',
      data: {
        user: storedAuth.user,
        token: storedAuth.token,
      },
    });
    setLoading(false);
  };

  return !loading ? <>{user ? <AppNavigator /> : <AuthNavigator />}</> : null;
};

export default Navigation;
