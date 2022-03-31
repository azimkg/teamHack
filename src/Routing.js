import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/phone" element={<Phone />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<ContactInputs />} />
        <Route path="/list" element={<PhoneList />} />
        <Route path="/edit/:id" element={<EditPhone />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
