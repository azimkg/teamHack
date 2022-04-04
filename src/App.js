import React from "react";
import ContextPhoneProvider from "./context/phoneContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import CartContextProvider from "./context/cartCorntext";
import FollowContextProvider from "./context/followContext";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ContextPhoneProvider>
        <FollowContextProvider>
          <CartContextProvider>
            <Routing />
          </CartContextProvider>
        </FollowContextProvider>
      </ContextPhoneProvider>
    </AuthContextProvider>
  );
};

export default App;
