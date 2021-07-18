import {useContext} from 'react';
import {AuthContext} from '../services/authContext';

export function useAuth(){
    const value = useContext(AuthContext)
    return value;
}