import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./Images/shopping-cart.png";
import "../App.css";

const CartList = ({
  cart,
  removeHandler,
  CART,
  setCART,
  count,
  handleShow,
  cartShow,
  homeShow,
}) => {
  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const [emptyCart, setEmptyCart] = useState(count === 0);
  const totalCartValue = CART.map((item) => item.price * item.quantity).reduce(
    (total, value) => total + value,
    0
  );
  // console.log(totalCartValue);

  return (
    <div className="cartListMainContainer">
      <header>
        <header>
          <div className="flex shopping-card">
            <h1 className="shoppingCardHeading" onClick={homeShow}>
              Online Delivery App
            </h1>
            <div onClick={cartShow}>
              <img className="cartImg" src={img1} />
              <sup className="countHeading">{count}</sup>
            </div>
          </div>
        </header>
      </header>

      {emptyCart ? (
        <p className="emptyCartPara">Empty Cart</p>
      ) : (
        <div>
          <h1 className="text-center">Cart Items</h1>
          <div className="cartListContainer text-center">
            {CART?.map((cartItem, cartIndex) => {
              return (
                <div>
                  <div>
                    <div>
                      <h6>{cartItem.name}</h6>
                    </div>
                    <div>
                      <img
                        className="classListImg"
                        src={cartItem.url}
                        alt="img"
                      />
                    </div>
                    <div>
                      <button
                        className="cartMinusBtn"
                        onClick={() => {
                          const _CART = CART.map((item, index) => {
                            return cartIndex === index
                              ? {
                                  ...item,
                                  quantity:
                                    item.quantity > 0 ? item.quantity - 1 : 0,
                                }
                              : item;
                          });
                          setCART(_CART);
                        }}
                      >
                        -
                      </button>
                      <span className="quantityTitle">{cartItem.quantity}</span>
                      <button
                        className="cartPlusBtn"
                        onClick={() => {
                          const _CART = CART.map((item, index) => {
                            return cartIndex === index
                              ? { ...item, quantity: item.quantity + 1 }
                              : item;
                          });
                          setCART(_CART);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <span className="classListItemCost">
                      Rs. {cartItem.price * cartItem.quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      removeHandler();
                    }}
                    className="btn btn-secondary"
                  >
                    Remove Cart
                  </button>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <p className="totalPricePara">
              <span className="totalPrice p-1">
                Total :{" "}
                {CART.map((item) => item.price * item.quantity).reduce(
                  (total, value) => total + value,
                  0
                )}
              </span>
            </p>
          </div>
          <div className="text-center">
            <Link to="/">
              <button className="btn btn-danger mr-3 backAndBuyNowBtn">
                Back
              </button>
            </Link>
            <Link to="/product-summery">
              <button className="btn btn-success ml-3">Buy Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
