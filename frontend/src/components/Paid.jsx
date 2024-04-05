import React from "react";

const Paid = ({ setPaidOpen }) => {
  return (
    <div className="paid-container">
      <h3>Payment in Progress check your Phone to complete transaction</h3>
      <div className="buy-btn">
        <button onClick={() => setPaidOpen(false)}>Okay</button>
      </div>
    </div>
  );
};

export default Paid;
