import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
//import "./PaymentPage.css";

const PaymentPage = ({ CART }) => {
  const [showNetBankingDetails, setShowNetBankingDetails] = useState(false);
  const [upi, setUpi] = useState(0);
  const [showUpiDetails, setShowUpiDetails] = useState(false);
  const [netBankingDetails, setNetBankingDetails] = useState(false);
  const [showEmiDetais, setShowEmiDetails] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const total = CART.map((item) => item.price * item.quantity).reduce(
    (total, value) => total + value,
    0
  );
  const onCreditDebitCardHandler = () => {
    setShowNetBankingDetails(true);
    setShowUpiDetails(false);
    setNetBankingDetails(false);
    setShowEmiDetails(false);
  };
  const upiHandler = () => {
    setUpi(15);
    setShowNetBankingDetails(false);
    setShowUpiDetails(true);
    setNetBankingDetails(false);
    setShowEmiDetails(false);
  };
  const netBankingHandler = () => {
    setNetBankingDetails(true);
    setShowUpiDetails(false);
    setShowNetBankingDetails(false);
    setShowEmiDetails(false);
  };
  const emiHandler = () => {
    setShowEmiDetails(true);
    setNetBankingDetails(false);
    setShowUpiDetails(false);
    setShowNetBankingDetails(false);
  };
  const walletHandler = () => {
    setShowEmiDetails(false);
    setNetBankingDetails(false);
    setShowUpiDetails(false);
    setShowNetBankingDetails(false);
  };
  const saveAmount = (total * upi) / 100;
  console.log(saveAmount);
  return (
    <div className="paymentpageContainer pt-3">
      <h2 className="text-center paymentHeading">Payments</h2>
      <div className="paymentOptionContainer">
        <div className="optionsStyles">
          <h5>Suggested for you</h5>
          <input className="radio" name="payment" type="radio" id="sbi" />
          <label htmlFor="sbi">State Bank of India</label>
        </div>
        <hr />
        <br />
        <h5>Other Payment Options</h5>
        <hr />
        <div className="optionsStyles">
          <input
            onClick={onCreditDebitCardHandler}
            className="radio"
            name="payment"
            type="radio"
            id="creditDebit"
          />
          <label htmlFor="creditDebit">CreditCard/DebitCard/ATM Cart</label>
          <p className="addAndSecurePara">
            Add and secure your card as RBI guidlines
          </p>
          {showNetBankingDetails && (
            <div>
              <h6 className="headingH6">Credit/Debit Card Number</h6>
              <input
                className="paymentsEnabledInputs"
                type="text"
                placeholder="Enter your card 16-digits"
              />
              <h6 className="headingH6">CVV</h6>
              <input className="cvvInput" type="text" placeholder="CVV" />
              <h6 className="headingH6 mt-1">Expiry date</h6>
              <input className="expiryDateInput mb-2" type="date" />
            </div>
          )}
        </div>
        <div>
          <input onClick={upiHandler} name="payment" type="radio" id="upi" />
          <label htmlFor="upi">UPI</label>
          <p className="upiOfferPara">Up to 15% instant saving on UPI</p>
          {showUpiDetails && (
            <input
              className="upiInputBar"
              type="email"
              placeholder="Type your UPI ID"
            />
          )}
        </div>

        <br />
        <div>
          <input
            onClick={netBankingHandler}
            name="payment"
            type="radio"
            id="netBanking"
          />
          <label htmlFor="netBanking">NetBanking</label>
          {netBankingDetails && (
            <div className="mt-2">
              <h6 className="headingH6">UserName</h6>
              <input
                className="paymentsEnabledInputs"
                type="text"
                placeholder="Enter your username"
              />
              <h6 className="headingH6">Password</h6>
              <input
                className="paymentsEnabledInputs"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          )}
        </div>
        <br />
        <div>
          <input onClick={emiHandler} name="payment" type="radio" id="emi" />
          <label htmlFor="emi">EMI</label>
          {showEmiDetais && (
            <div>
              <label for="cads">Choose your cads : </label>
              <select name="cads" id="cads">
                <option value="select">Select Your Card</option>
                <option value="icici">ICICI Card</option>
                <option value="hdfc">HDFC Card</option>
                <option value="axis">Axis Card</option>
                <option value="sbi">SBI Card</option>
                <option value="indian">Indan Card</option>
                <option value="canera">Canera Card</option>
                <option value="union">Union bank Card</option>
                <option value="kotakMahindra">Kotak Mahindra bank Card</option>
              </select>
            </div>
          )}
        </div>
        <br />
        <div>
          <input
            onClick={walletHandler}
            name="payment"
            type="radio"
            id="wallet"
          />
          <label htmlFor="wallet">Wallet</label>
        </div>
        <br />
        <div>
          <input name="payment" type="radio" id="cod" disabled />
          <label htmlFor="cod">COD</label>
          <p className="codparaStyles">*Cash on Delivery Not Available</p>
        </div>

        <br />
        <div className="payableAmount">
          Payable Amount
          <div>
            {total}
            /-
          </div>
        </div>
        <br />
        {showUpiDetails && (
          <div className="payableAmount">
            You Save
            <div>
              {saveAmount}
              /-
            </div>
          </div>
        )}
        <hr />
        <div className="payableAmount">
          Final Amount
          <div>
            {total - saveAmount}
            /-
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="/product-summery">
          <button className="btn btn-danger makepaymentAndBacktBtn backBtnInPaymentPage">Back</button>
        </Link>
        <Link to="/form-page">
          <button className="btn btn-primary makepaymentAndBacktBtn makePaymentBtnInPaymentPage">Make a Payment</button>
        </Link>
      </div>
    </div>
  );
};
export default PaymentPage;
