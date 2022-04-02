import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartCorntext";
import { followContext } from "../../context/followContext";
import Contacts from "../helpers/Contacts";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { cartLength } = useContext(cartContext);
  const { followLength } = useContext(followContext);

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
        <Link to="/like">
          <Badge count={+followLength}>
            <HeartOutlined style={{ fontSize: "25px" }} />
          </Badge>
        </Link>
        <Link to="/cart">
          <Badge count={+cartLength} style={{ border: "50%", width: "5px" }}>
            <ShoppingCartOutlined style={{ fontSize: "25px" }} />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Header;
