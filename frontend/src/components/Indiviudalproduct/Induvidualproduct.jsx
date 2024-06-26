import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSpecificProduct,
  deleteSpecificProduct,
} from "../../slices/ProductSlice";
import "./individualproduct.css";
import { addTocart, removeFromCart } from "../../slices/CartSlice";
function Induvidualproduct() {
  const reroute = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((store) => {
    return store.products.current;
  });

  const cartItems = useSelector((store) => {
    return store.cart.cartItems;
  });

  function getCartCount(id) {
    const foundProduct = cartItems.find((product) => {
      return product._id === id;
    });

    if (foundProduct) {
      return foundProduct.count;
    } else {
      return 0;
    }
  }
  useEffect(fetchProduct, []);

  function fetchProduct() {
    dispatch(getSpecificProduct(id));
  }
  function deleteProd() {
    dispatch(deleteSpecificProduct(id));
    reroute("/");
  }

  function addProdToCart() {
    dispatch(addTocart(product));
    reroute("/cart");
  }

  function removeProductFromcart(id) {
    dispatch(removeFromCart(id));
    reroute("/cart");
  }
  return (
    <div className="individualproduct">
      <div className="image">
        <img src={product.image}></img>
      </div>
      <div className="card">
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h3>{product.category}</h3>
        {product.user === localStorage.getItem("id") && (
          <button onClick={deleteProd}>delete</button>
        )}
        {getCartCount(id) === 0 ? (
          <button onClick={addProdToCart}>
            add to cart {getCartCount(product._id)}{" "}
          </button>
        ) : (
          <div className="cartCount">
            <button
              onClick={() => {
                removeProductFromcart(product);
              }}
            >
              -
            </button>
            <h3>{getCartCount(id)}</h3>
            <button
              onClick={() => {
                addProdToCart;
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Induvidualproduct;
