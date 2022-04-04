import React from "react";
import ContextPhoneProvider from "./context/phoneContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ContextPhoneProvider>
        <Routing />
      </ContextPhoneProvider>
    </AuthContextProvider>
  );
};

export default App;
