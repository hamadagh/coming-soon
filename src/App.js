import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left__side"></div>
      <div className="right__side">
        <p>10% Discount</p>
        <p>for early birds</p>
        <p>
          Consectetur voluptate ea laboris fugiat laborum deserunt culpa
          exercitation non proident culpa reprehenderit ad ea. Velit fugiat do
          non exercitation id deserunt consequat quis ea incididunt tempor
          Lorem. Elit cupidatat sit amet sunt irure laborum sit aute ullamco ut
          fugiat voluptate reprehenderit. Duis aliqua consequat irure sunt do
          fugiat pariatur.
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
  );
}

export default App;
