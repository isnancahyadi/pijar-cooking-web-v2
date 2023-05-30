import React, { useEffect } from "react";

import "../style/Register.css";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className="Register">
      {/* <!-- Start of content --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
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
                    <form action="/login">
                      <div className="mb-3">
                        <label className="form-label">Fullname*</label>
                        <input
                          type="text"
                          className="input-register form-control form-control-lg"
                          placeholder="Enter your fullname"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">E-mail address*</label>
                        <input
                          type="email"
                          className="input-register form-control form-control-lg"
                          placeholder="Enter e-mail address"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="input-register form-control form-control-lg"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Create Password*</label>
                        <input
                          type="password"
                          className="input-register form-control form-control-lg"
                          placeholder="Create Password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Re-enter Password*</label>
                        <input
                          type="password"
                          className="input-register form-control form-control-lg"
                          placeholder="Re-enter Password"
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
            <div className="register-img col-md-6 order-1 animate__animated animate__fadeInLeft">
              <div
                className="img-login"
                style={{ backgroundImage: "url('/assets/img/login-img.jpg')" }}
              >
                <div
                  className="img-login"
                  style={{ backgroundColor: "rgba(215, 154, 255, 0.85)" }}
                >
                  <div className="img-login row justify-content-center align-items-center">
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
