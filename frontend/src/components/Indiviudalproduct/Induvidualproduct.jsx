import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSpecificProduct,
  deleteSpecificProduct,
} from "../../slices/ProductSlice";
import "./individualproduct.css";
function Induvidualproduct() {
  const reroute = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((store) => {
    return store.products.current;
  });

  useEffect(fetchProduct, []);

  function fetchProduct() {
    dispatch(getSpecificProduct(id));
  }
  function deleteProd() {
    dispatch(deleteSpecificProduct(id));
    reroute("/");
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
        <button onClick={deleteProd}>delete</button>
      </div>
    </div>
  );
}

export default Induvidualproduct;
