import React from "react";
import ContextPhoneProvider from "./context/phoneContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";

const App = () => {
  return (
    <ContextPhoneProvider>
      <Routing />
    </ContextPhoneProvider>
  );
};

export default App;
