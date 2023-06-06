import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import "../style/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/profile");
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/auth/login", {
        username: username,
        password: password,
      })
      .then(() => {
        Swal.fire({
          title: "Login Success",
          text: "Login success. Redirect to app...",
          icon: "success",
        }).then(() => {
          localStorage.setItem("auth", "true");
          window.location.href = "/profile";
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed",
          text:
            error?.response?.data?.message ?? "Something wrong with our app",
          icon: "error",
        });
      });
  };

  return (
    <div className="Login">
      {/* <!-- Start of content --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 order-2 animate__animated animate__fadeIn">
              <div className="container">
                <div className="row cont-form-login justify-content-center align-items-center">
                  <div className="col-md-6">
                    <h1 className="h1-login text-center mb-3">Welcome</h1>
                    <p className="txt-login text-center text-muted mb-5">
                      Log in into your exiting account
                    </p>
                    <hr size="1" color="#F5F5F5" />
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                      }}
                    >
                      <div className="mb-3">
                        <label className="form-label">Username or E-mail</label>
                        <input
                          type="text"
                          className="input-login form-control form-control-lg"
                          placeholder="Username or E-mail"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="input-login form-control form-control-lg"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="txt-login form-check d-flex justify-content-start mb-3">
                        <input className="form-check-input" type="checkbox" />
                        <label className="txt-login form-check-label ms-2">
                          I agree to terms & conditions
                        </label>
                      </div>
                      <div className="d-grid">
                        <button
                          id="btn-login"
                          type="submit"
                          className="btn btn-primary btn-lg mt-4"
                          onClick={handleLogin}
                        >
                          Log in
                        </button>
                      </div>
                      <div className="d-flex justify-content-end mt-2">
                        <small className="d-block">
                          <a
                            id="a-login"
                            href="#"
                            className="text-decoration-none text-muted"
                          >
                            Forgot Password ?
                          </a>
                        </small>
                      </div>
                      <small className="txt-login d-block text-center text-muted mt-4">
                        Don’t have an account?
                        <a
                          id="a-login"
                          className="text-decoration-none"
                          href="/register"
                        >
                          {" "}
                          Sign Up
                        </a>
                      </small>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-img col-md-6 order-1 animate__animated animate__fadeInLeft">
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

export default Login;
