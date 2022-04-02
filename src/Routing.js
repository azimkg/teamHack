import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Buy from "./components/Buy/Buy";
import CartPhone from "./components/CartPhone/CartPhone";
import Contact from "./components/Contact/Contact";
import ContactInputs from "./components/ContactInput/ContactInput";
import Content from "./components/Content/Content";
import Details from "./components/Details/Details";
import EditPhone from "./components/EditPhone/EditPhone";
import FollowCart from "./components/FollowCart/FollowCart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InHome from "./components/InHome/InHome";
import Phone from "./components/Phone/Phone";
import PhoneList from "./components/PhoneList/PhoneList";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/like" element={<FollowCart />} />
        <Route path="/" element={<Content />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<ContactInputs />} />
        <Route path="/list" element={<PhoneList />} />
        <Route path="/edit/:id" element={<EditPhone />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/for" element={<InHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPhone />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
