import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setloading] = useState(true);
  const [listOfProducts, setlistOfProducts] = useState([]);
  const [productDetails, setproductDetails] = useState(null);

  async function fetchListOfProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();

    if (result && result?.products) {
      setlistOfProducts(result?.products);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts(listOfProducts);
  }, []);

  console.log(listOfProducts);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setloading,
        productDetails,
        setproductDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
