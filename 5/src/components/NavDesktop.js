import React from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";

const NavDesktop = () => {
  return (
    <div className="nav-btns d-none d-md-block">
      <ul className="d-flex ">
        {routes.map((route) => {
          const { title, href, id } = route;
          return (
            <li key={id}>
              <NavLink to={href}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDesktop;
