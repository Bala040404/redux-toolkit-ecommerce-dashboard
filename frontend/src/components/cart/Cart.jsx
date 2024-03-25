import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartproduct from "../cartproduct/Cartproduct";
function Cart() {
  const prods = useSelector((store) => {
    return store.cart.cartItems;
  });

  const cartProducts = prods.map((p) => {
    return (
      <Cartproduct
        key={p._id}
        name={p.name}
        image={p.image}
        category={p.category}
        price={p.price}
        id={p._id}
      ></Cartproduct>
    );
  });
  return <div>{cartProducts}</div>;
}

export default Cart;
