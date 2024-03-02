import React, { useState } from "react";
import List from "./components/List";
import Cart from "./components/Cart";
import { products } from "./data";

const App = () => {
  const [listProducts, setListProducts] = useState(products);

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className="flex flex-row">
      <List
       listProducts={listProducts}
       cartProducts={cartProducts}
       setCartProducts={setCartProducts}
        
       />
      <Cart cartProducts={cartProducts} />
    </div>
  );
};

export default App;