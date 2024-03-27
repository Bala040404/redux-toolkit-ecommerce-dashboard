import React from "react";
import "./cartproduct.css";
import { useDispatch } from "react-redux";
import { removeFromCart, addTocart } from "../../slices/CartSlice";
function Cartproduct({ image, name, category, price, id, count, prod }) {
  const dispatch = useDispatch();
  function removeProductFromcart(id) {
    dispatch(removeFromCart(id));
  }

  function addProductTocart(prod) {
    dispatch(addTocart(prod));
  }
  return (
    <div className="cartproduct">
      <img className="cartproductimage" src={image}></img>
      <h2 className="cartproductname">{name}</h2>
      <h4 className="cartproductcategory">{category}</h4>
      <h3 className="cartproductprice">{price}</h3>

      <div className="cartCount">
        <button
          onClick={() => {
            removeProductFromcart(prod);
          }}
        >
          -
        </button>
        <h3>{count}</h3>
        <button
          onClick={() => {
            addProductTocart(prod);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Cartproduct;
