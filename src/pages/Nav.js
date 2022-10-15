import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <nav className = "wrap">
      <div class="button">
        <NavLink to="/">
          <div>
            Home
          </div>     
        </NavLink>
      </div>
      <div class="button">
        <NavLink to="/post">
          <div>
           Writing
          </div>     
        </NavLink>
      </div>
      <div class="button">
        <NavLink to="/List" >
          List
        </NavLink>
      </div>
      <div class="button">
        <NavLink to="/Search" >
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;