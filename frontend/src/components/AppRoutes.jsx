import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Product from "./Product";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Sell from "../Pages/Sell";

function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
