import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <div className="navbar container px-5 px-md-0 d-flex">
      <div className="d-flex align-items-center">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <NavDesktop />
      </div>
      <div className="loginBtn d-none d-md-block">
        <button>
          <Link to="login">登入</Link>
        </button>
      </div>
      <div className="nav-mobile d-md-none">
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;
