import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header.css";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div className="list">
        <ul>
          <Link
            style={{
              color: location.pathname === "/" ? "black" : "white",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ color: location.pathname === "/cart" ? "black" : "white" }}
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{
              color: location.pathname === "/signin" ? "black" : "white",
            }}
            to="/signin"
          >
            SignIn
          </Link>
          <Link
            style={{
              color: location.pathname === "/signout" ? "black" : "white",
            }}
            to="/signout"
          >
            SignOut
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
