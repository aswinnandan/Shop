import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/categories"> Categories </Link>
        <Link to="/users"> Users </Link>
        <Link to="/cart">
          <ShoppingCart size={22} />
        </Link>
      </div>
    </div>
  );
};
