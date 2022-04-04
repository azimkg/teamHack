import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartCorntext";
import { followContext } from "../../context/followContext";
import Contacts from "../helpers/Contacts";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { cartLength } = useContext(cartContext);
  const { followLength } = useContext(followContext);

  return (
    <div className="headers">
      <Link to="/">
        <img
          className="logotype2"
          src="https://www.samsungstore.kg/static/user/ima/logo.png"
          alt="logo"
        />
      </Link>
      <div className="header">
        <Link to="/">
          <img
            className="logotype"
            src="https://www.samsungstore.kg/static/user/ima/logo.png"
            alt="logo"
          />
        </Link>

        <Navbar />
        <div className="div">
          <Menu />
          <Link to="/">
            <img
              className="logotype1"
              src="https://www.samsungstore.kg/static/user/ima/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <Link to="/like">
          <Badge count={+followLength}>
            <HeartOutlined className="heart" />
          </Badge>
        </Link>
        <Link to="/cart">
          <Badge count={+cartLength} style={{ border: "50%", width: "5px" }}>
            <ShoppingCartOutlined className="shopping" />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
