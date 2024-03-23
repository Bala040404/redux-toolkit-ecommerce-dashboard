import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/ProductSlice";
import Product from "../product/Product";
import "./allproduct.css";

function Allproducts() {
  const dispatch = useDispatch();
  const getproducts = () => {
    dispatch(fetchProducts());
  };

  useEffect(getproducts, []);
  const prods = useSelector((store) => {
    return store.products.product;
  });

  console.log(prods);
  const allproducts = prods.map((p) => {
    return (
      <Product
        key={p._id}
        name={p.name}
        image={p.image}
        category={p.category}
        price={p.price}
      ></Product>
    );
  });
  return <div className="allproducts">{allproducts}</div>;
}

export default Allproducts;
