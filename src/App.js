import React from "react";
import ContextPhoneProvider from "./context/phoneContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import CartContextProvider from "./context/cartCorntext";
import FollowContextProvider from "./context/followContext";

const App = () => {
  return (
    <ContextPhoneProvider>
      <FollowContextProvider>
        <CartContextProvider>
          <Routing />
        </CartContextProvider>
      </FollowContextProvider>
    </ContextPhoneProvider>
  );
};

export default App;
