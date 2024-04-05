import React, { useState } from "react";
import "./products.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdRemoveCircleOutline, IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import Buying from "./Buying";

function Products() {
  const [quantity, setQuantity] = useState(-1);
  const [buyOpen, setBuyOpen] = useState(false);

  const addToCart = () => {
    setQuantity(quantity + 1);
  };
  const removeFromCart = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="prod-container">
      <div className="full-container">
        <div className="prod-cards">
          {Data.map((item) => {
            return (
              <div className="prod-card" key={item.id}>
                <div className="image">
                  <img src={item.imggUrl} alt={item.name} style={{height:200}}/>
                </div>
                <div className="name-price">
                  <h4>{item.name}</h4>
                  <br />

                  <h5>Ksh. {item.curr_price}.00</h5>
                  <br />
                  <h5 id="past-price">Ksh. {item.past_price}.00</h5>
                  <br />

                  <div className="description">
                    <small>{item.description}</small>
                  </div>
                </div>
                {quantity < 5 ? (
                  <div className="btn">
                    <button
                      className="add-cart"
                      onClick={() => setBuyOpen(true)}
                    >
                      {/* <AiOutlineShoppingCart /> */}
                      Buy
                    </button>
                  </div>
                ) : (
                  <div className="btn">
                    <button
                      className="add-cart remove"
                      onClick={() => removeFromCart()}
                    >
                      <IoMdRemoveCircleOutline />
                      Remove
                    </button>
                  </div>
                )}
                <Link to={`/products/${item.id}`}>
                  <div className="view-details">
                    View Details
                    <IoMdArrowRoundForward />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`popoup ${buyOpen && "buy-open"}`}>
        <Buying setBuyOpen={setBuyOpen} buyOpen={buyOpen} />
      </div>
    </div>
  );
}

export default Products;
