import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={1441}
            image="https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"
            rating={2}
          />
          <Product
            title="The lean startup"
            price={1441}
            image="https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={1441}
            image="https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"
            rating={1}
          />
          <Product
            title="The lean startup"
            price={1441}
            image="https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"
            rating={1}
          />
          <Product
            title="The lean startup"
            price={1441}
            image="https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={1441}
            image="https://images-eu.ssl-images-amazon.com/images/I/512+dA1m+EL._AC_SX184_.jpg"
            rating={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
