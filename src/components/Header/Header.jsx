import React from "react";
import Contacts from "../helpers/Contacts";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="headers">
      <div className="header">
        <img
          src="https://www.samsungstore.kg/static/user/ima/logo.png"
          alt="logo"
        />
        <Navbar />
        <Contacts />
      </div>
    </div>
  );
};

export default Header;
