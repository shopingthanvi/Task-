import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./inputControl/button";
// import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="c-navbar">
        <div className="c-navbar__nav-container">
          <NavLink exact to="/" className="c-navbar__nav-logo">
            {/* CodeBucks */}
            <img src="logoStar.png" />
          </NavLink>

          <ul className={click ? "c-navbar__nav-menu c-navbar__nav-menu--active" : "c-navbar__nav-menu"}>
            <li className="c-navbar__nav-item">
              <NavLink
                exact
                to="/Users"
                activeClassName="active"
                className="c-navbar__nav-links"
                onClick={handleClick}
              >
                Users
              </NavLink>
            </li>
            <li className="c-navbar__nav-item">
              <NavLink
                exact
                to="/PRODUCTS"
                activeClassName="active"
                className="c-navbar__nav-links"
                onClick={handleClick}
              >
                PRODUCTS
              </NavLink>
            </li>
            <li className="c-navbar__nav-item">
              <NavLink
                exact
                to="/CLIENTS"
                activeClassName="active"
                className="c-navbar__nav-links"
                onClick={handleClick}
              >
                CLIENTS
              </NavLink>
            </li>
            <li className="c-navbar__nav-item">
              <NavLink
                exact
                to="/ABOUTUS"
                activeClassName="active"
                className="c-navbar__nav-links"
                onClick={handleClick}
              >
                ABOUTUS
              </NavLink>
            </li>
            <li className="c-navbar__nav-item">
              <NavLink
                exact
                to="/GETINTOUCH"
                activeClassName="active"
                className="c-navbar__nav-links"
                onClick={handleClick}
              >
                GET IN TOUCH US
              </NavLink>
            </li>
            {/* <li className="c-navbar__nav-item"> */}
            <Button text="ENQUIRY NOW" className=" font-16 mb-2"></Button>
            {/* </li> */}
          </ul>
          <div className="c-navbar__nav-icon" onClick={handleClick}>
            <img src="open-sidebar.svg"/>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}>ssss</i> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;