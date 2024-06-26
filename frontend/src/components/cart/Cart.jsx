import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cartproduct from "../cartproduct/Cartproduct";
function Cart() {
  const prods = useSelector((store) => {
    return store.cart.cartItems;
  });

  const count = useSelector((store) => {
    return store.cart.count;
  });

  const total = useSelector((store) => {
    return store.cart.total;
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
        count={p.count}
        prod={p}
      ></Cartproduct>
    );
  });
  return (
    <div>
      <h1>
        The number of products in the cart is {count} and the cost is {total}{" "}
      </h1>
      <div>{cartProducts}</div>
    </div>
  );
}

export default Cart;
