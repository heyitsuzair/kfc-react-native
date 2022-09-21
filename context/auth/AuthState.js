import React, {useState} from 'react';
import authContext from './AuthContext';

export default function authState({children}) {
  //state for sign in user
  const [user, setUser] = useState('null');

  // state for city
  const [city, setCity] = useState({name: null, lon: null, lat: null});

  // state for location of delivery
  const [location, setLocation] = useState(null);

  // state for user phone no
  const [phoneNo, setPhoneNo] = useState(null);

  return (
    <authContext.Provider
      value={{
        city,
        setCity,
        user,
        setUser,
        location,
        setLocation,
        phoneNo,
        setPhoneNo,
      }}>
      {children}
    </authContext.Provider>
  );
}
