import React from "react";

import "../style/Login.css";

const Login = () => {
  return (
    <div className="Login">
      {/* <!-- Start of content --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-2">
              <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                  <div className="col-md-6">
                    <h1 className="h1-login text-center mb-3">Welcome</h1>
                    <p className="text-center text-muted mb-5">
                      Log in into your exiting account
                    </p>
                    <hr size="1" color="#F5F5F5" />
                    <form action="#">
                      <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="E-mail"
                          style={{ height: "60px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Password"
                          style={{ height: "60px" }}
                        />
                      </div>
                      <div className="form-check d-flex justify-content-start mb-3">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label ms-2">
                          I agree to terms & conditions
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          id="btn-login"
                          type="submit"
                          className="btn btn-primary btn-lg mt-4"
                        >
                          Log in
                        </button>
                      </div>
                      <div className="d-flex justify-content-end mt-2">
                        <small className="d-block">
                          <a
                            href="#"
                            className="a-login text-decoration-none text-muted"
                          >
                            Forgot Password ?
                          </a>
                        </small>
                      </div>
                      <small className="d-block text-center text-muted mt-4">
                        Don’t have an account?
                        <a
                          id="a-login"
                          className="text-decoration-none"
                          href="#"
                        >
                          Sign Up
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

export default Login;
