import React, { useState, useEffect } from "react";
import "./Register.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../services/authService";
import { SET_LOGIN, SET_NAME } from "../Redux/Features/Auth/authSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  conPassword: "",
};

const Register = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentYear = new Date().getUTCFullYear();
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, conPassword } = formData;

  const [passerr, setPaserr] = useState(false);
  const [fielderr, setFielderr] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!name || !password || !conPassword || !email) {
      setFielderr(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setFielderr(false);
      }, 4000);
      return;
    }
    if (password !== conPassword) {
      if (fielderr) {
        setFielderr(false);
      }
      setPaserr(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setPaserr(false);
      }, 4000);
    }

    const userData = {
      name,
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.user.name));
      navigate("/");
      setIsLoading(false);
      console.log(data.user.name);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
  };
  return (
    <>
      <div className="register-container">
        <div className="reg-side">
          <div className="reg-back-icon">
            <Link to="/">
              <BsArrowLeftCircle />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1707403735842-091dbf4bdff7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5hdmVsJTIwT3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="reg-top">
            Do you you agree that oranges can grow at high altitudes?
            <div className="log-quiz">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
        <div className="reg-form-container">
          <form onSubmit={handleSubmit} className="reg-form">
            <h1>Create Account</h1>
            <small>{fielderr && "All fields are required"}</small>
            <small>{passerr && "Passwords do not match"}</small>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              placeholder="Full name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="@example.gmail.com"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <label htmlFor="conPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              name="conPassword"
              value={conPassword}
              onChange={handleInputChange}
            />
            <div className="reg-sinin">
              <h4>
                Have an account?{" "}
                <span>
                  <Link to="/login">Sign in</Link>
                </span>
              </h4>
            </div>
            <div className="frm-btn">
              <button>{isLoading ? "Processing... " : "Signup"}</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer__copyright footer-reg">
        <small>
          Copyright &copy; {getCurrentYear} Environment. All rights reserved.{" "}
        </small>
      </div>
    </>
  );
};

export default Register;
