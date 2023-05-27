import React from "react";
import { useNavigate } from "react-router";
// import Timer from "./Timer.js";
import "../App.js";

function ConfirmPage() {
  const navigate = useNavigate();
  const navigateHomePage = () => {
    navigate("/");
  };
  return (
    <div className="confimationCotainer">
      <h1 className="confimationHeading">Your Item has Successfully Placed.</h1>
      <button onClick={navigateHomePage} className="btn btn-primary">
        Home
      </button>
    </div>
  );
}
export default ConfirmPage;
