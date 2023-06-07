import React, { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegProfile = ({ user }) => {
  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const submitProfile = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/user`, {
        fullname: fullname,
        phone_number: phoneNumber,
        username: user,
      })
      .then(() => {
        Swal.fire({
          title: "Register Success",
          text: "Register success. Please login to app.",
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Register Failed",
          text:
            error?.response?.data?.message ?? "Something wrong with our app",
          icon: "error",
        });
        console.log(`${fullname}, ${phoneNumber}, ${user}`);
      });
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
                Let we know, who are you
              </p>
              <hr size="1" color="#F5F5F5" />
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <div className="mb-3">
                  <label className="form-label">Fullname*</label>
                  <input
                    type="text"
                    className="input-register form-control form-control-lg"
                    placeholder="Enter your fullname"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number*</label>
                  <input
                    type="text"
                    className="input-register form-control form-control-lg"
                    placeholder="Enter your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                    onClick={submitProfile}
                  >
                    Register Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegProfile;
