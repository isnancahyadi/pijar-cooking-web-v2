import React from "react";

import "../style/Register.css";

const Register = () => {
  return (
    <div className="Register">
      {/* <!-- Start of content --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-2">
              <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                  <div className="col-md-8">
                    <h1 className="h1-register text-center mb-3">
                      Let's Get Started!
                    </h1>
                    <p className="text-center text-muted mb-4">
                      Create new account to access all features
                    </p>
                    <hr size="1" color="#F5F5F5" />
                    <form action="/login">
                      <div className="mb-3">
                        <label className="form-label">Fullname*</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your fullname"
                          style={{ height: "10px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">E-mail address*</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter e-mail address"
                          style={{ height: "10px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter your phone number"
                          style={{ height: "10px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Create Password*</label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Create Password"
                          style={{ height: "10px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Re-enter Password*</label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Re-enter Password"
                          style={{ height: "10px" }}
                        />
                      </div>
                      <div className="form-check d-flex justify-content-start mb-2">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label ms-2">
                          I agree to terms & conditions
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          id="btn-register"
                          type="submit"
                          className="btn btn-primary btn-lg mt-4"
                        >
                          Register Account
                        </button>
                      </div>
                      <small className="d-block text-center text-muted mt-2">
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
            <div className="col-md-6 order-1">
              <div
                className="img-login"
                style={{ backgroundImage: "url('/assets/img/login-img.jpg')" }}
              >
                <div
                  className="img-login"
                  style={{ backgroundColor: "rgba(215, 154, 255, 0.85)" }}
                >
                  <div className="row justify-content-center align-items-center vh-100">
                    <img
                      src="/assets/img/logo-3.svg"
                      style={{ width: "30%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of content --> */}
    </div>
  );
};

export default Register;
