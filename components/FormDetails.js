import { Link } from "react-router-dom";
import "../App.css";
import "./FormDetails.css";

const FormDetails = ({
  onSubmitAddressBtnHandler,
  fName,
  setFname,
  lName,
  setLname,
  adress,
  setAdress,
  number,
  setNumber,
  email,
  setEmail,
  setPIN,
  PIN,
}) => {
  return (
    <div className="pb-5 formMainContainer">
      <h1 className="text-center pt-3">Please Enter Your Details</h1>
      <div className="formContainer">
        <form>
          <label htmlFor="FirstName">First Name</label>
          <br />
          <input
            onChange={(e) => setFname(e.target.value)}
            value={fName}
            id="FirstName"
            type="text"
            name="person"
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            onChange={(e) => setLname(e.target.value)}
            value={lName}
            id="lastName"
            type="text"
            name="person"
          />
          <br />
          <label htmlFor="textarea">Address</label>
          <br />

          <textarea
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
            id="textarea"
            cols="30"
            rows="4"
          ></textarea>
          <br />
          <label htmlFor="pin">PIN Code</label>
          <br />
          <input
            onChange={(e) => setPIN(e.target.value)}
            value={PIN}
            id="pin"
            type="text"
            name="person"
          />
          <br />
          <label htmlFor="mNumber">Mobile Number</label>
          <br />
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            id="mNumber"
            type="text"
            name="person"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="person"
          />
          <br />
          <br />

          <Link to="/address-page">
            <button
              onClick={onSubmitAddressBtnHandler}
              className="btn btn-primary"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FormDetails;
