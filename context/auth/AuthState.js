import React, {useState} from 'react';
import authContext from './AuthContext';

export default function authState({children}) {
  //state for sign in user
  const [user, setUser] = useState(null);

  return (
    <authContext.Provider value={{user, setUser}}>
      {children}
    </authContext.Provider>
  );
}
