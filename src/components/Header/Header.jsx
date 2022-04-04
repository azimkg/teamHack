import { Button } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import Contacts from "../helpers/Contacts";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {

  const { currentUser, handleLogout } = useContext(authContext)
  const navigate = useNavigate()

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {currentUser ? <span>{currentUser}<Button style={{ backgroundColor: "red" }} onClick={handleLogout}>Выйти</Button></span> : <Button style={{ backgroundColor: "green" }} onClick={() => navigate("/auth")}>Войти</Button>}
      </div>
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
    </>
  );
};

export default Header;
