import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificProduct } from "../../slices/ProductSlice";
import "./individualproduct.css";
function Induvidualproduct() {
  const { id } = useParams();
  const dispatch = useDispatch();

  function fetchProduct() {
    console.log(id);
    dispatch(getSpecificProduct(id));
  }
  const product = useSelector((store) => {
    return store.products.current;
  });

  useEffect(fetchProduct, []);

  return (
    <div className="individualproduct">
      <div className="image">
        <img src={product.image}></img>
      </div>
      <div className="card">
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <h3>{product.category}</h3>
      </div>
    </div>
  );
}

export default Induvidualproduct;
