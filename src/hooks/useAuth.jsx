import AuthContext from 'contexts/auth-reducer/auth';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);