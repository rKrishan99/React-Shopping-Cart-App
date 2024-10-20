import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/Context";
import ProductTitle from "../../components/productTitle/ProductTitle";

const ProductList = () => {
  const { listOfProducts, loading } = useContext(ShoppingCartContext);

  console.log(listOfProducts);

  if(loading) return <h1>Loading data! Please wait.</h1>

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-col-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {
            listOfProducts && listOfProducts.length > 0 ?
            listOfProducts.map(singleProductTitle => <ProductTitle singleProductTitle={singleProductTitle} />) :
            <h3>Product Not Found!</h3>
          }
        </div>
      </div>
    </section>
  );
};

export default ProductList;
