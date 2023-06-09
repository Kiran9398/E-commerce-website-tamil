import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
const LoginForm = () => {
  return (
    <div className="loginFormMainContainer">
      <form className="LoginFormContainer">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to="/sighup-form">
          <p className="mt-2">
            Don't have account <span>Click</span> here
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
