import React from 'react';
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div
      className="top-0 left-0 right-0 shadow-sm z-50 font-serif"
      style={{ backgroundColor: "rgb(46, 7, 63)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={LOGO_URL} className="h-8 w-auto" alt="Logo"></img>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="link link-underline"
              style={{ color: "rgb(235, 211, 248)" }}
            >
              Home
            </Link>
            <Link
              to="/invoicePage"
              className="link link-underline"
              style={{ color: "rgb(235, 211, 248)" }}
            >
              Invoices
            </Link>
            <Link
              to="/productsPage"
              className="link link-underline"
              style={{ color: "rgb(235, 211, 248)" }}
            >
              Products
            </Link>
            <Link
              to="/customerPage"
              className="link link-underline"
              style={{ color: "rgb(235, 211, 248)" }}
            >
              Customers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;