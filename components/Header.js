import React from "react";
import "../App.css";
const Header = ({ count, handleShow, search, setSearch }) => {
  return (
    <div className="flex shopping-card">
      <h1 className="shoppingCardHeading" onClick={() => handleShow(false)}>
        Online Delivery App
      </h1>
      <input
        className="headerInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search your Products"
      />
      <h1 className="cartHeading" onClick={() => handleShow(true)}>
        Cart<sup className="countHeading">{count}</sup>
      </h1>
    </div>
  );
};

export default Header;
