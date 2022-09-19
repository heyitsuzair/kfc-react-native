import React, {useState} from 'react';
import addonContext from './AddonContext';

export default function authState({children}) {
  const [addonQuantity, setAddonQuantity] = useState([]);

  return (
    <addonContext.Provider value={{addonQuantity, setAddonQuantity}}>
      {children}
    </addonContext.Provider>
  );
}
