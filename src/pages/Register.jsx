import React, { useEffect, useState } from "react";

import "../style/Register.css";
import RegAccount from "../components/RegAccount";
import RegProfile from "../components/RegProfile";

const Register = () => {
  const [page, setPage] = useState("regAccount");
  const [username, setUsername] = useState(null);

  useEffect(() => {
    document.title = "Register";
  }, []);

  const handleSubmit = (page, username) => {
    setPage(page);
    setUsername(username);
  };

  return (
    <div className="Register">
      {/* <!-- Start of content --> */}
      <section>
        <div className="container-fluid">
          <div className="row">
            {page === "regAccount" ? (
              <>
                <RegAccount handleSubmit={handleSubmit} />
              </>
            ) : (
              <>
                <RegProfile user={username} />
              </>
            )}
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
