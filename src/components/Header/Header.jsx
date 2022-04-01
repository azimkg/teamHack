import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../helpers/Contacts";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="headers">
      <div className="header">
        <Link to="/">
          <img
            src="https://www.samsungstore.kg/static/user/ima/logo.png"
            alt="logo"
          />
        </Link>

        <Navbar />
        <Contacts />
      </div>
    </div>
  );
};

export default Header;
