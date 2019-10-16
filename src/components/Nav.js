import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="nav-wrapper yellow darken-3">
        <div className="container">
          <Link to="/" className="brand-logo black-text">
            logo
          </Link>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
