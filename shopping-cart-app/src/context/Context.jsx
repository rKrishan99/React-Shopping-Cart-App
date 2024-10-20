import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

  const [loading, setloading] = useState(false);
  const [listOfProducts, setlistOfProducts] = useState([]);

    async function fetchListOfProducts() {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();

        if(result && result?.products){
            setlistOfProducts(result?.products);
        }

    }

    useEffect(() => {
        fetchListOfProducts(listOfProducts);
    },[]);

    console.log(listOfProducts);

  return (
    <ShoppingCartContext.Provider value={{listOfProducts}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
