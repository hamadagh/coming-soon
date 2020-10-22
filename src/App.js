import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left__side"></div>
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
            <p>Get in touch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
