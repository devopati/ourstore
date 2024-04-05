import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import {
  REMOVE_NAME,
  SET_LOGIN,
  selectIsloggedIn,
  selectName,
} from "../Redux/Features/Auth/authSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const logoutUser = async () => {
    setAccountActive(false);
    dispatch(SET_LOGIN(false));
    await dispatch(REMOVE_NAME(""));
    toast.success("Logout Successfull");
  };

  const isLoagedIn = useSelector(selectIsloggedIn);
  const name = useSelector(selectName);
  console.log(name);
  const [accountActive, setAccountActive] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h2>OurStore</h2>
        </Link>
      </div>
      <div className="navbar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/sell">
          <li>Sell Product</li>
        </Link>
        <div className="account">
          <Link onClick={() => setAccountActive(!accountActive)}>
            <li>Account</li>
          </Link>
          {!isLoagedIn || !name ? (
            <div className={`hanging ${!accountActive && "not-active"}`}>
              <Link to="/register" onClick={() => setAccountActive(false)}>
                Register
              </Link>
              <Link to="/login" onClick={() => setAccountActive(false)}>
                Login
              </Link>
            </div>
          ) : (
            <div className={`hanging ${!accountActive && "not-active"}`}>
              <Link onClick={logoutUser}>Logout</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
