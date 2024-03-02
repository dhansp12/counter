import React from "react";
import ProductListCard from "./ProductListCard";

const List = ({ listProducts, cartProducts, setCartProducts}) => {
  return (
    <section className="w-1/2 mx-4  p-4 flex flex-col  items-center">
      {listProducts.map}
      <h2 className="text-gray-800 text-2xl mx-auto my-6 font-bold">
        Products In List
      </h2>

      <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2  gap-10 items-start ">
        {listProducts.map((product) => {
          return (
          <ProductListCard
          product={product}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          />
        );
        })}
      </section>
    </section>
  );
};

export default List;
