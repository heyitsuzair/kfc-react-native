import React, {useState} from 'react';
import authContext from './AuthContext';

export default function authState({children}) {
  //state for sign in user
  const [user, setUser] = useState('null');

  // state for location of delivery
  const [location, setLocation] = useState('null');

  return (
    <authContext.Provider value={{user, setUser, location, setLocation}}>
      {children}
    </authContext.Provider>
  );
}
