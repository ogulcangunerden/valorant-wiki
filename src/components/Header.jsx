import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
  return (
    <div className="header-general">
      <div className="header-image">
        <Link to="/">
          <img
            className="image-valo"
            src="/src/assets/Valorant_logo_-_pink_color_version_(cropped).png"
            alt=""
          />
        </Link>
      </div>
      <div className="header-title">
        <h1>Valorant Wiki</h1>
      </div>
      <div>
        <ul className="header-table">
          <li className="header-li">
            <Link className="nav-link" to="/agents">
              Agents
            </Link>
          </li>
          <li className="header-li">
            <Link className="nav-link" to="/weapons">
              Weapons
            </Link>
          </li>
          <li className="header-li">
            <Link className="nav-link" to="/maps">
              Maps
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
