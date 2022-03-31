import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import ContactInputs from "./components/ContactInput/ContactInput";
import EditPhone from "./components/EditPhone/EditPhone";
import Header from "./components/Header/Header";
import PhoneList from "./components/PhoneList/PhoneList";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<ContactInputs />} />
        <Route path="/list" element={<PhoneList />} />
        <Route path="/edit/:id" element={<EditPhone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
