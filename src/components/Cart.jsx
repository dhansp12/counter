import React from "react";
import ProductCartCard from "./ProductCartCard";
import {FaShoppingCart} from "react-icons/fa";

const Cart = ({ cartProducts }) => {
  return (
    <section className=" w-1/2 mx-4 bg-slate-500 p-4 flex flex-col  items-center ">
      <h2 className=" text-gray-800 text-2xl mx-auto my-6 font-bold">
        Products In Cart <FaShoppingCart className="inline text-gray-800"/>
      </h2>

      <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2  gap-10 items-start ">
        {cartProducts.map((product) => {
          return <ProductCartCard product={product} />;
        })}
      </section>
    </section>
  );
};

export default Cart;
