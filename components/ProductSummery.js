import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const ProductSummery = ({ CART, cart }) => {
  return (
    <div className="productSummryPageContainer">
      <h1 className="text-center">Products Summery</h1>
      <div>
        {cart.map((item, itemIndex) => {
          return (
            <div className="buynowPage">
              <div>
                <img className="personDetailsImg" src={item.url} />
                <h5 className="personDetailsName">{`ProductName : ${item.name}`}</h5>
                <h6>{`Price : ${item.price}`}</h6>
              </div>
            </div>
          );
        })}
      </div>

      <div className="personDetailsTotal">
        {" "}
        Total Purchase Amount{" "}
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </div>
      <div className="text-center">
        <Link to="/cart-list">
          <button className="btn btn-danger placeYourOrderButton">Back</button>
        </Link>
        <Link to="/payment-page">
          <button className="btn btn-success placeYourOrderButton">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductSummery;
