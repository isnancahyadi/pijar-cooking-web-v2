import React, { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

const RegAccount = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const submitAccount = () => {
    if (rePassword === password) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, {
          username: username,
          email: email,
          password: password,
        })
        .then((result) => {
          if (result?.status === 201) {
            handleSubmit("regProfile", result?.data?.payload[0].username);
          }
        })
        .catch((error) => {
          Swal.fire({
            title: "Register Failed",
            text:
              error?.response?.data?.message ?? "Something wrong with our app",
            icon: "error",
          });
        });
    } else {
      Swal.fire({
        title: "Register Failed",
        text: "Password must be same.",
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="col-md-6 order-2 animate__animated animate__fadeIn">
        <div className="container">
          <div className="row cont-form-register justify-content-center align-items-center">
            <div className="col-md-8">
              <h1 className="h1-register text-center mb-3">
                Let's Get Started!
              </h1>
              <p className="txt-register text-center text-muted mb-4">
                Create new account to access all features
              </p>
              <hr size="1" color="#F5F5F5" />
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Username*</label>
                  <input
                    type="text"
                    className="input-register form-control form-control-lg"
                    placeholder="Enter a username you want"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">E-mail address*</label>
                  <input
                    type="email"
                    className="input-register form-control form-control-lg"
                    placeholder="Enter e-mail address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Create Password*</label>
                  <input
                    type="password"
                    className="input-register form-control form-control-lg"
                    placeholder="Create Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Re-enter Password*</label>
                  <input
                    type="password"
                    className="input-register form-control form-control-lg"
                    placeholder="Re-enter Password"
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
                <div className="txt-register form-check d-flex justify-content-start mb-2">
                  <input className="form-check-input" type="checkbox" />
                  <label className="txt-register form-check-label ms-2">
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    id="btn-register"
                    type="submit"
                    className="btn btn-primary btn-lg mt-4"
                    onClick={submitAccount}
                  >
                    Register Account
                  </button>
                </div>
                <small className="txt-register d-block text-center text-muted mt-2">
                  Already have account?
                  <a
                    id="a-register"
                    className="text-decoration-none"
                    href="/login"
                  >
                    {" "}
                    Log in Here
                  </a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegAccount;
