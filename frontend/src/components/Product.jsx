import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import "./product.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Product() {
  const { productId } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const moreData = Data.slice(2, 4);
  // console.log({ productId });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="product-cards p-cards">
        {Data.filter((item) => item.id == productId).map((item) => {
          return (
            <div className="product" key={item.id} data-aos="zoom-in">
              <div className="top">
                <div className="image">
                  <img src={item.imggUrl} alt={item.name} />
                </div>
                <div className="right">
                  <div className="name">
                    <br />
                    <h4>{item.name}</h4>
                    <br />
                    <br />

                    <h4>Ksh. {item.curr_price}.00</h4>
                    <br />
                    <h4 id="past-price">Ksh. {item.past_price}.00</h4>
                    <div className=" prod-cart">
                      <div className="icon-icon">
                        {/* <AiOutlineShoppingCart id="icon" /> */}
                      </div>
                      <h4> Buy</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description-n">
                <div id="d-h3">
                  <h3 style={{ textDecoration: "underline" }}>DESCRIPTION</h3>
                </div>

                <p>{item.description}</p>
              </div>
            </div>
          );
        })}

        <div className="view-more">
          <h2>View More Products</h2>
          <div className="pro-cards">
            {moreData.map((item) => {
              return (
                <div className="prod-card" key={item.id}>
                  <div className="image">
                    <img src={item.imggUrl} alt={item.name} />
                  </div>
                  <div className="name-price">
                    <h4>{item.name}</h4>
                    <h5>Ksh. {item.curr_price}.00</h5>
                    <h5 id="past-price">Ksh. {item.past_price}.00</h5>
                    <div className="description">
                      <small>{item.description}</small>
                    </div>
                  </div>
                  <div className="btn">
                    <button className="add-cart" onClick={() => addToCart()}>
                      <AiOutlineShoppingCart />
                      Add to Cart
                    </button>
                  </div>

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
      </div>
    </>
  );
}

export default Product;
