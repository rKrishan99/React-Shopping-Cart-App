import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";

const ProductList = () => {

  const {listOfProducts} = useContext(ShoppingCartContext);

  console.log(listOfProducts);

  return <div>ProducrList</div>;
};

export default ProductList;
