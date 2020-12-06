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
            id={1}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={1441}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id={2}
            title="Spies, Lies & Red Tape : A Spy-Military-Political Fiction Thriller based on the Indian Subcontinent: A Spy-Military-Political Fiction Thriller based on the Indian Subcontinent"
            price={299}
            image="https://m.media-amazon.com/images/I/41Lo4TOqo3L.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="boAt Rockerz 255 Pro in-Ear Bluetooth Neckband Earphone with Mic(Navy Blue)"
            price={1449}
            image="https://images-na.ssl-images-amazon.com/images/I/61IGr%2BQK6yL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={4}
            title="Samsung Galaxy M51 (Electric Blue, 8GB RAM, 128GB Storage)"
            price={24999}
            image="https://images-na.ssl-images-amazon.com/images/I/710weRkP-nL._SL1500_.jpg"
            rating={1}
          />
          <Product
            id={5}
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Black)"
            price={4499}
            image="https://images-na.ssl-images-amazon.com/images/I/61KIy6gX-CL._SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={81500}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
