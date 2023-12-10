import React, { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";
import routes from "../routes";
import { NavLink, Link } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="">
      <div className="hamburger">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="nav-mobile-page d-flex flex-column justify-content-between ">
          <ul className="">
            {routes.map((route) => {
              const { title, href, id } = route;
              return (
                <li onClick={() => setOpen((prev) => !prev)} key={id}>
                  <NavLink to={href}>{title}</NavLink>
                </li>
              );
            })}
          </ul>
          <div className="loginBtn d-flex">
            <button className="m-2">
              <Link to="login">登入</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
