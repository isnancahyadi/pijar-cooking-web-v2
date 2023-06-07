import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../style/Profile.css";
import Navbar from "../components/Navbar";
import RecipeTabs from "../components/RecipeTabs";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "My Profile";
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/login");
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/user`).then((result) => {
      setUser(result?.data?.payload[0]);
    });
  }, []);

  return (
    <div className="Profile">
      <Navbar />

      {/* <!-- Start of profile section --> */}
      <section id="content">
        <div className="container-fluid animate__animated animate__zoomIn">
          <div className="d-flex align-items-center justify-content-center">
            <img
              id="profile-pict"
              src={user?.profile_picture}
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="container mt-5">
            <h1 className="h1-profile text-center">{user?.fullname}</h1>
          </div>
        </div>
      </section>
      {/* <!-- End of profile section --> */}

      {/* <!-- Start of recipe profile section --> */}
      <section id="content-2">
        <RecipeTabs />
      </section>
      {/* <!-- End of recipe profile section --> */}
    </div>
  );
};

export default Profile;
