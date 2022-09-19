import React, {useContext, useEffect} from 'react';
import authContext from '../context/auth/AuthContext';

export default function Logout() {
  // to make theuser state null
  const {setUser} = useContext(authContext);

  useEffect(() => {
    setUser(null);
    // eslint-disable-next-line
  }, []);
}
