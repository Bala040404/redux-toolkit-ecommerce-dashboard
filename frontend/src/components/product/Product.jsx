import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

function Product({ image, name, category, price, id }) {
  return (
    <Link className="link" to={`/${id}`}>
      <div className="product">
        <img className="productimage" src={image}></img>
        <h2 className="productname">{name}</h2>
        <h4 className="productcategory">{category}</h4>
        <h3 className="productprice">{price}</h3>
      </div>
    </Link>
  );
}

export default Product;
