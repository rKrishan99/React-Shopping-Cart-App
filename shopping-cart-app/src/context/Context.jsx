import React, { createContext } from 'react'



export const ShoppingCartCotext = createContext(null);


function ShoppingCartProvider({children}) {
  return (
    <ShoppingCartCotext.Provider>
        {children}
    </ShoppingCartCotext.Provider>
  )
}

export default ShoppingCartProvider;