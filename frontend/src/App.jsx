import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Allproducts from "./components/allproducts/Allproducts.jsx";
import Productform from "./components/productform/Productform.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Induvidualproduct from "./components/Indiviudalproduct/Induvidualproduct.jsx";
import Cart from "./components/cart/Cart.jsx";
import Register from "./components/register/Register.jsx";
import Logout from "./components/logout/Logout.jsx";
import Login from "./components/login/Login.jsx";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar></Navbar>
        <div className="body">
          <Routes>
            <Route path="/" element={<Allproducts />}></Route>
            <Route path="/addproducts" element={<Productform />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>

            <Route path="/:id" element={<Induvidualproduct />}></Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
