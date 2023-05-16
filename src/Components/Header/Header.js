/** @format */

import React from "react";
import brand from "../../Resources/images/icons/logo-sm.png";
import search from "../../Resources/images/icons/search-icon-sm.png";
import cart from "../../Resources/images/icons/cart-sm.png";
import "./Header.css";
import HeaderList from "./HeadeList/HeaderList";
// import faEquals from ".react-icons/fa"
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    const List = [
      { name: "iphone", url: "iphone" },

      { name: "Store", url: "Store" },
      { name: "Mac", url: "mac" },
      { name: "ipad", url: "ipad" },
      { name: "watch", url: "watch" },
      { name: "AirPods", url: "AirPods" },
      { name: "TV & Home", url: "tv" },
      { name: "Entertainment", url: "Entertainment" },
      { name: "Accessories", url: "Accessories" },
      { name: "Support", url: "support" },
      { name: <img src={search} />, url: "search" },
      { name: <img src={cart} />, url: "cart" },
    ];
    return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className=" navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              ☰
            </button>
            <Link
              className="brand-lg navbar-brand mx-auto p-0 m-0 d-none d-md-block"
              to="/">
              <img src={brand} alt="brand icon " />
            </Link>

            <Link
              className="search-ms navbar-search mx-auto p-0 m-0 d-block d-md-none icon"
              to="/">
              <img src={search} alt="search icon " />
            </Link>

            <Link
              className=" cart-sm navbar-toggler navbar-toggler-right p-0"
              to="Cart">
              <img src={cart} alt="cart icon " />
            </Link>

            <div className="navbar-collapse collapse p-0">
              <ul className="navbar-nav nav-justified w-100 nav-fill p-0">
                <HeaderList items={List} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
