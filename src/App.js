import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import Shop from "./pages/shop/shop";
import CategoryList from "./pages/Category/CategoryList";
import Cart from "./pages/cart/cart";
import ProductDetails from "./pages/shop/ProductDetails";
import CategoryPage from "./pages/Category/CategoryPage";
import UserList from "./pages/user/UserList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
