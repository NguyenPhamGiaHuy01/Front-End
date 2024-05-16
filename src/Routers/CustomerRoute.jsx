import React from "react";
import { Navbar } from "../Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RestaurantDetails from "../Component/Restaurant/RestaurantDetails";
import Profile from "../Component/Profile/Profile";
import { Home } from "../Component/Home/Home";
import Auth from "../Component/Auth/Auth";

const CustomerRoute = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/restaurant/:city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
      <Auth/>
    </div>
  );
};

export default CustomerRoute;
