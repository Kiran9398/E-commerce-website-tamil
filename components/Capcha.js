import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Capcha = ({ user }) => {
  const [inp, setInp] = useState();
  const randomNumberOne = Math.floor(Math.random() * 10 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 10 + 1);
  const [fRandom, setfRandom] = useState(randomNumberOne);
  const [lRandom, setLRandom] = useState(randomNumberTwo);
  const [confirm, setConfirm] = useState(false);

  const [eMessage, setEMasage] = useState();
  const onCaptchaChangeHandler = (e) => {
    setInp(e.target.value);
  };
  console.log(inp);
  const onValidateHandler = () => {
    if (Number(inp) === lRandom + fRandom) {
      setEMasage("validated");
      setConfirm(true);
    } else {
      setEMasage("Invalid Captcha!!");
      setConfirm(false);
    }
  };

  return (
    <>
      <div className="addressPageContainer">
        {user.map((item) => {
          return (
            <div>
              <h1 className="text-center deliveryAdress">Delivery Address</h1>
              <div className="addresDetails">
                <span>{`${item.fName} ${item.lName}`}</span>
                <br />
                <span>{`Address : ${item.adress} - ${item.PIN}`}</span>
                <br />
                <span>{`Mobile No : ${item.number}`}</span>
                <br />
                <span>{`Email Address : ${item.email}`}</span>
                <p id="estimatedDeliveryPara">
                  Estimated Delivery Time : 3-5 Days on this address
                </p>
                <div className="captchaContainer text-center">
                  <p className="enterYourCapthaPara">Enter your Captha</p>
                  <span className="randomNumber">{`${fRandom} + ${lRandom} = ?`}</span>
                  <br />
                  <input
                    className="captchaInp"
                    onChange={onCaptchaChangeHandler}
                    type="text"
                  />

                  <button onClick={onValidateHandler} className="validateBtn">
                    Validate
                  </button>
                  <br />
                  <span className="validatePara">{eMessage}</span>
                </div>
              </div>
            </div>
          );
        })}
        {confirm && (
          <Link to="/confirm-page">
            <button className="confirmYourOrderBtn">Confirm Your Order</button>
          </Link>
        )}
      </div>
    </>
  );
};
export default Capcha;
