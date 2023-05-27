import React from "react";

import "../style/Profile.css";
import Navbar from "../components/Navbar";
import RecipeTabs from "../components/RecipeTabs";

const Profile = () => {
  return (
    <div className="Profile">
      <Navbar />

      {/* <!-- Start of profile section --> */}
      <section id="content">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-center">
            <img
              id="profile-pict"
              src="/assets/img/profile/profile-1.jpg"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="container mt-5">
            <h1 className="h1-profile text-center">Isnan Arif Cahyadi</h1>
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
