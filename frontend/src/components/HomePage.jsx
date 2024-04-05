import React, { useEffect } from "react";
import Products from "./Products";
import "./home.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "transparent",
  color: "white",
  fontWeight: "bold",
  fontSize: "2rem",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  objectFit: "cover",
  height: "400px",
};

const slideImages = [
  {
    url: "https://plus.unsplash.com/premium_photo-1681826659316-fa513caebdb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29uY29yZCUyMEdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
    caption: "Get fresh fruits",
  },
  {
    url: "https://images.unsplash.com/photo-1591271300850-22d6784e0a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FyZGVuJTIwU3RyYXdiZXJyaWVzfGVufDB8fDB8fHww",
    caption: "Enjoy farm grapes",
  },
  {
    url: "https://images.unsplash.com/photo-1642441070756-d76619c673ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENhdmVuZGlzaCUyMEJhbmFuYXN8ZW58MHx8MHx8fDA%3D",
    caption: "Get the best from the Market",
  },
];

function HomePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="home-main">
      <div className="home-head">
        <div className="slideShow">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                    objectFit: "cover",
                  }}
                >
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <Products />
      </div>
    </div>
  );
}

export default HomePage;
