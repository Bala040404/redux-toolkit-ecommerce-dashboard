import React from "react";
import "./cartproduct.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/CartSlice";
function Cartproduct({ image, name, category, price, id, count }) {
  const dispatch = useDispatch();
  function removeProductFromcart(id) {
    dispatch(removeFromCart(id));
  }
  return (
    <div className="cartproduct">
      <img className="cartproductimage" src={image}></img>
      <h2 className="cartproductname">{name}</h2>
      <h4 className="cartproductcategory">{category}</h4>
      <h3 className="cartproductprice">{price}</h3>
      <h3>{count}</h3>
      <button
        onClick={() => {
          removeProductFromcart(id);
        }}
      >
        remove
      </button>
    </div>
  );
}

export default Cartproduct;
