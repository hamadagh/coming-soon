import React from "react";
import img from "./assets/hand.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import telegram from "./assets/telegram.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left__side">
        <img src={img} alt="hand" className="hand__image" />
      </div>
      <div className="right__side">
        <div>
          <span className="first__header">10% Discount</span>
          <span className="second__header">for early birds</span>
          <p className="desc__paragraph">
            Consectetur voluptate ea laboris fugiat laborum deserunt culpa
            exercitation non proident culpa reprehenderit ad ea. Velit fugiat do
            non exercitation id deserunt consequat quis ea incididunt tempor
            Lorem.
          </p>
          <div className="email__input">
            <input type="text" placeholder="email" />
            <button>Notify me</button>
          </div>
          <div className="icons__wrapper">
            <p className="icons__header">Get in touch</p>
            <div className="icons">
              <img src={facebook} alt="facebook" width="25" height="25" />
              <img src={twitter} alt="twitter" width="25" height="25" />
              <img src={telegram} alt="telegram" width="25" height="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
