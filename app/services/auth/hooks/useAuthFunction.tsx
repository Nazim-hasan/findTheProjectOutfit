import React from 'react'
import { useStateValue } from './useStateValue';
import { removeData, storeData } from '../../../storage/asyncStore';

const useAuthFunction = () => {
    const [{ user, token, appSettings }, dispatch] = useStateValue();

    const handleLogin = (value: string) => {
        dispatch({
            type: 'SET_USER',
            user: true
        });
        storeData(value)
    }

    const handleLogout = () => {
        dispatch({
            type: 'SET_USER',
            user: false
        });
        removeData();
    };

    return { handleLogout, handleLogin }
}

export default useAuthFunction