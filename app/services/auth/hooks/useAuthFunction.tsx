import React from 'react'
import { useStateValue } from './useStateValue';
import { removeData } from '../../../storage/asyncStore';

const useAuthFunction = () => {
    const [{ user, token, appSettings }, dispatch] = useStateValue();

    const handleLogout = () => {
        dispatch({
            type: 'SET_AUTH_DATA',
            data: {
                user: null,
                token: null,
            },
        });
        removeData();
    };

    return { handleLogout }
}

export default useAuthFunction