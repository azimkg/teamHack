import React, { useState } from "react";
import { Menu } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2"];

const Menus = () => {
  const [openKeys, setOpenKeys] = useState(["sub2"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      className="menu"
    >
      <SubMenu
        key="sub1"
        icon={<MenuUnfoldOutlined style={{ color: "black" }} />}
      >
        <Link to="/phone">
          <Menu.Item style={{ color: "black" }} key="1">
            Мобильные устройства
          </Menu.Item>
        </Link>
        <Link to="/tv">
          <Menu.Item style={{ color: "black" }} key="2">
            ТВ и аудио
          </Menu.Item>
        </Link>
        <Link to="/for">
          <Menu.Item style={{ color: "black" }} key="3">
            Для дома
          </Menu.Item>
        </Link>
        <Link to="/admin">
          <Menu.Item style={{ color: "black" }} key="4">
            Админ
          </Menu.Item>
        </Link>
        <Link to="/contact">
          <Menu.Item style={{ color: "black" }} key="4">
            Контакты
          </Menu.Item>
        </Link>
      </SubMenu>
    </Menu>
  );
};

export default Menus;
