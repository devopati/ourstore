import React, { useState } from "react";
import "./buying.css";
import Paid from "./Paid";

const Buying = ({ setBuyOpen, buyOpen }) => {
  const [paidOpen, setPaidOpen] = useState(false);
  return (
    <div className="buying-container">
      <div className="buy">
        <h2>Pay amount to our store</h2>
        <img src="https://www.safaricom.co.ke/images/Lipanampesa.png" alt="" />
        <label htmlFor="fullname">Full Name :</label>
        <input type="text" />
        <label htmlFor="fullname">Phone Number :</label>
        <input type="text" />
        <label htmlFor="fullname">Amount to Pay :</label>
        <input type="text" value={"7996"} />
        {/* <label htmlFor="fullname">Full Name :</label>
        <input type="text" /> */}
        <div className="buy-btn">
          <button onClick={() => setBuyOpen(false)}>Cancel</button>
          <button onClick={() => setPaidOpen(true)}>Pay</button>
        </div>
      </div>
      <div className={`paid ${paidOpen ? "paid-open" : ""}`}>
        <Paid setPaidOpen={setPaidOpen} />
      </div>
    </div>
  );
};

export default Buying;
