import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const NAV_BAR = [
    {
      title: "Мобильные устройства",
      link: "/phone",
      id: 1,
    },
    {
      title: "ТВ и аудио",
      link: "/tv",
      id: 2,
    },
    {
      title: "Для дома",
      link: "/for",
      id: 3,
    },
  ];

  const location = useLocation();
  return (
    <div className="navbar">
      {NAV_BAR.map((item) => (
        <Link
          className={
            location.pathname === item.link
              ? "navbar-item-active"
              : "navbar-item"
          }
          key={item.id}
          to={item.link}
        >
          {item.title}
        </Link>
      ))}
      <Link
        to="/admin"
        className={
          location.pathname === "/admin" ? "navbar-item-active" : "navbar-item"
        }
      >
        Админ
      </Link>
    </div>
  );
};

export default Navbar;
