import React, { useState, useEffect } from "react";
import "./sell.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectIsloggedIn, selectName } from "../Redux/Features/Auth/authSlice";
const Sell = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // check if user is logged in
  const isLoagedIn = useSelector(selectIsloggedIn);
  const name = useSelector(selectName);
  useEffect(() => {
    if (!name) {
      navigate("/login");
    }
  }, [name, isLoagedIn]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="sell-container">
      <form className="sell-form" onSubmit={onSubmitHandler}>
        <div style={{ textAlign: "center", margin: ".5rem 0" }}>
          <h2>Fill the Form and Submit</h2>
        </div>
        <label htmlFor="title">Enter Product's Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {/*  */}
        <label htmlFor="price">Enter Product's Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        {/*  */}
        <label htmlFor="imageUrl">Enter Product's Image Url:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        {/*  */}
        <label htmlFor="description">Enter Product's Description:</label>
        <textarea
          type="textarea"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={5}
        />
        <div className="form-btn">
          <button onClick={() => navigate("/")}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Sell;
