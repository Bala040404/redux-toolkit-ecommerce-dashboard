import React from "react";
import { useState, useEffect } from "react";
import { fetchProducts, appendProduct } from "../../slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import "./productform.css";
import { useNavigate } from "react-router-dom";

function Productform() {
  const nav = useNavigate();
  const redirect = () => {
    if (!localStorage.getItem("user")) {
      nav("/");
    }
  };
  useEffect(redirect, []);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    image: null,
  });
  const user = useSelector((store) => {
    return store.user.user;
  });
  const dispatch = useDispatch();

  async function addproduct(e) {
    e.preventDefault();
    let f = new FormData();
    f.append("name", product.name);
    f.append("category", product.category);
    f.append("price", product.price);
    f.append("image", product.image);
    f.append("user", user._id);

    await dispatch(appendProduct(f));
    nav("/");
    // dispatch(fetchProducts());
  }
  return (
    <div className="productform">
      <form className="form">
        <div>
          <label htmlFor="name">Enter the name of the product</label>
          <input
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="category">Enter the category of the product</label>
          <input
            type="text"
            name="category"
            id="category"
            value={product.category}
            onChange={(e) => {
              setProduct({ ...product, [e.target.name]: e.target.value });
            }}
          />
        </div>

        <div>
          <label htmlFor="image">Enter the image of the product</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e) => {
              setProduct({ ...product, [e.target.name]: e.target.files[0] });
            }}
          />
        </div>

        <div>
          <label htmlFor="price">Enter the price of the product</label>
          <input
            type="number"
            name="price"
            id="price"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, [e.target.name]: e.target.value });
            }}
          />
        </div>
        <button
          onClick={(e) => {
            addproduct(e);
          }}
        >
          addproduct
        </button>
      </form>
    </div>
  );
}

export default Productform;
